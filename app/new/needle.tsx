import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NewNeedle() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>newNeedle</Text>
        <Text style={{ fontFamily: 'ExtraBold_800' }}>newNeedle</Text>
      </View>
    </SafeAreaView>
  );
}
