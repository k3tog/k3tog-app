import { FlashList } from '@shopify/flash-list';
import { useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import OnboardingSlidesItem from './SlidesItem';
import OnboardingSlidesPaginator from './SlidesPaginator';

const Onboarding = () => {
  const [current, setCurrent] = useState<T_OnboardingSlidesItem>(slidesData[0]);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    const { item: _current } = viewableItems?.[0] || {};
    _current && setCurrent(_current);
  }).current;
  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <View style={styles.Container}>
      <View style={styles.ContentContainer}>
        <View style={styles.ImageBox}>
          <FlashList
            ref={flatListRef}
            data={slidesData}
            renderItem={({ item }) => <OnboardingSlidesItem image={item?.image} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
            scrollEventThrottle={32}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
            estimatedItemSize={426}
          />
        </View>
        <View style={styles.PaginatorBox}>
          <OnboardingSlidesPaginator data={slidesData} scrollX={scrollX} />
        </View>
        <View style={styles.TextsBox}>
          <Text style={styles.title}>{current?.title}</Text>
          <Text style={styles.description}>{current?.description}</Text>
        </View>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity style={stylesButtonType1.Wrap} onPress={() => {}}>
          <Text style={stylesButtonType1.text}>Get started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesButtonType2.Wrap} onPress={() => {}}>
          <Text style={stylesButtonType2.text}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Onboarding;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  ContentContainer: {
    flex: 1,
  },
  ButtonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 16,
    gap: 8,
  },
  ImageBox: {
    flexGrow: 1,
    flexDirection: 'row',
    maxHeight: '66.5%',
    height: 426,
  },
  PaginatorBox: {
    height: 50,
    paddingTop: 26,
    paddingBottom: 16,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  TextsBox: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  title: {
    alignSelf: 'stretch',
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '700',
    color: '#131214',
    textAlign: 'center',
    fontFamily: 'PlusJakartaSans-Bold',
  },
  description: {
    alignSelf: 'stretch',
    fontSize: 16,
    lineHeight: 24,
    color: '#131214',
    textAlign: 'center',
    fontFamily: 'PlusJakartaSans-Regular',
  },
});

const stylesButtonType1 = StyleSheet.create({
  Wrap: {
    borderRadius: 9999,
    height: 48,
    alignSelf: 'stretch',
    backgroundColor: '#7257ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'PlusJakartaSans-Bold',
    fontWeight: '700',
    lineHeight: 16,
    fontSize: 16,
    color: '#fff',
  },
});

const stylesButtonType2 = StyleSheet.create({
  Wrap: {
    borderRadius: 9999,
    height: 48,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'PlusJakartaSans-Bold',
    fontWeight: '700',
    lineHeight: 16,
    fontSize: 16,
    color: '#5336e2',
  },
});

const slidesData: T_OnboardingSlidesItem[] = [
  {
    id: '1',
    title: `Start Your Knitting Journey with K3tog`,
    description: `Organize, track, and complete your knitting projects--all in one place. Let’s make your knitting experience more enjoyable!`,
    image: require('../../assets/images/onboarding/onboarding_1.png'),
  },
  {
    id: '2',
    title: `Capture Every Detail`,
    description: `Easily keep a log of all your knitting projects. From your first stitch to the final cast-off, track every detail -- patterns, yarns, needles and gauges.`,
    image: require('../../assets/images/onboarding/onboarding_2.png'),
  },
  {
    id: '3',
    title: `Organize Your Personal Stash`,
    description: `Effortlessly manage your collection of patterns, yarns and needles. Always know what you have at a glance.`,
    image: require('../../assets/images/onboarding/onboarding_3.png'),
  },
  {
    id: '4',
    title: `Find Inspiration`,
    description: `Explore beautiful patterns, get inspired by the work of others, and find the perfect match for your next project.`,
    image: require('../../assets/images/onboarding/onboarding_4.png'),
  },
];
