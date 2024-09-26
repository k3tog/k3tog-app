import { Image, StyleSheet, useWindowDimensions } from 'react-native';

const OnboardingSlidesItem = ({ image }: T_OnboardingSlidesItem['image']) => {
  const { width } = useWindowDimensions();
  if (!image) return null;
  return <Image source={image} style={[styles.image, { width, resizeMode: 'cover' }]} />;
};
export default OnboardingSlidesItem;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    maxWidth: '100%',
    maxHeight: '100%',
  },
});
