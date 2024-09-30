import Button from '@/components/Button/Button';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  forgot_password: {
    color: '#7257FF',
    fontSize: 16,
    fontWeight: '700',
  },
  input_filed_area: {
    gap: 16,
  },
  login_button_area: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default function LoginOptions() {
  const { bottom } = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 78 })}
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <View style={{ flex: 1, padding: 16, paddingVertical: 16 + bottom }}>
        <View style={styles.input_filed_area}>
          <TextInput style={{ borderColor: 'grey', borderWidth: 1 }} placeholder="Email">
            Email
          </TextInput>
          <TextInput placeholder="Password" style={{ borderColor: 'grey', borderWidth: 1 }}>
            PassWord
          </TextInput>
          <Text style={styles.forgot_password}>Forgot Password? </Text>
        </View>
        <View style={styles.login_button_area}>
          <Button title="Login" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
