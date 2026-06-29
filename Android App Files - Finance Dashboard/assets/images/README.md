# Image assets — placeholders required

The Expo build references four PNGs from `./assets/images/`. Drop these
files in before running `eas build` or `npx expo start --android`:

| File              | Size (px) | Notes                                             |
|-------------------|-----------|---------------------------------------------------|
| icon.png          | 1024×1024 | App icon (used as base for all platforms)         |
| adaptive-icon.png | 1024×1024 | Android foreground (logo only, padded ~20%)       |
| splash-icon.png   | 1024×1024 | Splash screen logo (200px display width)          |
| favicon.png       | 48×48     | Web favicon                                       |

Background color is `#1A2744` (set in app.json under
android.adaptiveIcon.backgroundColor and plugins.expo-splash-screen.backgroundColor).

Quickest path: copy the four PNGs from any sibling app
(`Android App Files - Resume Portfolio/assets/images/` or
`Android App Files - Shortcut App/assets/images/`) into this folder while
you're prototyping, then replace with Finance-Dashboard-branded artwork
before publishing.
