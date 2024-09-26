import React from 'react';
import { Animated, StyleSheet, useWindowDimensions, View } from 'react-native';

const OnboardingSlidesPaginator = ({ data = [], scrollX }: { data: T_OnboardingSlidesItem[]; scrollX: any }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 8, 8],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.2, 1, 0.2],
          extrapolate: 'clamp',
        });
        return <Animated.View key={i.toString()} style={[styles.dot, { width: dotWidth, opacity }]} />;
      })}
    </View>
  );
};
export default OnboardingSlidesPaginator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#7257ff',
    marginHorizontal: 8,
  },
});
