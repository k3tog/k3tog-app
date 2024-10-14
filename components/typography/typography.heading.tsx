import { StyleSheet, Text } from 'react-native';

const TypographyHeading1 = ({ text, color }: TTypographyProps) => {
  return <Text style={[styles.heading1, { color }]}>{text}</Text>;
};

const TypographyHeading2 = ({ text, color }: TTypographyProps) => {
  return <Text style={[styles.heading2, { color }]}>{text}</Text>;
};

const TypographyHeading3 = ({ text, color }: TTypographyProps) => {
  return <Text style={[styles.heading3, { color }]}>{text}</Text>;
};

const TypographyHeading4 = ({ text, color }: TTypographyProps) => {
  return <Text style={[styles.heading4, { color }]}>{text}</Text>;
};

const TypographyHeading5 = ({ text, color }: TTypographyProps) => {
  return <Text style={[styles.heading5, { color }]}>{text}</Text>;
};

const TypographyHeading6 = ({ text, color }: TTypographyProps) => {
  return <Text style={[styles.heading6, { color }]}>{text}</Text>;
};

export {
  TypographyHeading1,
  TypographyHeading2,
  TypographyHeading3,
  TypographyHeading4,
  TypographyHeading5,
  TypographyHeading6,
};

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
  heading1: {
    ...base.base,
    fontSize: 32,
    lineHeight: 38.4,
  },
  heading2: {
    ...base.base,
    fontSize: 24,
    lineHeight: 28.8,
  },
  heading3: {
    ...base.base,
    fontSize: 18,
    lineHeight: 21.6,
  },
  heading4: {
    ...base.base,
    fontSize: 16,
    lineHeight: 19.2,
  },
  heading5: {
    ...base.base,
    fontSize: 14,
    lineHeight: 16.8,
  },
  heading6: {
    ...base.base,
    fontSize: 12,
    lineHeight: 14.4,
  },
});
