import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; //
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { StyleSheet } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const queryClient = new QueryClient();

  const [fontsLoaded, error] = useFonts({
    'PlusJakartaSans-Regular': require('@/assets/fonts/PlusJakartaSans-Regular.ttf'),
    'PlusJakartaSans-Medium': require('@/assets/fonts/PlusJakartaSans-Medium.ttf'),
    'PlusJakartaSans-Bold': require('@/assets/fonts/PlusJakartaSans-Bold.ttf'),
    'PlusJakartaSans-ExtraBold': require('@/assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
    'PlusJakartaSans-Light': require('@/assets/fonts/PlusJakartaSans-Light.ttf'),
    'PlusJakartaSans-SemiBold': require('@/assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    'PlusJakartaSans-ExtraLight': require('@/assets/fonts/PlusJakartaSans-ExtraLight.ttf'),
    'PlusJakartaSans-ExtraBoldItalic': require('@/assets/fonts/PlusJakartaSans-ExtraBoldItalic.ttf'),
    'PlusJakartaSans-Italic': require('@/assets/fonts/PlusJakartaSans-Italic.ttf'),
    'PlusJakartaSans-LightItalic': require('@/assets/fonts/PlusJakartaSans-LightItalic.ttf'),
    'PlusJakartaSans-ExtraLightItalic': require('@/assets/fonts/PlusJakartaSans-ExtraLightItalic.ttf'),
    'PlusJakartaSans-SemiBoldItalic': require('@/assets/fonts/PlusJakartaSans-SemiBoldItalic.ttf'),
    'PlusJakartaSans-BoldItalic': require('@/assets/fonts/PlusJakartaSans-BoldItalic.ttf'),
    'PlusJakartaSans-MediumItalic': require('@/assets/fonts/PlusJakartaSans-MediumItalic.ttf'),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={styles.container}>
        <BottomSheetModalProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="index" />
          </Stack>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
