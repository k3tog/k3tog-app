import { Image, StyleSheet, Dimensions } from 'react-native';
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated';

const { width } = Dimensions.get('screen');

const MediumImageSliderItem = ({ item, index, scrollX }: TImageSliderItemProps) => {
  const rnAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.25, 0, width * 0.25],
            Extrapolation.CLAMP,
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.9, 1, 0.9],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });
  return (
    <Animated.View style={[styles.container, rnAnimated]}>
      <Image source={{ uri: item.image }} style={styles.image} />
    </Animated.View>
  );
};

export default MediumImageSliderItem;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
    borderRadius: 16,
  },
  container: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
