import { router } from 'expo-router';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TypographyLabelLarge } from '../typography/typography.label';

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
        <TypographyLabelLarge text={title} style={{ fontWeight: 700, textAlign: 'center' }} />
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
});
