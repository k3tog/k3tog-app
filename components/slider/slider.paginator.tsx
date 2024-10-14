import { View, StyleSheet } from 'react-native';
import React from 'react';

const SliderPaginator = ({ items, paginationIndex, scrollX }: TSliderPaginatorProps) => {
  return (
    <View style={styles.container}>
      {items.map((_, index) => (
        <View
          key={index}
          style={[styles.dot, { backgroundColor: index === paginationIndex ? '#7257FF' : '#E6E9EB' }]}
        />
      ))}
    </View>
  );
};

export default SliderPaginator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 8,
    backgroundColor: '#E6E9EB',
    marginHorizontal: 2,
  },
});
