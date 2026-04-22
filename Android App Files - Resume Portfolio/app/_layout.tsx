import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Platform, View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

// --------------------------------------------------------------------------
// Global JS error handlers (installed once, before the first screen mounts).
//
// IMPORTANT: We only OBSERVE errors. We never swallow them — swallowing a
// fatal RN boot error leaves the app in a half-initialized state and the
// user sees a white screen with no recovery. Instead we log with
// "[RN-ERROR]" prefix (visible in adb logcat + Play Console pre-launch
// reports) and immediately hand the error back to RN's default handler so
// it can either re-render the red-box (dev) or escalate a true crash
// (prod) that Play Console can then report.
// --------------------------------------------------------------------------
try {
  const g: any = global as any;
  if (!g.__rnErrorHandlersInstalled) {
    g.__rnErrorHandlersInstalled = true;

    const log = (source: string, err: any, isFatal?: boolean) => {
      try {
        const msg = err?.message || (typeof err === "string" ? err : "unknown");
        const stack = err?.stack ? `\n${err.stack}` : "";
        // eslint-disable-next-line no-console
        console.warn(
          `[RN-ERROR] ${source} | fatal=${isFatal ? "1" : "0"} | ${msg}${stack}`
        );
      } catch (_) {
        /* never let the logger itself throw */
      }
    };

    // 1. Synchronous uncaught errors on the RN JS thread. Always delegate
    //    to the previous handler so RN can still crash/report properly —
    //    we only add observability on top.
    const EU: any = g.ErrorUtils;
    if (EU && typeof EU.setGlobalHandler === "function") {
      const prev = EU.getGlobalHandler?.();
      EU.setGlobalHandler((err: any, isFatal?: boolean) => {
        log("rn", err, isFatal);
        if (prev) {
          try { prev(err, isFatal); } catch (_) { /* ignore */ }
        }
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
  }
} catch (e) {
  // eslint-disable-next-line no-console
  console.warn("[RN-ERROR] handler install failed", e);
}

export default function RootLayout() {
  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
        <StatusBar style="light" />
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}

// --------------------------------------------------------------------------
// ErrorBoundary — catches render-time errors anywhere below it and shows
// the actual error text on screen instead of a blank white view. This is
// the single highest-value debugging aid: if the app fails to mount on a
// user's device we can now *see* why on their screen (they can read it to
// us over a call, screenshot it, etc.).
// --------------------------------------------------------------------------
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: Error | null; info: string | null }
> {
  state = { error: null as Error | null, info: null as string | null };

  static getDerivedStateFromError(error: Error) {
    return { error, info: null };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.warn(
      `[RN-ERROR] render | fatal=1 | ${error?.message}\n${error?.stack}\n${info?.componentStack}`
    );
    this.setState({ info: info?.componentStack || null });
  }

  render() {
    if (this.state.error) {
      const err = this.state.error as Error;
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "#0F172A",
            padding: 20,
            paddingTop: 60,
          }}
        >
          <Text style={{ color: "#F87171", fontSize: 20, fontWeight: "700", marginBottom: 12 }}>
            App failed to load
          </Text>
          <Text style={{ color: "#F1F5F9", fontSize: 14, marginBottom: 8 }}>
            {err?.message || "Unknown error"}
          </Text>
          <ScrollView
            style={{
              flex: 1,
              backgroundColor: "#1E293B",
              padding: 12,
              borderRadius: 8,
              marginBottom: 16,
            }}
          >
            <Text style={{ color: "#94A3B8", fontSize: 11, fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace" }}>
              {err?.stack || "(no stack)"}
              {this.state.info ? `\n\nComponent stack:${this.state.info}` : ""}
            </Text>
          </ScrollView>
          <TouchableOpacity
            onPress={() => this.setState({ error: null, info: null })}
            style={{
              backgroundColor: "#005EB8",
              padding: 14,
              borderRadius: 8,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600" }}>Try again</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return this.props.children as any;
  }
}
