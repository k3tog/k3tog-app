type TChipFilledProps = {
  label: string;
  isActive?: boolean;
  leftIcon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
  state?: 'Enabled' | 'Hover' | 'Focused' | 'Pressed' | 'Error' | 'Disabled';
  onPress?: () => void;
};
