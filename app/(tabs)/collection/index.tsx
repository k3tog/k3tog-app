import TopbarLarge from '@/components/topbar/topbar.large';
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

type CategoryProps = { category: string; title: string; subtitle: string; image: ImageSourcePropType };

const Category = ({ category, title, subtitle, image }: CategoryProps) => (
  <View style={styles.category_container}>
    <Link href={`/collection/${category}` as Href<string>} asChild>
      <TouchableOpacity>
        <Image source={image} style={styles.category_image} />
        <Text style={styles.category_title}>{title}</Text>
        <Text style={styles.category_subtitle}>{subtitle}</Text>
      </TouchableOpacity>
    </Link>
  </View>
);

export default function Collection() {
  const [index, setIndex] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <TopbarLarge title="Collection" />
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
      {/* TODO(irene): remove gap */}
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.category_wrapper}>
          {categories.map((item, index) => (
            <Category
              key={`${index}-${item.category}`}
              category={item.category}
              title={item.title}
              subtitle={item.content}
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
  category_wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  category_container: {
    display: 'flex',
    flexDirection: 'column',
    width: '48%', // Adjusted for 2 columns
    alignItems: 'center',
    marginBottom: 16, // Added margin for spacing
  },
  category_image: {
    borderRadius: 16,
    width: 172,
    height: 217,
    resizeMode: 'cover',
    marginBottom: 12,
  },
  category_title: {
    fontSize: 18,
    fontWeight: 800,
  },
  category_subtitle: {
    fontSize: 14,
    color: '#6E7375',
    lineHeight: 21,
  },
});
