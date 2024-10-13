import TopbarLarge from '@/components/topbar/topbar.large';
import { SafeAreaView, StyleSheet } from 'react-native';

const Explore = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopbarLarge title="Explore" />
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
