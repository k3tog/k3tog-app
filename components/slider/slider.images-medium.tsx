import { View, ViewToken, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated';
import SliderPaginator from './slider.paginator';
import { useRef, useState } from 'react';
import MediumImageSliderItem from './slider.images-medium-item';

const MediumImageSlider = ({ images }: { images: TImageSliderProps[] }) => {
  const scrollX = useSharedValue(0);
  const [paginationIndex, setPaginationIndex] = useState(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems[0].index !== undefined && viewableItems[0].index !== null) {
      setPaginationIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }]);

  return (
    <View>
      <Animated.FlatList
        style={styles.list}
        data={images}
        renderItem={({ item, index }) => <MediumImageSliderItem item={item} index={index} scrollX={scrollX} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScrollHandler}
        pagingEnabled
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <SliderPaginator items={images} paginationIndex={paginationIndex} scrollX={scrollX} />
    </View>
  );
};

export default MediumImageSlider;

const styles = StyleSheet.create({
  list: {
    paddingVertical: 8,
  },
});
