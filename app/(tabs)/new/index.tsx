import { Href } from 'expo-router';
import { ScrollView, Text, View, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import TopbarLarge from '@/components/topbar/topbar.large';
import NewListCard from '@/components/card/card.list-new';

const CATEGORIES = [
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

const New = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopbarLarge title="Add to Collection" />
      <Image source={images.newThumbnail} style={styles.imageContainer} />
      <View style={styles.contentContainer}>
        <Text style={[styles.titleText, styles.centeredText]}>Capture Your Knitting Journey</Text>
        <Text style={styles.subtitleText}>
          Create and track your knitting projects with details on yarns, needles, and more.
        </Text>
      </View>
      <ScrollView style={styles.scrollView} horizontal showsHorizontalScrollIndicator={false}>
        {CATEGORIES.map(
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
            <NewListCard key={id} title={title} content={content} source={source} path={path} />
          ),
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default New;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
  },
  contentContainer: {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    paddingBottom: 24,
  },
  titleText: {
    color: '#131214',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38.4,
    fontFamily: 'Plus Jakarta Sans',
  },
  subtitleText: {
    color: '#6E7375',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Plus Jakarta Sans',
  },
  scrollView: {
    marginHorizontal: 16,
    overflow: 'hidden',
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
