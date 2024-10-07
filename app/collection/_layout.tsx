import capitalizeFirstLetter from '@/utills/capitalize-first-letter';
import { Stack, useRouter } from 'expo-router';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  headerWrapper: {
    height: 64,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    color: '#131214',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    paddingRight: 32,
  },
  backImage: {
    width: 32,
    height: 32,
  },
});

const CustomHeader = ({ title }: { title?: string }) => {
  const router = useRouter();
  const { top } = useSafeAreaInsets();
  const backImage = require('../../assets/images/layout/header_back.png');
  return (
    <View style={[styles.header, { paddingTop: top }]}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={backImage} style={styles.backImage} />
        </TouchableOpacity>
        <Text style={styles.title}>{`${capitalizeFirstLetter(title ?? '')}`}</Text>
      </View>
    </View>
  );
};

const CollectionStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        header: ({ route }) => <CustomHeader />,
      }}
    >
      <Stack.Screen name="projects" />
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
