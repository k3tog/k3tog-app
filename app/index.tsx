import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>k3tog</Text>
      <Text style={{ fontFamily: 'ExtraBold_800' }}>k3tog</Text>
    </SafeAreaView>
  );
}
