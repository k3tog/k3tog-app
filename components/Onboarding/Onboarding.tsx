import { FlatList, StyleSheet, Text, View } from 'react-native';
import OnboardingItem from './OnboardingItem';

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Slides}
        renderItem={({ item }) => <OnboardingItem {...item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
      />
      <Text>Onboarding</Text>
    </View>
  );
};
export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Slides = [
  {
    id: '1',
    title: `Start Your Knitting Journey with K3tog`,
    description: `Organize, track, and complete your knitting projects--all in one place. Let’s make your knitting experience more enjoyable!`,
    image: require('../../assets/images/onboarding/onboarding_1.png'),
  },
  {
    id: '2',
    title: `Capture Every Detail`,
    description: `Easily keep a log of all your knitting projects. From your first stitch to the final cast-off, track every detail -- patterns, yarns, needles and gauges.`,
    image: require('../../assets/images/onboarding/onboarding_2.png'),
  },
  {
    id: '3',
    title: `Organize Your Personal Stash`,
    description: `Effortlessly manage your collection of patterns, yarns and needles. Always know what you have at a glance.`,
    image: require('../../assets/images/onboarding/onboarding_3.png'),
  },
  {
    id: '4',
    title: `Find Inspiration`,
    description: `Explore beautiful patterns, get inspired by the work of others, and find the perfect match for your next project.`,
    image: require('../../assets/images/onboarding/onboarding_4.png'),
  },
];
