import { PlusJakartaSansFontGlobalProps, PlusJakartaSansFonts } from '@/constants/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ExpoFont from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { setCustomText } from 'react-native-global-props';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [hasOnboarded, setHasOnboarded] = useState(false);
  const [LoadedApp, setLoadedApp] = useState(false);

  useEffect(() => {
    const checkOnboarded = async () => {
      try {
        const onboarded = await AsyncStorage.getItem('onboarded');
        if (onboarded === null) {
          AsyncStorage.setItem('onboarded', 'true');
          setHasOnboarded(true);
        } else {
          setHasOnboarded(false);
        }
      } catch (e) {
        console.error(e);
      }
    };
    // checkOnboarded();
  }, []);

  useEffect(() => {
    async function init() {
      try {
        await ExpoFont.loadAsync({ ...PlusJakartaSansFonts });
        await new Promise((resolve) => setTimeout(resolve, 2000));
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
