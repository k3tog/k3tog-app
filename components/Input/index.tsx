import { forwardRef, MutableRefObject, ReactNode, useCallback, useRef, useState } from 'react';
import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import { useHover } from 'react-native-web-hooks';

type InputProps = {
  styleView?: StyleProp<ViewStyle>;
  styleInput?: StyleProp<TextStyle>;
  disabled?: boolean;
  error?: boolean;
  skeleton?: boolean;
  value?: string;
  title?: string;
} & TextInputProps;

// TODO: hovered - implement hover effect for web
// TODO: focused - implement focus effect boxShadow
// TODO: leftIcon, rightIcon - implement with Icon

const Input = forwardRef<TextInput, InputProps>(
  ({ styleView, styleInput, error, disabled, skeleton, value, title, ...props }: InputProps, ref) => {
    Input.displayName = 'Input';

    const [focused, setFocused] = useState(false);
    const defaultInputRef = useRef(null);
    const inputRef = (ref as MutableRefObject<TextInput>) || defaultInputRef;
    const viewRef = useRef<View>(null);
    const hovered = useHover(viewRef);
    const editable = props?.editable || (!disabled && !skeleton);

    const renderContainer = useCallback(
      (children: ReactNode) => {
        const styleStatus = skeleton
          ? styles.skeleton
          : disabled
            ? styles.disabled
            : error
              ? { ...styles.error, ...styles.errorBg }
              : hovered
                ? styles.hover
                : focused
                  ? styles.focus
                  : value && value.length > 0
                    ? styles.filled
                    : styles.base;
        return (
          <TouchableWithoutFeedback
            onPress={() => {
              if (!error && editable) inputRef.current?.focus();
            }}
          >
            <View style={[styles.container, styleStatus]}>{children}</View>
          </TouchableWithoutFeedback>
        );
      },
      [inputRef, skeleton, disabled, error, focused, hovered, value, editable],
    );

    const renderInput = useCallback(() => {
      return (
        <View style={[styles.inputWrapper]}>
          <TextInput
            {...props}
            onBlur={(e) => {
              setFocused(false);
              props?.onBlur?.(e);
            }}
            onFocus={(e) => {
              setFocused(true);
              props?.onFocus?.(e);
            }}
            ref={inputRef}
            style={[styles.input, styleInput, props.style]}
            value={value}
            placeholder={!skeleton && props?.placeholder ? props?.placeholder : ''}
            editable={editable}
            placeholderTextColor="#898D8F"
          />
        </View>
      );
    }, [inputRef, styleInput, value, props, skeleton, editable]);

    return (
      <View style={{ gap: 16 }}>
        {title && <Text style={styles.label}>{title}</Text>}
        <View
          ref={viewRef}
          style={[
            styles.wrapper,
            focused && !skeleton && !disabled && { ...styles.focus, ...styles.focusShadow },
            styleView,
            error && styles.error,
          ]}
        >
          {renderContainer(renderInput())}
        </View>
      </View>
    );
  },
);
export default Input;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    minHeight: 48,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 9,
  },
  label: {
    color: '#131214',
    fontWeight: '700',
    fontSize: 16,
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'transparent',
    color: '#898d8f',
  },
  inputWrapper: {
    flex: 1,
  },
  input: {
    flex: 1,
    height: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Regular',
    textAlign: 'left',
  },
  base: {
    color: '#898D8F',
    borderColor: '#e6e9eb',
  },
  filled: {
    color: '#131214',
    borderColor: '#e6e9eb',
  },
  hover: {
    borderColor: '#DADDDE',
  },
  disabled: {
    color: '#898D8F',
    borderColor: '#C1C4C6',
    backgroundColor: '#DADDDE',
  },
  focus: {
    borderWidth: 1,
    borderColor: '#7257FF',
  },
  error: {
    borderWidth: 1,
    borderColor: '#FF9175',
  },
  skeleton: {
    backgroundColor: '#E6E9EB',
  },
  errorBg: {
    backgroundColor: '#FFF3F0',
  },
  focusShadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(114, 87, 255, 0.3)',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
      },
      android: {
        shadowColor: 'rgba(114, 87, 255, 0.3)',
        elevation: 4,
      },
    }),
  },
});
