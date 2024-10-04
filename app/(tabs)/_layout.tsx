import icons from '@/constants/icons';
import { Tabs, usePathname } from 'expo-router';
import { ImageSourcePropType, View, Image } from 'react-native';
const withOutTabsPaths = ['/new/stackTest'];

type TabIconProps = {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
};

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View>
      {focused ? (
        <View>
          <Image source={icon} resizeMode="contain" tintColor={color} />
        </View>
      ) : (
        <Image source={icon} resizeMode="contain" tintColor={color} />
      )}
    </View>
  );
};

export default function TabLayout() {
  const pathName = usePathname();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#7257ff',
        headerShown: false,
        // TODO(irene): need to figure out how to tint the label as well
        tabBarLabelStyle: { fontSize: 12, color: '#898D8F' },
        tabBarStyle: {
          display: withOutTabsPaths.includes(pathName) ? 'none' : 'flex',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.dashboardIcon} color={color} name="Dashboard" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="collection"
        options={{
          title: 'Collection',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.collectionIcon} color={color} name="Collection" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="new"
        options={{
          title: 'New',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.newIcon} color={color} name="New" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.exploreIcon} color={color} name="Explore" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.profileIcon} color={color} name="Profile" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
