import React from 'react';
import { Animated, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

const OnboardingSlidesItemTexts = ({ data = [], scrollX }: { data: T_OnboardingSlidesItem[]; scrollX: any }) => {
  const { width } = useWindowDimensions();
  console.log('data', data?.length, scrollX);
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        console.log('index', i);
        const { title, description } = data?.[i] || {};
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const tWidth = scrollX.interpolate({
          inputRange,
          outputRange: [width, width, width],
          extrapolate: 'clamp',
        });
        console.log('tWidth', tWidth);
        return (
          <Animated.View key={i.toString()} style={[styles.TextsBox, { width }]}>
            <Text style={styles.title}>{data?.[i]?.title}</Text>
            <Text style={styles.description}>{data?.[i]?.description}</Text>
          </Animated.View>
        );
      })}
    </View>
  );
};
export default OnboardingSlidesItemTexts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  TextsBox: {
    // flex: 1,
    // width: '100%',
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
