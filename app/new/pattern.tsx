import Button from '@/components/Button';
import Input from '@/components/Input';
import { apiUrl } from '@/constants';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function NewPattern() {
  const { bottom } = useSafeAreaInsets();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      author: '',
      description: '',
    },
  });

  const addPattern = async (data) => {
    try {
      const res = await fetch(`${apiUrl}/users/${'knitwithcode'}/patterns/`, {
        method: 'POST', // 'GET'
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        // POST일때만 바디
        body: JSON.stringify({
          name: '반미정',
          author: '강줌모',
        }),
      })
        .then((res) => {
          return res.json().catch(() => null);
        })
        .catch((err) => {
          console.error('api error message : ', err);
        });

      console.log(res, '얍');
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data: { title: string; author: string; description: string }) => addPattern(data);

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
              required: true,
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
                required: true,
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
            <Button title="Cancel" type={'primary'} style={{ flex: 1 }} onPress={handleSubmit(onSubmit)} />
            <Button title="Save" type={'cancel'} style={{ flex: 1 }} disabled />
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
