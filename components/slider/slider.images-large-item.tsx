import { Image, StyleSheet, Dimensions } from 'react-native';
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated';

const { width } = Dimensions.get('screen');

const LargeImageSliderItem = ({ item, index, scrollX }: TImageSliderItemProps) => {
  const rnAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.1, 0, width * 0.1],
            Extrapolation.CLAMP,
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [1, 1, 1],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });
  return (
    <Animated.View style={[styles.container, rnAnimated]}>
      <Image source={item.image} style={styles.image} />
    </Animated.View>
  );
};

export default LargeImageSliderItem;

const styles = StyleSheet.create({
  image: {
    width: 361,
    height: 361,
    borderRadius: 16,
  },
  container: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
