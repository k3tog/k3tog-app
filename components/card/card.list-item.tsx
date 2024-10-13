import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';

const ListCard = ({ thumbnail, status, title, caption, date, onPress }: TListCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={thumbnail} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.status}>{status}</Text>
        <Text style={styles.title}>{title}</Text>
        {caption && <Text style={styles.caption}>{caption}</Text>}
        <Text style={styles.date}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    width: '100%',
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    gap: 4,
    flex: 1,
    paddingTop: 4,
  },
  status: {
    color: '#7257FF',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 12,
  },
  title: {
    color: '#131214',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16.8,
  },
  caption: {
    color: '#6E7375',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
  },
  date: {
    color: '#6E7375',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 12,
    textAlign: 'right',
    alignSelf: 'flex-end',
  },
});
