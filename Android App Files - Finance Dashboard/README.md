# Finance Dashboard — Android / iOS App

Native shell that wraps the published Finance Dashboard web app
(https://stevenmkay.github.io/Finance-Dashboard/dashboard.html) in a
React Native WebView. Mirrors the pattern used by `Android App Files - Resume Portfolio`
and `Android App Files - Shortcut App`.

The native shell ships **without** in-app purchases or ads — the Finance
Dashboard has no paywall yet. If you add a paywall later, copy the IAP
scaffolding from `Android App Files - Resume Portfolio/app/index.tsx`
(react-native-iap + Play Console product setup).

## Stack

- Expo SDK 54, React Native 0.81.5
- expo-router 6 (file-based routing, single `app/index.tsx` screen)
- react-native-webview 13.15.0
- TypeScript 5.9.3

## Files

| Path                | Purpose                                                     |
|---------------------|-------------------------------------------------------------|
| app.json            | Expo config — bundle ID, splash, icons, plugins             |
| package.json        | Dependency manifest                                         |
| eas.json            | EAS Build/Submit profiles (dev / preview / production)      |
| babel.config.js     | babel-preset-expo + reanimated plugin                       |
| tsconfig.json       | Extends expo/tsconfig.base, strict mode on                  |
| app/_layout.tsx     | Global RN error handlers + ErrorBoundary + Stack            |
| app/+html.tsx       | Web mode HTML shell (only used when running `expo start --web`) |
| app/index.tsx       | Single screen: WebView pointed at the hosted dashboard      |
| assets/images/*.png | Icons + splash (see assets/images/README.md)                |
| .env.example        | Optional EXPO_PUBLIC_APP_URL override                       |
| .gitignore          | node_modules, .expo, builds, env files                      |
| .easignore          | Excludes from EAS Build uploads                             |

## What the WebView shell adds on top of the website

1. **Hardware back button** navigates WebView history before exiting the app.
2. **Error bridge** — JS errors thrown inside the dashboard are forwarded
   to the native layer and tagged `[WEBVIEW-ERROR]` in adb logcat / Play
   Console pre-launch reports.
3. **Download bridge** — `<a download>` clicks for `blob:` and `data:`
   URLs are intercepted, base64-encoded, written to cache, and routed
   through the native share sheet (`expo-sharing`). Needed because
   `react-native-webview` on Android can't download blob URLs natively.
4. **External-host routing** — `accounts.google.com`,
   `checkout.stripe.com`, `billing.stripe.com` open in the system
   browser (Google blocks OAuth inside WebViews).
5. **Render crash recovery** — if the WebView's renderer process is
   killed by the OS, the screen reloads automatically.
6. **ErrorBoundary** — any React render error shows the actual stack
   trace on screen instead of a white screen of death.

## Getting started

```powershell
cd "Android App Files - Finance Dashboard"
npm install
npx expo start
```

Press `a` for Android emulator, `w` for web, or scan the QR code with
Expo Go on a physical device.

## Building for Google Play

```powershell
# Install once globally
npm install -g eas-cli

# Authenticate
eas login

# Link to your EAS project (creates the projectId)
eas init

# Build a production app bundle
eas build --profile production --platform android
```

After the first `eas init`, replace `REPLACE_WITH_EAS_PROJECT_ID` in
`app.json` with the real project ID it generates.

## Pre-launch checklist

- [ ] Drop the four PNGs into `assets/images/` (see that folder's README).
- [ ] Set `extra.eas.projectId` in `app.json` to the value from `eas init`.
- [ ] Bump `expo.version` and `expo.android.versionCode` in `app.json`
      for each release.
- [ ] Test the WebView on a real Android device — confirm: dashboard
      loads, hardware back navigates history, Strategy Lab CSV export
      opens the share sheet, Firebase email/password sign-in works.
- [ ] Add the Play Console service account JSON at
      `./google-play-service-account.json` for `eas submit`.

## Updating the hosted page

Because the app is a thin WebView, any change you push to the GitHub
Pages site at `stevenmkay.github.io/Finance-Dashboard/` is visible to
users on next app open — no Play Store re-submission required for
content changes. Only ship a new Play Store build when the native shell
(this folder) changes, when you bump permissions, or when you add native
modules.

## Adding native Google Sign-In (later)

Currently Google sign-in routes through `accounts.google.com` in the
system browser (Google blocks WebView OAuth). The auth state from that
external flow does NOT carry back into the WebView, so Android users
should use email/password sign-in for now. To wire up true native Google
Sign-In, copy the pattern from
`Android App Files - Resume Portfolio/app/index.tsx`
(`@react-native-google-signin/google-signin` + `window.__nativeGoogleSignIn`
bridge).
