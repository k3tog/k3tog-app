import { View, StyleSheet } from 'react-native';

const Divider = () => <View style={styles.divider} />;

export default Divider;

const styles = StyleSheet.create({
  divider: {
    display: 'flex',
    height: 1,
    backgroundColor: '#E6E9EB',
    // justifyContent: 'center'
  },
});
