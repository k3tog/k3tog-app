import { FlashList } from '@shopify/flash-list';
import { useRef, useState } from 'react';
import { Animated, Image, StyleSheet, View, useWindowDimensions } from 'react-native';
import SlidesPaginator from '@/components/Collection/Project/SlidesPaginator';

const ImageUrl =
  'https://s3-alpha-sig.figma.com/img/9965/9e58/1f4c747c2db0fa01eff33a8e4a6d7e7a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZctQvXXTW5JeHUHY5HpZraV-Ah7TmdRPMQS518AYWHFQqGjPSvcPO920KAXnRyIxzheQtFlGPD9CUK~jVw0DLlkd0diA2faUORBSerb6HvfGTW90jUWar10fbozLFg6-ndSUwPpjkIPX1RU6-gXnBAxznHLDIotWknfIAwLGT0A-J8~pkbZKOCu6XSivXNOEU9IAFHEWvIu61VTSGh3JY4sqfPJbMXhTvytSkpEaz8vofzuQmFDHXtCXAAwo3fChrk9AuaajSdN3Dxw2bl6BZLnNyrKKn7W~Y82YI1SD1Nq26lO~w9CNtN~3suxN3y8-W70pcOso5VK9q22DLaq-fQ__';

const ProjectSwiper = () => {
  const [, setCurrent] = useState(slidesData[0]);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    const { item: _current } = viewableItems?.[0] || {};
    _current && setCurrent(_current);
  }).current;

  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <>
      <View style={styles.imageBox}>
        <FlashList
          ref={flatListRef}
          data={slidesData}
          renderItem={({ item }) => <ImageCard image={item?.image} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
          scrollEventThrottle={32}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          estimatedItemSize={426}
        />
      </View>
      <View style={styles.paginatorBox}>
        <SlidesPaginator data={slidesData} scrollX={scrollX} />
      </View>
    </>
  );
};

export default ProjectSwiper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
  },
  imageBox: {
    padding: 10,
    backgroundColor: '#fff',
  },
  paginatorBox: {
    height: 50,
    paddingTop: 26,
    paddingBottom: 16,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

const slidesData = [
  {
    id: '1',
    image: { uri: ImageUrl },
  },
  {
    id: '2',
    image: { uri: ImageUrl },
  },
  {
    id: '3',
    image: { uri: ImageUrl },
  },
  {
    id: '4',
    image: { uri: ImageUrl },
  },
];

const ImageCard = ({ image }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ paddingHorizontal: 8 }}>
      <Image source={image} style={[{ width: width - 36, height: width - 36, borderRadius: 16 }]} />
    </View>
  );
};
