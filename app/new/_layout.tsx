import capitalizeFirstLetter from '@/utills/capitalize-first-letter';
import { Stack, useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomHeader = ({ title }: { title: string }) => {
  const router = useRouter();
  const { top } = useSafeAreaInsets();
  const backImage = require('../../assets/images/layout/header_back.png');
  return (
    <View style={[styles.header, { paddingTop: top }]}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={backImage} style={styles.backImage} />
        </TouchableOpacity>
        <Text style={styles.title}>{`New ${capitalizeFirstLetter(title)}`}</Text>
      </View>
    </View>
  );
};

export default function NewLayout() {
  return (
    <Stack
      screenOptions={{
        header: ({ route }) => <CustomHeader title={route.name} />,
      }}
    >
      <Stack.Screen name="gauge" />
      <Stack.Screen name="needle" />
      <Stack.Screen name="pattern" />
      <Stack.Screen name="project" />
      <Stack.Screen name="yarn" />
    </Stack>
  );
}

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
