import { router } from 'expo-router';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const TopbarLarge = ({ leftIcon, title, caption, rightIcon, rightButton }: TTopbarLargeProps) => {
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
        {caption && <Text style={styles.caption}>{caption}</Text>}
      </View>
    </View>
  );
};

export default TopbarLarge;

const styles = StyleSheet.create({
  container: {},
  leftIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 12,
    zIndex: 101,
  },
  leftIcon: {
    width: 32,
    height: 32,
    flexShrink: 0,
  },
  titleContainer: {
    display: 'flex',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    alignSelf: 'stretch',
    color: '#131214',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38.4,
  },
  caption: {
    color: '#6E7375',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
});
