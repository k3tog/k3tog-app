import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import FilterChip from './FilterChip';

interface FilterChipsProps {
  categories: string[];
}

const FilterChips: React.FC<FilterChipsProps> = ({ categories }) => {
  return (
    <View>
      <ScrollView style={styles.scrollView} horizontal>
        <View style={styles.chipContainer}>
          {categories?.map((title, idx) => <FilterChip key={title} title={title} isSelected={idx === 1} />)}
        </View>
      </ScrollView>
    </View>
  );
};

export default FilterChips;

const styles = StyleSheet.create({
  scrollView: {
    height: 64,
  },
  chipContainer: {
    flexDirection: 'row',
    paddingVertical: 16,
  },
});
