import { StyleSheet, Text } from 'react-native';

const TypographyBodyLarge = ({ text, color }: TTypographyProps) => {
  return <Text style={[styles.large, { color }]}>{text}</Text>;
};

const TypographyBodyMedium = ({ text, color }: TTypographyProps) => {
  return <Text style={[styles.medium, { color }]}>{text}</Text>;
};

const TypographyBodySmall = ({ text, color }: TTypographyProps) => {
  return <Text style={[styles.small, { color }]}>{text}</Text>;
};

const TypographyBodyXSmall = ({ text, color }: TTypographyProps) => {
  return <Text style={[styles.xsmall, { color }]}>{text}</Text>;
};

export { TypographyBodyLarge, TypographyBodyMedium, TypographyBodySmall, TypographyBodyXSmall };

const base = StyleSheet.create({
  base: {
    color: '#131214',
    fontFamily: 'Plus Jakarta Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0,
  },
});

const styles = StyleSheet.create({
  large: {
    ...base.base,
    fontSize: 18,
    lineHeight: 27,
  },
  medium: {
    ...base.base,
    fontSize: 16,
    lineHeight: 24,
  },
  small: {
    ...base.base,
    fontSize: 14,
    lineHeight: 21,
  },
  xsmall: {
    ...base.base,
    fontSize: 12,
    lineHeight: 18,
  },
});
