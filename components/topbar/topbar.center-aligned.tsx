import { router } from 'expo-router';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const TopbarCenterAligned = ({ leftIcon, title, rightIcon, rightButton }: TTopbarCenterAlignedProps) => {
  // TODO: Implement right icon functionality
  // TODO: Implement right button functionality
  return (
    <View style={styles.container}>
      {leftIcon && (
        <TouchableOpacity style={styles.leftIconContainer} onPress={() => router.back()}>
          <Image source={leftIcon} style={styles.leftIcon} />
        </TouchableOpacity>
      )}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default TopbarCenterAligned;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 16,
    width: '100%',
  },
  leftIconContainer: {
    zIndex: 101,
  },
  leftIcon: {
    width: 32,
    height: 32,
    flexShrink: 0,
  },
  titleContainer: {
    display: 'flex',
    flex: 1,
    marginLeft: '-10%',
  },
  title: {
    alignSelf: 'stretch',
    color: '#131214',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 18,
    textAlign: 'center',
  },
});
