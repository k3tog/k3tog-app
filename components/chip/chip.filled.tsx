import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const ChipFilled = ({ label, isActive, leftIcon, rightIcon, state, onPress }: TChipFilledProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      {leftIcon && <Image style={styles.leftIcon} source={leftIcon} />}
      <Text style={styles.label}>{label}</Text>
      {rightIcon && <Image style={styles.rightIcon} source={rightIcon} />}
    </TouchableOpacity>
  );
};

export default ChipFilled;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 32,
    height: 32,
    backgroundColor: '#F0EDFF',
    justifyContent: 'center',
    gap: 8,
    alignSelf: 'flex-start',
  },
  label: {
    fontFamily: 'Plus Jakarta Sans',
    color: '#5336E2',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16,
    letterSpacing: 0,
  },
  leftIcon: {
    width: 16,
    height: 16,
  },
  rightIcon: {
    width: 16,
    height: 16,
  },
});
