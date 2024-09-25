import { SafeAreaView } from 'react-native-safe-area-context';

import Onboarding from '@/components/Onboarding/Onboarding';

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Onboarding />
    </SafeAreaView>
  );
}
