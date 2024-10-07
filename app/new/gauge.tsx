import Button from '@/components/Button';
import Input from '@/components/Input';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Select from '@/components/Select';
import Label from '@/components/Input/Label';

type FormData = {
  yarn: string;
  description: string;
  size: string;
  gauge: {
    stitches: string;
    rows: string;
  };
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

export default function NewGauge() {
  const { bottom } = useSafeAreaInsets();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      yarn: '',
      description: '',
      size: '',
      gauge: {
        stitches: '',
        rows: '',
      },
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
            <View style={{ flex: 1, zIndex: 101 }}>
              <Controller
                control={control}
                name="yarn"
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
                    placeholder="Select Yarn"
                    title="Select Yarn"
                  />
                )}
              />
            </View>

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              name="description"
              render={({ field: { onChange, value } }) => (
                <Input
                  title="..or Enter them manually"
                  placeholder="Write a yarn description"
                  onChangeText={onChange}
                  value={value}
                />
              )}
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
                    title="Select Needle Size"
                  />
                )}
              />
            </View>

            <View style={{ zIndex: 99 }}>
              <Label title="Gauge (10cm x 10cm)" />
              <View style={{ flexDirection: 'row', gap: 16 }}>
                <View style={{ flex: 1 }}>
                  <Controller
                    control={control}
                    name="gauge.stitches"
                    render={({ field: { onChange, value } }) => (
                      <Input placeholder="stitches" onChangeText={onChange} value={value} />
                    )}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Controller
                    control={control}
                    name="gauge.rows"
                    render={({ field: { onChange, value } }) => (
                      <Input placeholder="rows" onChangeText={onChange} value={value} />
                    )}
                  />
                </View>
              </View>
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
