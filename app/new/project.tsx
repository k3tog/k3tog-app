import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NewProject() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>NewYarn</Text>
      </View>
    </SafeAreaView>
  );
}
