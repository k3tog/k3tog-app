import { PlusJakartaSansFontGlobalProps, PlusJakartaSansFonts } from '@/constants/fonts';
import * as ExpoFont from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { setCustomText } from 'react-native-global-props';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [LoadedApp, setLoadedApp] = useState(false);

  useEffect(() => {
    async function init() {
      try {
        await ExpoFont.loadAsync({ ...PlusJakartaSansFonts });
        await new Promise((resolve) => setTimeout(resolve, 5000));
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadedApp(true);
      }
    }
    if (LoadedApp) SplashScreen.hideAsync();
    init();
  }, [LoadedApp]);

  if (!LoadedApp) return null;
  setCustomText(PlusJakartaSansFontGlobalProps);
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
