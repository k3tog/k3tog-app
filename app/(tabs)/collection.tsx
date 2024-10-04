import images from '@/constants/images';
import { Href, Link } from 'expo-router';
import { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  ImageSourcePropType,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const categories = [
  {
    id: 1,
    category: 'projects',
    title: 'Projects',
    content: '10 Projects',
    image: images.collectionProjects,
  },
  {
    id: 2,
    category: 'patterns',
    title: 'Patterns',
    content: '10 Patterns',
    image: images.collectionPatterns,
  },
  {
    id: 3,
    category: 'yarns',
    title: 'Yarns',
    content: '10 Yarns',
    image: images.collectionYarns,
  },
  {
    id: 4,
    category: 'needles',
    title: 'Needles',
    content: '10 Needles',
    image: images.collectionNeedles,
  },
];

type CategoryProps = { category: string; title: string; image: string };

const Category = ({ category, title, image }: CategoryProps) => (
  <View style={styles.category_container}>
    <Link href={`/collection/${category}` as Href<string>} asChild>
      <TouchableOpacity style={styles.category_touchable}>
        <Image source={{ uri: image }} style={styles.category_image} />
        <Text style={styles.category_title}>{title}</Text>
      </TouchableOpacity>
    </Link>
  </View>
);

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
      <ScrollView>
        <View>
          {categories.map((item, index) => (
            <Category
              // key={keyExtractor(item, index)}
              category={item.category}
              title={item.title}
              image={
                item.image ||
                'https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg'
              }
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
  category_container: {
    width: '48%',
    marginBottom: 16,
  },
  category_touchable: {
    borderWidth: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  category_image: {
    borderRadius: 8,
    width: '100%',
    aspectRatio: 1, // This maintains the aspect ratio
    resizeMode: 'cover',
  },
  category_title: {
    marginTop: 8,
  },
});
