import { Stack } from 'expo-router';

const CollectionStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="projects" options={{ headerShown: false }} />
      <Stack.Screen
        name="patterns"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="yarns"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="needles"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default CollectionStackLayout;
