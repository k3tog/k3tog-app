import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker'; // DropDownPicker 임포트
import { useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import Label from '../Input/Label';

type itemType = {
  label: string;
  value: string;
};

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: '#ffffff',
    borderColor: '#E6E9EB',
    borderWidth: 1,
    borderRadius: 9,
  },
  dropdownContainer: {
    borderRadius: 9,
    zIndex: 999,
    borderColor: '#E6E9EB',
  },
  placeholder: {
    color: '#898D8F',
  },
  textStyle: { color: '#898D8F' },
  container: {
    height: 48,
  },
  label: {
    color: '#131214',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default function Select({
  onChange,
  value,
  items,
  placeholder,
  title,
  zIndex,
  ...props
}: Pick<ControllerRenderProps, 'onChange' | 'value'> & {
  items: itemType[];
  placeholder?: string;
  zIndex?: number;
  title?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ zIndex: zIndex, gap: 16 }}>
      <Label title={title} />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={onChange}
        placeholder={placeholder}
        containerStyle={styles.container}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
        placeholderStyle={styles.placeholder}
        textStyle={styles.textStyle}
        {...props}
      />
    </View>
  );
}
