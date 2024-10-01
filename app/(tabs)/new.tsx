import NewCard from '@/components/New/NewCard';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, useWindowDimensions, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const data = [
  {
    id: 1,
    title: 'Create Knitting Project',
    content: 'Record your project by writing a kitting journal',
    source: require(`../../assets/images/new/project.png`),
  },
  {
    id: 2,
    title: 'New Pattern',
    content: 'Manage your patterns',
    source: require(`../../assets/images/new/pattern.png`),
  },
  {
    id: 3,
    title: 'New Yarn',
    content: 'Manage your yarn collection',
    source: require(`../../assets/images/new/yarn.png`),
  },
  {
    id: 4,
    title: 'New Needle',
    content: 'Keep your needle inventory up to date',
    source: require(`../../assets/images/new/needle.png`),
  },
  {
    id: 5,
    title: 'New Gauge',
    content: 'Save gauge details for perfect projects',
    source: require(`../../assets/images/new/gauge.png`),
  },
];

const styles = StyleSheet.create({
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  large_text: {
    color: '#131214',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38.4,
  },
  small_text: {
    color: '#6E7375',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
  scrollView: {
    marginHorizontal: 16,
    overflow: 'hidden',
  },
  text: {
    fontSize: 42,
  },
});

export default function New() {
  const { width } = useWindowDimensions();
  const imageUrl = require('../../assets/images/new/new_thumbnail.png');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar style="dark" />
      <View style={{ padding: 16 }}>
        <Text style={styles.large_text}>Add to Collection</Text>
      </View>
      <Image source={imageUrl} style={[styles.image, { width, resizeMode: 'cover' }]} />
      <View style={{ padding: 16 }}>
        <Text
          style={[
            styles.large_text,
            {
              textAlign: 'center',
            },
          ]}
        >
          Capture Your Knitting Journey
        </Text>
      </View>
      <View style={{ height: 16 }} />
      <Text style={styles.small_text}>
        Create and track your knitting projects with details on yarns, needles, and more.
      </Text>
      <View style={{ height: 24 }} />
      <ScrollView style={styles.scrollView} horizontal>
        {data.map(({ title, content, source, id }) => (
          <NewCard key={id} title={title} content={content} source={source} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
