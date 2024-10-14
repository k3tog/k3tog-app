import icons from '@/constants/icons';
import React from 'react';
import { ImageSourcePropType, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface RadioButtonProps {
  value: string;
  icon?: ImageSourcePropType;
  label: string;
  description?: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const RadioButton = ({ value, icon, label, description, checked, onChange }: RadioButtonProps) => {
  return (
    <View style={styles.radioButtonWrapper}>
      <View style={styles.radioButtonLabelWrapper}>
        <Image style={styles.icon} source={icon} />
        <View style={styles.lableWrapper}>
          <Text style={styles.labelText}>{label}</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => onChange(value)}>
        <Image source={checked ? icons.radioButtonSelectedIcon : icons.radioButtonDefaultIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  radioButtonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: 64,
    alignItems: 'center',
    gap: 16,
    justifyContent: 'space-between',
  },
  radioButtonLabelWrapper: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  lableWrapper: {
    display: 'flex',
    flex: 1,
    gap: 10,
    alignItems: 'flex-start',
  },
  labelText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16,
    color: '#131214',
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 14,
    color: '#6E7375',
  },
});
