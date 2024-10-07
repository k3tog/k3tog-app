import icons from '@/constants/icons';
import { Tabs, usePathname } from 'expo-router';
import { ImageSourcePropType, View, Image } from 'react-native';
const withOutTabsPaths = ['/new/stackTest'];

type TabIconProps = {
  icon: ImageSourcePropType;
  color: string;
  focused: boolean;
};

const TabIcon = ({ icon, color, focused }: TabIconProps) => {
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
          paddingTop: 8,
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.dashboardIcon} color={color} focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="collection"
        options={{
          title: 'Collection',
          tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.collectionIcon} color={color} focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="new"
        options={{
          title: 'New',
          tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.newIcon} color={color} focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.exploreIcon} color={color} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'My Profile',
          tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.profileIcon} color={color} focused={focused} />,
        }}
      />
    </Tabs>
  );
}
