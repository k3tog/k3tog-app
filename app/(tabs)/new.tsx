import NewCard from '@/components/New/NewCard';
import { Href } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';

const categories = [
  {
    id: 1,
    title: 'New Knitting Project',
    content: 'Record your project by writing a kitting journal',
    source: images.newProject,
    path: '/new/project' as Href<string>,
  },
  {
    id: 2,
    title: 'New Pattern',
    content: 'Manage your patterns',
    source: images.newPattern,
    path: '/new/pattern' as Href<string>,
  },
  {
    id: 3,
    title: 'New Yarn',
    content: 'Manage your yarn collection',
    source: images.newYarn,
    path: '/new/yarn' as Href<string>,
  },
  {
    id: 4,
    title: 'New Needle',
    content: 'Keep your needle inventory up to date',
    source: images.newNeedle,
    path: '/new/needle' as Href<string>,
  },
  {
    id: 5,
    title: 'New Gauge',
    content: 'Save gauge details for perfect projects',
    source: images.newGauge,
    path: '/new/gauge' as Href<string>,
  },
];

const styles = StyleSheet.create({
  titleText: {
    color: '#131214',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38.4,
  },
  subtitleText: {
    color: '#6E7375',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
  scrollView: {
    marginHorizontal: 16,
    overflow: 'hidden',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 16,
  },
  subtitleContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  centeredText: {
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    resizeMode: 'cover',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

export default function New() {
  const thumbnailImage = images.newThumbnail;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar />
      <View style={styles.container}>
        <Text style={styles.titleText}>Add to Collection</Text>
      </View>
      <Image source={thumbnailImage} style={styles.imageContainer} />
      <View style={styles.container}>
        <Text style={[styles.titleText, styles.centeredText]}>Capture Your Knitting Journey</Text>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitleText}>
          Create and track your knitting projects with details on yarns, needles, and more.
        </Text>
      </View>
      <ScrollView style={styles.scrollView} horizontal>
        {categories.map(
          ({
            title,
            content,
            source,
            id,
            path,
          }: {
            id: number;
            title: string;
            content: string;
            source: ImageSourcePropType;
            path: Href<string>;
          }) => (
            <NewCard key={id} title={title} content={content} source={source} path={path} />
          ),
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
