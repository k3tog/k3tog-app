import {
  PlusJakartaSans_200ExtraLight,
  PlusJakartaSans_300Light,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
} from '@expo-google-fonts/plus-jakarta-sans';

export const PlusJakartaSansFonts = {
  'PlusJakartaSans-ExtraLight': PlusJakartaSans_200ExtraLight,
  'PlusJakartaSans-Light': PlusJakartaSans_300Light,
  'PlusJakartaSans-Regular': PlusJakartaSans_400Regular,
  'PlusJakartaSans-Medium': PlusJakartaSans_500Medium,
  'PlusJakartaSans-SemiBold': PlusJakartaSans_600SemiBold,
  'PlusJakartaSans-Bold': PlusJakartaSans_700Bold,
  'PlusJakartaSans-ExtraBold': PlusJakartaSans_800ExtraBold,
  plusjakartasans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
};

export const PlusJakartaSansFontGlobalProps = {
  style: {
    fontFamily: 'plusjakartasans',
  },
};
