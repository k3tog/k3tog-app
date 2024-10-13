import Button from '@/components/button';
import Input from '@/components/Input';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          <Input value={email} onChangeText={setEmail} placeholder={'Email'} />
          <Input value={password} onChangeText={setPassword} placeholder={'Password'} secureTextEntry={true} />
          <Text style={styles.forgot_password}>Forgot Password? </Text>
        </View>
        <View style={styles.login_button_area}>
          <Button title="Login" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
