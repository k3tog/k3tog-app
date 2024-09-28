import { FontAwesome } from '@expo/vector-icons';
import { Tabs, usePathname } from 'expo-router';
const withOutTabsPaths = ['/new/stackTest'];

export default function TabLayout() {
  const pathName = usePathname();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#7257ff',
        headerShown: false,
        tabBarStyle: {
          display: withOutTabsPaths.includes(pathName) ? 'none' : 'flex',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="collection"
        options={{
          title: 'Collection',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />

      <Tabs.Screen
        name="new"
        options={{
          title: 'New',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="eraser" color={color} />,
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="facebook" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="flash" color={color} />,
        }}
      />
    </Tabs>
  );
}
