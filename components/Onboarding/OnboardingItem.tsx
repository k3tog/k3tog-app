import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

const OnboardingItem = ({
  id,
  title,
  description,
  image,
}: {
  id: string;
  title: string;
  description: string;
  image: any;
}) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image source={image} style={[styles.image, { width, resizeMode: 'contain' }]} />
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};
export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'stretch',
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '700',
    color: '#131214',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    alignSelf: 'stretch',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#131214',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
});
