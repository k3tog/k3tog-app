import TopbarCenterAligned from '@/components/topbar/topbar.center-aligned';
import { SafeAreaView, StyleSheet, View } from 'react-native';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopbarCenterAligned title="" />
      <View style={styles.profileContainer}>

      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  profileContainer: {
    display: 'flex',
    paddingHorizontal: 16,
    paddingTop: 0,
    paddingBottom: 16,
    gap: 24,
    alignItems: 'flex-start',
  },
});
