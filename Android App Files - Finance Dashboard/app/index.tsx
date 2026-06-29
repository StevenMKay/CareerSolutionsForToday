import { useRef, useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  BackHandler,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView, WebViewNavigation } from "react-native-webview";
import { useFocusEffect } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import * as FileSystem from "expo-file-system/legacy";
import * as Sharing from "expo-sharing";

// ---- Hosted page this app wraps --------------------------------------------
// The native app is a thin shell around the published Finance Dashboard.
// Updating the page on GitHub Pages (or wherever it's hosted) updates the
// in-app content immediately — no Play Store resubmission needed for
// content changes.
//
// You can override this at build time via EXPO_PUBLIC_APP_URL in .env, but
// for an app-store build the URL is locked to the constant below so users
// can't be redirected by a stale env file.
const APP_URL = "https://stevenmkay.github.io/Finance-Dashboard/dashboard.html";

// Hosts that must be opened in the system browser instead of the embedded
// WebView. Google blocks OAuth flows inside WebViews (disallowed_useragent
// error), and Stripe Checkout / Billing portals are best handled by the
// system browser too.
const EXTERNAL_HOSTS = [
  "accounts.google.com",
  "checkout.stripe.com",
  "billing.stripe.com",
];

function shouldOpenExternally(url: string): boolean {
  return EXTERNAL_HOSTS.some((host) => url.includes(host));
}

// ----------------------------------------------------------------------------
// WebView -> RN bridges
// ----------------------------------------------------------------------------

// Forward JS errors thrown inside the dashboard to the native layer so they
// show up in adb logcat / Play Console pre-launch reports tagged
// [WEBVIEW-ERROR]. Paired with the onMessage handler below.
const WEBVIEW_ERROR_BRIDGE_JS = `
(function(){
  if (window.__rnErrBridge) return;
  window.__rnErrBridge = true;
  function send(p){
    try {
      if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
        window.ReactNativeWebView.postMessage(JSON.stringify({__rnError:true, payload:p}));
      }
    } catch(_){}
  }
  window.addEventListener('error', function(e){
    send({
      message: (e && e.message) || 'Unknown error',
      source: e && e.filename,
      lineno: e && e.lineno,
      colno: e && e.colno,
      stack: e && e.error && e.error.stack
    });
  }, true);
  window.addEventListener('unhandledrejection', function(e){
    var r = e && e.reason;
    send({
      message: (r && r.message) || String(r || 'Unhandled rejection'),
      stack: r && r.stack
    });
  });
  true;
})();
`;

// Download bridge: react-native-webview on Android can't handle blob: URLs
// from <a download> clicks. This intercepts download anchors, reads the
// blob as base64, and posts it to the native layer which saves to cache
// and opens the share sheet. Used by the Strategy Lab CSV export (which
// uses URL.createObjectURL) and any future "Export results" feature.
const WEBVIEW_DOWNLOAD_BRIDGE_JS = `
(function(){
  if (window.__rnDlBridge) return;
  window.__rnDlBridge = true;

  function post(msg){
    try {
      if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
        window.ReactNativeWebView.postMessage(JSON.stringify(msg));
      }
    } catch(_){}
  }

  function blobToBase64(blob){
    return new Promise(function(resolve, reject){
      var r = new FileReader();
      r.onerror = function(){ reject(r.error); };
      r.onload = function(){
        var s = String(r.result || '');
        var i = s.indexOf('base64,');
        resolve(i >= 0 ? s.slice(i + 7) : '');
      };
      r.readAsDataURL(blob);
    });
  }

  async function handleBlobUrl(url, filename, mime){
    try {
      var res = await fetch(url);
      var blob = await res.blob();
      var b64 = await blobToBase64(blob);
      post({
        __rnDownload: true,
        filename: filename || 'download',
        mime: mime || blob.type || 'application/octet-stream',
        base64: b64
      });
    } catch(e){
      post({ __rnError: true, payload: { message: 'Download failed: ' + (e && e.message) } });
    }
  }

  var origClick = HTMLAnchorElement.prototype.click;
  HTMLAnchorElement.prototype.click = function(){
    try {
      var href = this.getAttribute('href') || '';
      var dl = this.getAttribute('download');
      if (dl !== null && /^blob:/i.test(href)) {
        handleBlobUrl(href, dl || 'download', this.type || '');
        return;
      }
      if (dl !== null && /^data:/i.test(href)) {
        try {
          var parts = href.split(',');
          var meta = parts[0] || '';
          var data = parts.slice(1).join(',');
          var mime = (meta.match(/^data:([^;]+)/) || [])[1] || 'application/octet-stream';
          var isB64 = /;base64/i.test(meta);
          var b64 = isB64 ? data : btoa(unescape(encodeURIComponent(decodeURIComponent(data))));
          post({ __rnDownload: true, filename: dl || 'download', mime: mime, base64: b64 });
          return;
        } catch(_){}
      }
    } catch(_){}
    return origClick.apply(this, arguments);
  };

  document.addEventListener('click', function(ev){
    var a = ev.target && ev.target.closest ? ev.target.closest('a[download]') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (/^blob:/i.test(href) || /^data:/i.test(href)) {
      ev.preventDefault();
      ev.stopPropagation();
      a.click();
    }
  }, true);

  true;
})();
`;

// ============================================================================
// FUTURE — Google Sign-In via native SDK
// ============================================================================
// Firebase Email/Password login works inside the WebView with no extra work.
// Google Sign-In currently routes through `accounts.google.com`, which is in
// EXTERNAL_HOSTS above — meaning it opens in the system browser. The Firebase
// auth state from that external sign-in does NOT carry back into the WebView
// (cookies are isolated). To enable native Google Sign-In that signs the user
// in inside the WebView session, follow the Resume Portfolio app pattern:
//
//   1. npx expo install @react-native-google-signin/google-signin
//   2. Configure web client ID in app.json plugins
//   3. Inject window.__nativeGoogleSignIn bridge into the WebView
//   4. Update dashboard.html's Google sign-in button to prefer the native
//      bridge when present and fall back to Firebase popup otherwise
//
// Until then, users on Android should sign in with email/password.
// ============================================================================

export default function Index() {
  const webviewRef = useRef<WebView>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  // Hide loader after 6s even if onLoadEnd doesn't fire (rare but possible
  // on flaky networks).
  useEffect(() => {
    if (!loading) return;
    const t = setTimeout(() => setLoading(false), 6000);
    return () => clearTimeout(t);
  }, [loading, reloadKey]);

  // Android hardware back button: navigate WebView history before exiting.
  useFocusEffect(
    useCallback(() => {
      if (Platform.OS !== "android") return;
      const onBackPress = () => {
        if (canGoBack && webviewRef.current) {
          webviewRef.current.goBack();
          return true;
        }
        return false;
      };
      const sub = BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () => sub.remove();
    }, [canGoBack])
  );

  const handleNavigationStateChange = (navState: WebViewNavigation) => {
    setCanGoBack(navState.canGoBack);
  };

  const handleShouldStartLoadWithRequest = (request: { url: string }): boolean => {
    const { url } = request;
    if (!url) return true;
    if (shouldOpenExternally(url)) {
      WebBrowser.openBrowserAsync(url).catch(() => {});
      return false;
    }
    if (
      url.startsWith("mailto:") ||
      url.startsWith("tel:") ||
      url.startsWith("sms:")
    ) {
      WebBrowser.openBrowserAsync(url).catch(() => {});
      return false;
    }
    return true;
  };

  const handleRetry = () => {
    setError(null);
    setLoading(true);
    setReloadKey((k) => k + 1);
  };

  // Save a base64 file from the WebView to a temp path and open the share
  // sheet. Used by the download bridge when the dashboard offers a
  // downloadable export (e.g. Strategy Lab CSV).
  const handleWebViewDownload = useCallback(
    async (filename: string, mime: string, base64: string) => {
      try {
        const safeName = (filename || "download").replace(/[^\w.\-]+/g, "_");
        const path = FileSystem.cacheDirectory + safeName;
        await FileSystem.writeAsStringAsync(path, base64, {
          encoding: FileSystem.EncodingType.Base64,
        });
        const canShare = await Sharing.isAvailableAsync();
        if (canShare) {
          await Sharing.shareAsync(path, {
            mimeType: mime || "application/octet-stream",
            dialogTitle: "Save or share",
            UTI: mime,
          });
        } else {
          // eslint-disable-next-line no-console
          console.warn("[RN-ERROR] Sharing not available on this device");
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn("[RN-ERROR] download save failed", e);
      }
    },
    []
  );

  // Web fallback: react-native-webview doesn't render on web. Send the
  // browser straight to the hosted HTML so the dev preview matches the
  // native app.
  useEffect(() => {
    if (Platform.OS === "web" && typeof window !== "undefined") {
      window.location.replace(APP_URL);
    }
  }, []);

  if (Platform.OS === "web") {
    return <View style={styles.container} testID="finance-dashboard-container" />;
  }

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom", "left", "right"]}>
      <View style={styles.container} testID="finance-dashboard-container">
        {error ? (
          <View style={styles.errorBox} testID="error-box">
            <Text style={styles.errorTitle}>Couldn&apos;t load Finance Dashboard</Text>
            <Text style={styles.errorText}>{error}</Text>
            <TouchableOpacity
              style={styles.retryBtn}
              onPress={handleRetry}
              testID="retry-btn"
            >
              <Text style={styles.retryText}>Retry</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <WebView
            key={reloadKey}
            ref={webviewRef}
            source={{ uri: APP_URL }}
            style={styles.webview}
            originWhitelist={["*"]}
            javaScriptEnabled
            domStorageEnabled
            thirdPartyCookiesEnabled
            sharedCookiesEnabled
            allowsInlineMediaPlayback
            mediaPlaybackRequiresUserAction={false}
            mixedContentMode="always"
            javaScriptCanOpenWindowsAutomatically
            cacheEnabled
            injectedJavaScriptBeforeContentLoaded={WEBVIEW_ERROR_BRIDGE_JS}
            injectedJavaScript={WEBVIEW_DOWNLOAD_BRIDGE_JS}
            onMessage={(event) => {
              try {
                const data = JSON.parse(event.nativeEvent?.data || "{}");
                if (data && data.__rnError && data.payload) {
                  const p = data.payload;
                  // eslint-disable-next-line no-console
                  console.warn(
                    `[WEBVIEW-ERROR] ${p.message || "unknown"}` +
                      (p.source ? ` @ ${p.source}:${p.lineno ?? "?"}:${p.colno ?? "?"}` : "") +
                      (p.stack ? `\n${p.stack}` : "")
                  );
                } else if (data && data.__rnDownload && data.base64) {
                  handleWebViewDownload(
                    String(data.filename || "download"),
                    String(data.mime || "application/octet-stream"),
                    String(data.base64)
                  );
                }
              } catch (_) {
                // Ignore non-JSON messages from the page.
              }
            }}
            onContentProcessDidTerminate={() => {
              // eslint-disable-next-line no-console
              console.warn("[RN-ERROR] webview | fatal=1 | renderer terminated; reloading");
              setReloadKey((k) => k + 1);
            }}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
            onError={(e) => {
              setLoading(false);
              setError(
                e.nativeEvent?.description || "Network error. Please try again."
              );
            }}
            onHttpError={(e) => {
              const status = e.nativeEvent?.statusCode;
              if (status && status >= 500) {
                setError(`Server error (${status}). Please try again.`);
              }
            }}
            onNavigationStateChange={handleNavigationStateChange}
            onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
            userAgent={
              Platform.OS === "android"
                ? "Mozilla/5.0 (Linux; Android 12; Mobile) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36 FinanceDashboard/1.0"
                : undefined
            }
            testID="finance-dashboard-webview"
          />
        )}

        {loading && !error && <LoadingOverlay />}
      </View>
    </SafeAreaView>
  );
}

function LoadingOverlay() {
  return (
    <View style={[styles.loadingOverlay, { pointerEvents: "none" }]}>
      <ActivityIndicator size="small" color="#27ae60" />
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#1A2744",
  },
  container: {
    flex: 1,
    backgroundColor: "#1A2744",
  },
  webview: {
    flex: 1,
    backgroundColor: "#1A2744",
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1A2744",
  },
  errorBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#1A2744",
  },
  errorTitle: {
    color: "#F1F5F9",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  errorText: {
    color: "#94A3B8",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  retryBtn: {
    backgroundColor: "#27ae60",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
