import Button from '@/components/Button';
import Input from '@/components/Input';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
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
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
});

export default function NewPattern() {
  const { bottom } = useSafeAreaInsets();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

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
      <View style={{ flex: 1, padding: 16, paddingBottom: 16 + bottom }}>
        <View style={styles.input_filed_area}>
          <Input title="Pattern Title" value={title} onChangeText={setTitle} placeholder={'Enter pattern name'} />
          <Input
            title="Author/Designer"
            value={author}
            onChangeText={setAuthor}
            placeholder={'Enter pattern’s author'}
          />
          <Input
            title="Description"
            styleView={{ height: 100 }}
            value={description}
            onChangeText={setDescription}
            multiline={true}
            numberOfLines={4}
            placeholder="Add details about the pattern or your note"
            textAlignVertical="top"
          />
        </View>
        <View style={styles.login_button_area}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Button title="Cancel" type={'primary'} style={{ flex: 1 }} />
            <Button title="Save" type={'cancel'} style={{ flex: 1 }} disabled />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
