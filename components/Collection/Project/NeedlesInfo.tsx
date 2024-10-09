import React from 'react';
import { Text, StyleSheet } from 'react-native';

const NeedlesInfo = () => (
  <>
    <Text style={styles.title}>Needles</Text>
    <Text style={styles.subtitle}>Knit picks bamboo</Text>
    <Text style={styles.size}>US 8</Text>
    <Text style={styles.note}>Note....</Text>
    <Text style={styles.date}>2 weeks ago</Text>
    <Text style={styles.subtitle}>Knit picks bamboo</Text>
    <Text style={styles.size}>US 8</Text>
    <Text style={styles.date}>1 hr ago</Text>
  </>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: '#6E7375',
    fontWeight: '700',
  },
  subtitle: {
    lineHeight: 19.2,
    fontSize: 16,
    color: '#131214',
    fontWeight: '700',
  },
  size: {
    fontSize: 12,
    color: '#7257FF',
  },
  note: {
    color: '#131214',
  },
  date: {
    fontSize: 12,
    color: '#6E7375',
  },
});

export default NeedlesInfo;
