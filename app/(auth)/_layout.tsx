import { Stack } from 'expo-router';

export default function NewLayout() {
  return (
    <Stack>
      <Stack.Screen name="login-options" options={{ headerShown: false }} />
      <Stack.Screen name="login" />
    </Stack>
  );
}
