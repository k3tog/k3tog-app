import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Explore() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Explore</Text>
        <Text style={{ fontFamily: 'ExtraBold_800' }}>k3tog</Text>
      </View>
    </SafeAreaView>
  );
}
