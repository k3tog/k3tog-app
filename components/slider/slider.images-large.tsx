import { View, ViewToken, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated';
import SliderPaginator from './slider.paginator';
import { useRef, useState } from 'react';
import LargeImageSliderItem from './slider.images-large-item';

const LargeImageSlider = ({ images }: { images: TImageSliderProps[] }) => {
  const scrollX = useSharedValue(0);
  const [paginationIndex, setPaginationIndex] = useState(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0 && viewableItems[0].index !== undefined && viewableItems[0].index !== null) {
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
        renderItem={({ item, index }) => <LargeImageSliderItem item={item} index={index} scrollX={scrollX} />}
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

export default LargeImageSlider;

const styles = StyleSheet.create({
  list: {
    paddingVertical: 8,
  },
});
