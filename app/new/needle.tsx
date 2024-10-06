import Button from '@/components/Button';
import Input from '@/components/Input';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Select from '@/components/Select';

type FormData = {
  needleName: string;
  size: string;
  notes: string;
  // photos:[]
};

const styles = StyleSheet.create({
  login_button_area: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  dropdown: {
    zIndex: 1000, // zIndex 조정
  },
});

export default function NewNeedle() {
  const { bottom } = useSafeAreaInsets();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      needleName: '',
      size: '',
      notes: '',
      // photos:[]
    },
  });
  const onSubmit = (data: FormData) => console.log(data);

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
        <ScrollView>
          <View style={{ gap: 16 }}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  title="Needle Name/Brand"
                  placeholder="Enter needle's brand name"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="needleName"
            />

            <View style={{ flex: 1, zIndex: 100 }}>
              <Controller
                control={control}
                name="size"
                render={({ field: { onChange, value } }) => (
                  <Select
                    onChange={onChange}
                    value={value}
                    items={[
                      { label: '2.0 mm', value: '2.0' },
                      { label: '2.5 mm', value: '2.5' },
                      { label: '3.0 mm', value: '3.0' },
                      { label: '3.5 mm', value: '3.5' },
                      { label: '4.0 mm', value: '4.0' },
                    ]}
                    placeholder="Size"
                    title="Size"
                  />
                )}
              />
            </View>
            <View style={{ height: 200 }}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                name="notes"
                render={({ field: { onChange, value } }) => (
                  <Input
                    title="Notes"
                    placeholder="Write any additional details here"
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
        </ScrollView>
        <View style={styles.login_button_area}>
          <View style={{ flex: 1, flexDirection: 'row', gap: 16 }}>
            <Button title="Cancel" type={'cancel'} style={{ flex: 1 }} onPress={handleSubmit(onSubmit)} />
            <Button title="Save" type={'primary'} style={{ flex: 1 }} disabled />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
