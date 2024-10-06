import React from 'react';
import ProjectList from '@/components/Collection/ProjectList';
import FilterChips from '@/components/FilterChips';
import { Text, View, StyleSheet } from 'react-native';

const categories = ['All', 'Not Started', 'WIP', 'Finished'];

const Projects = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>Projects</Text>
      <FilterChips categories={categories} />
      <ProjectList />
    </View>
  );
};

export default Projects;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  largeText: {
    color: '#131214',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38.4,
  },
});
