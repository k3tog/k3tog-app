import { StyleSheet, Text } from 'react-native';

const TypographyDisplay1 = ({ text, color }: TTypographyProps) => {
  return <Text style={[styles.large, { color }]}>{text}</Text>;
};

const TypographyDisplay2 = ({ text, color }: TTypographyProps) => {
  return <Text style={[styles.medium, { color }]}>{text}</Text>;
};

export { TypographyDisplay1, TypographyDisplay2 };

const base = StyleSheet.create({
  base: {
    color: '#131214',
    fontFamily: 'Plus Jakarta Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: 0,
  },
});

const styles = StyleSheet.create({
  large: {
    ...base.base,
    fontSize: 64,
    lineHeight: 76.8,
  },
  medium: {
    ...base.base,
    fontSize: 40,
    lineHeight: 48,
  },
});
