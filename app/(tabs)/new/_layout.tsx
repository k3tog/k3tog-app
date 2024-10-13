import { Stack } from 'expo-router';

const NewStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="gauge"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="needle"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="pattern"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="project"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="yarn"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default NewStackLayout;
