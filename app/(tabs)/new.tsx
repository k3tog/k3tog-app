import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function New() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>New</Text>
        <Text style={{ fontFamily: 'ExtraBold_800' }}>k3tog</Text>
        <Text onPress={() => router.push('/new/newProject')}>new Project</Text>
      </View>
    </SafeAreaView>
  );
}
