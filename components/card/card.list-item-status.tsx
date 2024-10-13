import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import icons from '@/constants/icons';

const ListCardWithStatus = ({
  thumbnail,
  status,
  title,
  description,
  dateFrom,
  dateTo,
  onPress,
}: TListCardWithStatusProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={thumbnail} style={styles.image} />
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.status}>{status}</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Image source={icons.calendarIcon} style={styles.calendarIcon} />
          <Text style={styles.date}>{`${dateFrom ?? 'Unknown'} - ${dateTo ?? 'Unknown'}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListCardWithStatus;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    width: '100%',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  status: {
    color: '#7257FF',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 12,
  },
  textContainer: {
    gap: 4,
  },
  title: {
    color: '#131214',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.2,
  },
  description: {
    color: '#6E7375',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  calendarIcon: {
    width: 16,
    height: 16,
  },
  date: {
    color: '#6E7375',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 12,
  },
});
