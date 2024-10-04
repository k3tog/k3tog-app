import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NewYarn() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>NewYarn</Text>
        <Text style={{ fontFamily: 'ExtraBold_800' }}>NewYarn</Text>
      </View>
    </SafeAreaView>
  );
}
