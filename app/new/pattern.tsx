import { createUserPatternV1Api } from '@/apis/user-patterns';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function NewPattern() {
  const router = useRouter();
  const { bottom } = useSafeAreaInsets();
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      title: '',
      author: '',
      description: '',
    },
  });

  const [isSaveEnabled, setIsSaveEnabled] = useState(false); // Add state for Save button

  const titleValue = watch('title');

  useEffect(() => {
    setIsSaveEnabled(titleValue.length > 0);
  }, [titleValue]);

  const handleCreateNewUserPattern = async (data: { title: string; author: string; description: string }) => {
    try {
      const result = await createUserPatternV1Api({
        // TODO(irene/juno): this is temporary username - handle dynamically once authentication is done
        username: 'knitwithcode', // Assuming 'knitwithcode' is the username to use for the API call
        body: {
          name: data.title,
          author: data.author,
          description: data.description,
        },
      });
      if (result.error) {
        console.error('Failed to create pattern:', result.error);
      } else {
        // TODO(irene&juno): route to the pattern detail screen
        console.log('Pattern created successfully:', result.data);
      }
    } catch (error) {
      console.error('Error creating pattern:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 78 })}
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
      }}
    >
      <View style={{ flex: 1, padding: 16, paddingBottom: 16 + bottom }}>
        <View style={styles.input_filed_area}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input title="Pattern Title" placeholder="Enter pattern name" onChangeText={onChange} value={value} />
            )}
            name="title"
          />
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                title="Author/Designer"
                placeholder="Enter pattern’s author"
                onChangeText={onChange}
                value={value}
              />
            )}
            name="author"
          />
          <View style={{ height: 200 }}>
            <Controller
              control={control}
              rules={{
                required: false,
              }}
              name="description"
              render={({ field: { onChange, value } }) => (
                <Input
                  title="Description"
                  placeholder="Add details about the pattern or your note"
                  onChangeText={onChange}
                  value={value}
                  multiline
                  numberOfLines={4}
                  styleView={{ height: 100 }}
                />
              )}
            />
          </View>
        </View>
        <View style={styles.login_button_area}>
          <View style={{ flex: 1, flexDirection: 'row', gap: 16 }}>
            <Button title="Cancel" type={'cancel'} style={{ flex: 1 }} onPress={() => router.back()} />
            <Button
              title="Save"
              type={'primary'}
              style={{ flex: 1 }}
              onPress={handleSubmit(handleCreateNewUserPattern)}
              disabled={!isSaveEnabled}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
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
