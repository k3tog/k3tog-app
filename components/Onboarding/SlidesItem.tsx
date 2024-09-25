import { Image, StyleSheet, useWindowDimensions } from 'react-native';

const OnboardingSlidesItem = ({ image, index }: T_OnboardingSlidesItem['image']) => {
  console.log('OnboardingSlidesItem', { image, index });
  const { width } = useWindowDimensions();
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
