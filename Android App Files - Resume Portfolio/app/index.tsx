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
import * as AuthSession from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";

// Finalize any in-flight auth session (needed after redirect back from
// Google). Safe to call unconditionally on every platform.
WebBrowser.maybeCompleteAuthSession();

const APP_URL = "https://careersolutionsfortoday.com/resumebuilder.html";

// ---- Google OAuth client IDs -------------------------------------------------
// WEB client ID (client_type 3 in google-services.json): used as the audience
// for the returned id_token so firebase.auth can consume it via
// GoogleAuthProvider.credential(idToken). This is the same value the web app
// already uses for desktop/browser Google sign-in.
const GOOGLE_WEB_CLIENT_ID =
  "834959161768-k3ko0h4os7u1g8npd19uaf0e0gp8sftl.apps.googleusercontent.com";

// ANDROID client ID (client_type 1): matches the app's package name +
// signing-key SHA-1. Play Store re-signs the AAB with Google's App Signing
// key, so the fingerprint users' devices actually present is
// 9E:4F:03:F9:F3:36:... — which maps to this client ID in Firebase. Builds
// installed from the Play Store (internal / closed / open / production
// tracks) all use this client. Sideloaded APKs signed with the upload key
// (SHA 44:EA:75:...) would need the other Android client — not used here.
const GOOGLE_ANDROID_CLIENT_ID =
  process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID ||
  "834959161768-ktgisshuadkl9uvkta07pifp6dgfcbvn.apps.googleusercontent.com";

// Hosts that must be opened in the system browser (not inside the WebView)
// because OAuth / Checkout redirects don't work inside embedded WebViews.
// NOTE: accounts.google.com stays here ONLY for the legacy web-popup
// fallback. Native Google sign-in uses expo-auth-session (custom tab) and
// completes entirely outside the WebView.
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
  // Uses expo-auth-session's Google provider. Returns an idToken we hand off
  // to the WebView, which calls firebase.auth.signInWithCredential() against
  // the already-initialized Firebase app. This avoids the WebView-hostile
  // signInWithPopup → signInWithRedirect fallback that triggers the
  // "missing initial state" error.
  // Build the redirect URI explicitly so Google and the Android manifest
  // intent-filter agree on the exact value. For Android Google OAuth clients
  // the required form is:
  //   com.googleusercontent.apps.<reversed-client-id>:/oauthredirect
  // This is registered as a <intent-filter> scheme via app.json (the reversed
  // client ID is the second entry in the scheme array). Without pinning the
  // redirect URI here expo-auth-session can emit a proxy URL (auth.expo.io)
  // in production builds, which Google rejects or sends to a dead web page.
  const googleRedirectUri = AuthSession.makeRedirectUri({
    native:
      "com.googleusercontent.apps.834959161768-ktgisshuadkl9uvkta07pifp6dgfcbvn:/oauthredirect",
  });

  const [, googleAuthResponse, promptGoogleAsync] = Google.useIdTokenAuthRequest({
    clientId: GOOGLE_WEB_CLIENT_ID,
    ...(GOOGLE_ANDROID_CLIENT_ID
      ? { androidClientId: GOOGLE_ANDROID_CLIENT_ID }
      : {}),
    redirectUri: googleRedirectUri,
  });

  useEffect(() => {
    if (!googleAuthResponse) return;
    if (googleAuthResponse.type === "success") {
      const idToken = (googleAuthResponse.params as { id_token?: string })
        ?.id_token;
      if (idToken) {
        // Deliver the token to the hosted web app. resumebuilder.html
        // defines window.__handleNativeGoogleIdToken which completes the
        // Firebase sign-in using GoogleAuthProvider.credential(idToken).
        const js = `
          try {
            if (typeof window.__handleNativeGoogleIdToken === 'function') {
              window.__handleNativeGoogleIdToken(${JSON.stringify(idToken)});
            }
          } catch (e) {}
          true;
        `;
        webviewRef.current?.injectJavaScript(js);
      } else {
        webviewRef.current?.injectJavaScript(
          `try { window.__handleNativeGoogleIdToken && window.__handleNativeGoogleIdToken(null, 'No idToken returned'); } catch(e){} true;`
        );
      }
    } else if (
      googleAuthResponse.type === "error" ||
      googleAuthResponse.type === "cancel" ||
      googleAuthResponse.type === "dismiss"
    ) {
      const errMsg =
        googleAuthResponse.type === "error"
          ? (googleAuthResponse as { error?: { message?: string } }).error
              ?.message || "Google sign-in failed"
          : "Google sign-in cancelled";
      webviewRef.current?.injectJavaScript(
        `try { window.__handleNativeGoogleIdToken && window.__handleNativeGoogleIdToken(null, ${JSON.stringify(
          errMsg
        )}); } catch(e){} true;`
      );
    }
  }, [googleAuthResponse]);

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
                  // WebView asked us to run native Google auth. Force Chrome
                  // Custom Tabs so the Google OAuth redirect hands control
                  // straight back to the app. If the user's default browser
                  // is Edge/Samsung/Firefox those browsers treat the
                  // returned com.googleusercontent.apps.*:/oauthredirect as
                  // an "open external app" navigation (shows a confirmation
                  // prompt and can strand the user on google.com). Chrome
                  // Custom Tabs is the only browser that implements the
                  // silent handoff spec.
                  const launchWith = async (browserPackage?: string) => {
                    try {
                      return await promptGoogleAsync(
                        browserPackage ? { browserPackage } : undefined
                      );
                    } catch (err) {
                      throw err;
                    }
                  };
                  launchWith("com.android.chrome")
                    .catch(() => launchWith(undefined))
                    .catch((err) => {
                      // eslint-disable-next-line no-console
                      console.warn("[RN-ERROR] google auth prompt failed", err);
                      webviewRef.current?.injectJavaScript(
                        `try { window.__handleNativeGoogleIdToken && window.__handleNativeGoogleIdToken(null, ${JSON.stringify(
                          (err && err.message) || "Google sign-in failed"
                        )}); } catch(e){} true;`
                      );
                    });
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
