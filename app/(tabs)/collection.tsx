import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Collection() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>collection</Text>
        <Text style={{ fontFamily: 'ExtraBold_800' }}>k3tog</Text>
      </View>
    </SafeAreaView>
  );
}
