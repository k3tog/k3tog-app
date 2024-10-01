import { useState } from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet, Pressable, ImageSourcePropType } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const data = [
  {
    id: 1,
    title: 'Projects',
    content: '10 Projects',
    source: require(`../../assets/images/collection/projects.png`),
  },
  {
    id: 2,
    title: 'Patterns',
    content: '10 Patterns',
    source: require(`../../assets/images/collection/patterns.png`),
  },
  {
    id: 3,
    title: 'Yarns',
    content: '10 Yarns',
    source: require(`../../assets/images/collection/yarns.png`),
  },
  {
    id: 4,
    title: 'Needles',
    content: '10 Needles',
    source: require(`../../assets/images/collection/needles.png`),
  },
];

const styles = StyleSheet.create({
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    width: '100%',
    height: 217,
    borderRadius: 16,
  },
  large_text: {
    color: '#131214',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38.4,
  },
  small_text: {
    fontSize: 14,
    color: '#6E7375',
    lineHeight: 21,
  },
  tabs_area: {
    display: 'flex',
    flexDirection: 'row',
    height: 48,
  },
  tab_switch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  tab_switch_text: {
    fontWeight: '700',
    fontSize: 16,
  },
  card_contens_area: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
    gap: 24,
  },
  card_row: { flex: 1, flexDirection: 'row', gap: 16 },
  card_title: { fontSize: 18, fontWeight: '700', color: '#131214', lineHeight: 21.6 },
  card_wrapper: { flex: 1, gap: 12 },
});

export default function Collection() {
  const [index, setIndex] = useState(0);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ padding: 16 }}>
        <Text style={styles.large_text}>Collection</Text>
      </View>
      <View style={styles.tabs_area}>
        <Pressable
          onPress={() => setIndex(0)}
          style={[
            styles.tab_switch,
            {
              borderBottomColor: index === 0 ? '#7257FF' : '#E6E9EB',
            },
          ]}
        >
          <Text
            style={[
              styles.tab_switch_text,
              {
                color: index === 0 ? '#7257FF' : '#898D8F',
              },
            ]}
          >
            My Stash
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setIndex(1)}
          style={[
            styles.tab_switch,
            {
              borderBottomColor: index === 1 ? '#7257FF' : '#E6E9EB',
            },
          ]}
        >
          <Text
            style={[
              styles.tab_switch_text,
              {
                color: index === 1 ? '#7257FF' : '#898D8F',
              },
            ]}
          >
            Saved
          </Text>
        </Pressable>
      </View>
      <View style={styles.card_contens_area}>
        <View style={styles.card_row}>
          <Card {...data[0]} />
          <Card {...data[1]} />
        </View>
        <View style={styles.card_row}>
          <Card {...data[2]} />
          <Card {...data[3]} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const Card = ({ title, content, source }: { title: string; content: string; source: ImageSourcePropType }) => {
  return (
    <TouchableOpacity style={styles.card_wrapper}>
      <Image source={source} style={[styles.image]} />
      <View>
        <Text style={styles.card_title}>{title}</Text>
        <Text style={styles.small_text}>{content}</Text>
      </View>
    </TouchableOpacity>
  );
};
