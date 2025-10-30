import { useEffect } from 'react';
import * as Linking from 'expo-linking';
import { useRouter } from 'expo-router';
// expo-quick-actions is a community package that sets up native shortcuts at build time.
// We listen for incoming URLs (deep links) and handle them; the config plugin provided
// by expo-quick-actions will wire shortcut items to open URLs such as qa-demo://profile
// when the user launches the app from a quick action.
//
// Note: For full quick-action support you need to build the app natively (EAS or custom dev client).

export default function useQuickActions() {
  const router = useRouter();

  useEffect(() => {
    // handle initial url (app cold-start via deep link / quick action)
    async function handleInitial() {
      const initial = await Linking.getInitialURL();
      if (initial) {
        // The URL will be like: qa-demo://profile
        const parsed = Linking.parse(initial);
        if (parsed.path) {
          router.replace('/' + parsed.path);
        }
      }
    }
    handleInitial();

    // listen to incoming links while app is open
    const sub = Linking.addEventListener('url', ({ url }) => {
      const parsed = Linking.parse(url);
      if (parsed.path) {
        router.push('/' + parsed.path);
      }
    });

    return () => {
      sub.remove();
    };
  }, [router]);
}
