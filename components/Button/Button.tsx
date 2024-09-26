import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
  ViewStyle,
} from 'react-native';

// TODO: need to change this

const Button = ({
  children,
  title,
  titleStyle,
  disabled,
  activeOpacity,
  loading,
  style,
  primary,
  secondary,
  ...props
}: React.PropsWithChildren<
  TouchableWithoutFeedbackProps & {
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
    disabled?: boolean;
    activeOpacity?: number;
    loading?: boolean;
    // TODO: will remove this
    primary?: boolean;
    secondary?: boolean;
  }
>) => {
  const type = primary ? 'Primary1' : secondary ? 'Secondary1' : 'Primary1';
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={[stylesBase.Button, getStylesByKey(`${type}_bg`), disabled && getStylesByKey(`${type}_disabled`), style]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text
          style={[
            stylesBase.Title,
            getStylesByKey(`${type}_title`),
            disabled && getStylesByKey(`${type}_title_disabled`),
            titleStyle,
          ]}
        >
          {children || title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
export default Button;

const stylesBase = StyleSheet.create({
  Button: {
    borderRadius: 9999,
    height: 48,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    textAlign: 'center',
    fontFamily: 'PlusJakartaSans-Bold',
    fontWeight: '700',
    lineHeight: 16,
    fontSize: 16,
    color: '#fff',
  },
  Primary1_bg: {
    backgroundColor: '#7257ff',
  },
  Primary1_disabled: {
    backgroundColor: '#DADDDE',
  },
  Primary1_title: {
    color: '#fff',
  },
  Primary1_title_disabled: {
    color: '#898D8F',
  },
  Secondary1_bg: {
    backgroundColor: '#fff',
  },
  Secondary1_disabled: {
    backgroundColor: '#DADDDE',
  },
  Secondary1_title: {
    color: '#7257ff',
  },
  Secondary1_title_disabled: {
    color: '#898D8F',
  },
});

const getStylesByKey = (key: string) => (stylesBase?.[key as keyof typeof stylesBase] ?? {}) as StyleProp<ViewStyle>;
