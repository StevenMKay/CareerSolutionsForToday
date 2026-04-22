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
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";

const APP_URL = "https://careersolutionsfortoday.com/resumebuilder.html";

// ---- Google Sign-In config ---------------------------------------------------
// We use the official Google Play Services SDK (native account picker), NOT a
// browser-based OAuth flow. The webClientId is the Firebase Web OAuth client
// (client_type 3 in google-services.json) — it's what the id_token is issued
// FOR, so firebase.auth can consume it via GoogleAuthProvider.credential().
// The Android client ID isn't passed in code: the SDK reads it from
// google-services.json at link time based on the app's signing SHA-1.
const GOOGLE_WEB_CLIENT_ID =
  "834959161768-k3ko0h4os7u1g8npd19uaf0e0gp8sftl.apps.googleusercontent.com";

// Hosts that must be opened in the system browser (not inside the WebView)
// because their redirects don't work inside embedded WebViews. Google sign-in
// no longer needs accounts.google.com here — the native SDK handles it —
// but it's kept in case resumebuilder.html ever links there directly.
const EXTERNAL_HOSTS = [
  "accounts.google.com",
  "checkout.stripe.com",
  "billing.stripe.com",
];

function shouldOpenExternally(url: string): boolean {
  return EXTERNAL_HOSTS.some((host) => url.includes(host));
}

// Injected into the WebView at document-start so errors thrown inside
// resumebuilder.html (the hosted web app) are forwarded to the RN layer via
// window.ReactNativeWebView.postMessage. Paired with the onMessage handler
// below, which logs them with the [WEBVIEW-ERROR] tag.
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

export default function Index() {
  const webviewRef = useRef<WebView>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  // ----- Native Google sign-in -----------------------------------------------
  // Uses the official Google Play Services SDK (@react-native-google-signin).
  // This shows Android's native account picker — no browser, no Chrome Custom
  // Tabs, no redirect URIs. The SDK reads the Android OAuth client info from
  // google-services.json at link time and matches it against the app's
  // signing SHA-1. The webClientId below tells Google which audience to issue
  // the id_token for; that id_token is then handed to the WebView, which
  // calls firebase.auth.signInWithCredential(GoogleAuthProvider.credential())
  // to complete the Firebase session.
  useEffect(() => {
    try {
      GoogleSignin.configure({
        webClientId: GOOGLE_WEB_CLIENT_ID,
        offlineAccess: false,
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn("[RN-ERROR] GoogleSignin.configure failed", e);
    }
  }, []);

  const runNativeGoogleSignIn = useCallback(async () => {
    const injectResult = (idToken: string | null, errorMsg?: string) => {
      const payload = idToken
        ? `window.__handleNativeGoogleIdToken(${JSON.stringify(idToken)});`
        : `window.__handleNativeGoogleIdToken(null, ${JSON.stringify(
            errorMsg || "Google sign-in failed"
          )});`;
      webviewRef.current?.injectJavaScript(
        `try { ${payload} } catch(e){} true;`
      );
    };

    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      // signOut first to always force the account picker (otherwise the SDK
      // silently reuses the last-signed-in account which can confuse users
      // who have multiple Google accounts on the device).
      try {
        await GoogleSignin.signOut();
      } catch (_) {
        // ignore — no previous session
      }
      const result = (await GoogleSignin.signIn()) as unknown as {
        idToken?: string;
        data?: { idToken?: string };
      };
      // v13 returns { data: { idToken } }; older versions return { idToken }.
      const idToken = result?.data?.idToken || result?.idToken || null;
      if (!idToken) {
        injectResult(null, "Google didn't return an ID token. Try again.");
        return;
      }
      injectResult(idToken);
    } catch (err: unknown) {
      const e = err as { code?: string; message?: string };
      let msg = e?.message || "Google sign-in failed";
      if (e?.code === statusCodes.SIGN_IN_CANCELLED) {
        msg = "Sign-in cancelled";
      } else if (e?.code === statusCodes.IN_PROGRESS) {
        msg = "Sign-in already in progress";
      } else if (e?.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        msg = "Google Play Services not available on this device";
      }
      // eslint-disable-next-line no-console
      console.warn("[RN-ERROR] native google signin failed", e);
      injectResult(null, msg);
    }
  }, []);


  // Safety net: hide loader after 6s even if onLoadEnd doesn't fire
  useEffect(() => {
    if (!loading) return;
    const t = setTimeout(() => setLoading(false), 6000);
    return () => clearTimeout(t);
  }, [loading, reloadKey]);

  // Android hardware back button: navigate WebView history first
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

  // --- Web fallback: react-native-webview doesn't render on web.
  // Just redirect the browser directly to the hosted HTML so the preview
  // URL shows exactly what the Android WebView will load. ---
  useEffect(() => {
    if (Platform.OS === "web" && typeof window !== "undefined") {
      window.location.replace(APP_URL);
    }
  }, []);

  if (Platform.OS === "web") {
    return <View style={styles.container} testID="resume-app-container" />;
  }

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom", "left", "right"]}>
      <View style={styles.container} testID="resume-app-container">
        {error ? (
          <View style={styles.errorBox} testID="error-box">
            <Text style={styles.errorTitle}>Couldn&apos;t load the app</Text>
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
            // Inject the error bridge as early as possible so errors during
            // initial HTML parse are also captured. `true;` at the tail is
            // required by react-native-webview.
            injectedJavaScriptBeforeContentLoaded={WEBVIEW_ERROR_BRIDGE_JS}
            // Receives JSON-encoded messages from the WebView. The bridge
            // sends {__rnError:true, payload:{...}}; everything else is
            // ignored so this doesn't conflict with other postMessage users.
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
                } else if (data && data.type === "google-signin-request") {
                  // WebView asked us to run native Google sign-in. Uses the
                  // Play Services SDK (in-app account picker dialog) — no
                  // browser involved, no redirect URIs, no user prompts.
                  runNativeGoogleSignIn();
                }
              } catch (_) {
                // Ignore non-JSON messages from the page.
              }
            }}
            // Android-only: if the WebView renderer process dies (usually
            // OOM on older devices) reload instead of letting the native
            // view become a black rectangle. Returning true tells the OS we
            // handled the crash.
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
                ? "Mozilla/5.0 (Linux; Android 12; Mobile) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36 CareerResumeBuilder/1.0"
                : undefined
            }
            testID="resume-webview"
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
      <ActivityIndicator size="small" color="#60A5FA" />
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0F172A",
  },
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },
  webview: {
    flex: 1,
    backgroundColor: "#0F172A",
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0F172A",
  },
  errorBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#0F172A",
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
    backgroundColor: "#005EB8",
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
