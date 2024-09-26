import { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Onboarding from '@/components/Onboarding/Onboarding';

export default function Dashboard() {
  const [hasOnboarded, setHasOnboarded] = useState(false);

  // const onPressGetStarted = async () => {
  //   AsyncStorage.setItem('__onboarded', 'true');
  //   setHasOnboarded(true);
  // };

  // will remove this later
  // useEffect(() => {
  //   const checkOnboarded = async () => {
  //     try {
  //       const onboarded = await AsyncStorage.getItem('__onboarded');
  //       setHasOnboarded(!!onboarded);
  //       // if (onboarded) {
  //       //   AsyncStorage.removeItem('__onboarded');
  //       //   setHasOnboarded(false);
  //       // }
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };
  //   checkOnboarded();
  // }, []);

  if (!hasOnboarded) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Onboarding />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>k3tog</Text>
        <Text style={{ fontFamily: 'ExtraBold_800' }}>k3tog</Text>
      </View>
    </SafeAreaView>
  );
}
