import { Stack } from 'expo-router';

const ProfileStackLayout = () => {
  return (
    <Stack screenOptions={{ headerShadowVisible: false, headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default ProfileStackLayout;
