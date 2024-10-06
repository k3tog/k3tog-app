import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export interface FilterChipProps {
  title: string;
  isSelected?: boolean;
}

const FilterChip: React.FC<FilterChipProps> = ({ title, isSelected }) => (
  <TouchableOpacity style={[styles.chip, isSelected ? styles.selectedChip : styles.defaultChip]}>
    <Text style={[styles.chipText, isSelected ? styles.selectedText : styles.defaultText]}>{title}</Text>
  </TouchableOpacity>
);

export default FilterChip;

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderRadius: 32,
    marginRight: 8, // 오른쪽 여백 추가
  },
  selectedChip: {
    backgroundColor: '#7257FF',
  },
  defaultChip: {
    backgroundColor: '#F0EDFF',
  },
  chipText: {
    fontSize: 16,
    fontWeight: '700',
  },
  selectedText: {
    color: '#FFFFFF',
  },
  defaultText: {
    color: '#7257FF',
  },
});
