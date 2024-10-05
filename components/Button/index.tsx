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
  type = 'primary',
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
    type?: 'primary' | 'secondary' | 'cancel';
  }
>) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={[stylesBase.Button, getStylesByKey(`${type}_bg`), disabled && getStylesByKey('disabled'), style]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text
          style={[
            stylesBase.Title,
            getStylesByKey(`${type}_title`),
            disabled && getStylesByKey('title_disabled'),
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
  primary_bg: {
    backgroundColor: '#7257ff',
  },
  primary_title: {
    color: '#fff',
  },

  secondary_bg: {
    backgroundColor: '#fff',
  },
  secondary_title: {
    color: '#7257ff',
  },
  title_disabled: {
    color: '#898D8F',
  },
  disabled: {
    backgroundColor: '#DADDDE',
  },
  cancel_bg: {
    backgroundColor: '#F0EDFF',
  },
  cancel_title: {
    color: '#5336E2',
  },
});

const getStylesByKey = (key: string) => (stylesBase?.[key as keyof typeof stylesBase] ?? {}) as StyleProp<ViewStyle>;
