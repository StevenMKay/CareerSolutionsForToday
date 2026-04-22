import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Platform } from "react-native";

// --------------------------------------------------------------------------
// Global JS error handlers (installed once, before the first screen mounts).
//
// Background: Play Console reported a
//   com.facebook.react.common.JavascriptException
// crash on v1.0.0. That signature means an *unhandled* JS error reached the
// native bridge. These handlers intercept errors + unhandled promise
// rejections, log them with an "[RN-ERROR]" prefix (visible in adb logcat
// and Play Console pre-launch reports), and swallow non-fatal errors in
// production so they never escalate to a native crash.
// --------------------------------------------------------------------------
(function installGlobalErrorHandlers() {
  const g: any = global as any;
  if (g.__rnErrorHandlersInstalled) return;
  g.__rnErrorHandlersInstalled = true;

  const log = (source: string, err: any, isFatal?: boolean) => {
    const msg = err?.message || (typeof err === "string" ? err : "unknown");
    const stack = err?.stack ? `\n${err.stack}` : "";
    // eslint-disable-next-line no-console
    console.warn(
      `[RN-ERROR] ${source} | fatal=${isFatal ? "1" : "0"} | ${msg}${stack}`
    );
  };

  // 1. Synchronous uncaught errors on the RN JS thread.
  const EU: any = g.ErrorUtils;
  if (EU && typeof EU.setGlobalHandler === "function") {
    const prev = EU.getGlobalHandler?.();
    EU.setGlobalHandler((err: any, isFatal?: boolean) => {
      log("rn", err, isFatal);
      // In dev, re-throw so the red-box appears. In production we swallow
      // everything so unhandled JS errors don't turn into native crashes.
      if (__DEV__ && prev) prev(err, isFatal);
    });
  }

  // 2. Unhandled promise rejections (Hermes path).
  const HI: any = g.HermesInternal;
  if (HI && typeof HI.enablePromiseRejectionTracker === "function") {
    HI.enablePromiseRejectionTracker({
      allRejections: true,
      onUnhandled: (id: number, rejection: any) =>
        log("promise", rejection || new Error(`Unhandled rejection #${id}`)),
    });
  }

  // eslint-disable-next-line no-console
  console.warn(
    `[RN-ERROR] handlers installed | platform=${Platform.OS} | dev=${__DEV__ ? "1" : "0"}`
  );
})();

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}
