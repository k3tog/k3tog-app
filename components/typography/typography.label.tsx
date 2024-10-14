import { StyleSheet, Text } from 'react-native';

const TypographyLabelLarge = ({ text, color, style }: TTypographyProps) => {
  return <Text style={[styles.large, { color }, style]}>{text}</Text>;
};

const TypographyLabelMedium = ({ text, color, style }: TTypographyProps) => {
  return <Text style={[styles.medium, { color }, style]}>{text}</Text>;
};

const TypographyLabelSmall = ({ text, color, style }: TTypographyProps) => {
  return <Text style={[styles.small, { color }, style]}>{text}</Text>;
};

const TypographyLabelXSmall = ({ text, color, style }: TTypographyProps) => {
  return <Text style={[styles.xsmall, { color }, style]}>{text}</Text>;
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
  },
  medium: {
    ...base.base,
    fontSize: 16,
  },
  small: {
    ...base.base,
    fontSize: 14,
  },
  xsmall: {
    ...base.base,
    fontSize: 12,
  },
});
