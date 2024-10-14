import { StyleSheet, Text } from 'react-native';

const TypographyLabelLarge = ({ text, color }: TTypographyProps) => {
  return <Text style={[styles.large, { color }]}>{text}</Text>;
};

const TypographyLabelMedium = ({ text, color }: TTypographyProps) => {
  return <Text style={[styles.medium, { color }]}>{text}</Text>;
};

const TypographyLabelSmall = ({ text, color }: TTypographyProps) => {
  return <Text style={[styles.small, { color }]}>{text}</Text>;
};

const TypographyLabelXSmall = ({ text, color }: TTypographyProps) => {
  return <Text style={[styles.xsmall, { color }]}>{text}</Text>;
};

export { TypographyLabelLarge, TypographyLabelMedium, TypographyLabelSmall, TypographyLabelXSmall };

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
    lineHeight: 18,
  },
  medium: {
    ...base.base,
    fontSize: 16,
    lineHeight: 16,
  },
  small: {
    ...base.base,
    fontSize: 14,
    lineHeight: 14,
  },
  xsmall: {
    ...base.base,
    fontSize: 12,
    lineHeight: 12,
  },
});
