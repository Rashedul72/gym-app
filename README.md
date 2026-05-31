# My Gym Mobile (iWeekly Split)

React Native (Expo) app based on [gym-web](../gym-web/).

## Tabs

- **Home** — intro, stats, hero image
- **Workout** — 6 training days + Day 7 rest, exercise list with images (tap for full view)

## Where to put images

Copy PNG files from the web app into the mobile app:

| Web | Mobile |
|-----|--------|
| `gym-web/public/images/workouts/*.png` | `my-gym-mobile/assets/images/workouts/*.png` |

Use the **exact same filenames** (see `assets/images/workouts/README.md`).

After copying, uncomment the matching `require(...)` lines in `lib/imageRegistry.ts` so the app uses your local illustrations instead of Unsplash fallbacks.

## Brand assets

- `assets/logo-source.png` — master logo
- `assets/icon.png` — app icon (1024×1024)
- `assets/splash-icon.png` — splash screen logo (white background, same icon)

Regenerate after editing the source:

```bash
npm run generate:brand
```

Icon and splash appear on **standalone builds** (APK/IPA). Expo Go still shows the Expo Go icon.

## Run

```bash
cd my-gym-mobile
npm start
```

Uses **Expo SDK 54** for Play Store Expo Go compatibility.
# gym-app
