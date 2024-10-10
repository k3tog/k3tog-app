import React from 'react';
import RadioButton from './RadioButton';
import { ImageSourcePropType, View } from 'react-native';

interface Option {
  value: string;
  icon?: ImageSourcePropType;
  label: string;
  description?: string;
}

interface RadioButtonListProps {
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioButtonList = ({ options, selectedValue, onChange }: RadioButtonListProps) => {
  return (
    <View>
      {options.map((option: Option) => (
        <RadioButton
          key={option.value}
          value={option.value}
          icon={option.icon}
          label={option.label}
          description={option.description}
          checked={selectedValue === option.value}
          onChange={onChange}
        />
      ))}
    </View>
  );
};

export default RadioButtonList;
