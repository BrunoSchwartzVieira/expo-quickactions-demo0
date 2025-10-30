# Expo Router + TypeScript + Quick Actions (Demo)

This is a minimal Expo project scaffold demonstrating:
- Expo Router (file-based routing)
- Tab navigation with three tabs/screens
- Basic setup for Quick Actions using `expo-quick-actions`
- TypeScript and a small, clean folder structure

## Important notes
- `expo-quick-actions` is a community package (Evan Bacon). To make Quick Actions available you may need to build a dev client or use EAS Build because quick actions require native configuration at build time. See the citations in the chat for references.
- To run locally in Expo Go for development you can still use the navigation and deep-link handling. Quick Actions will work when you build a native binary (EAS) or use a custom dev client that includes the native module.

## How to run
1. Install deps: `npm install` or `yarn`
2. Start: `npm start`
3. For quick actions to be fully functional on device, build with EAS or a custom dev client.

## Project structure
- `app/` — Expo Router pages
  - `(tabs)/_layout.tsx` — Tabs layout
  - `(tabs)/home.tsx`, `profile.tsx`, `settings.tsx` — simple screens
- `hooks/useQuickActions.ts` — hook that registers quick actions and listens to them
- `app/_layout.tsx` — root layout (Stack)

## References
- `expo-quick-actions` (GitHub) by Evan Bacon.  
- Expo blog about quick actions and config plugins.
- Expo Router documentation on deep linking and navigation.
