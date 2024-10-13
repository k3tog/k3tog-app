import { Stack } from 'expo-router';

const ExploreStackLayout = () => {
  return (
    <Stack screenOptions={{ headerShadowVisible: false, headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default ExploreStackLayout;
