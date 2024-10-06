import Button from '@/components/Button';
import Input from '@/components/Input';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Select from '@/components/Select';
import Label from '@/components/Input/Label';

type FormData = {
  yarnName: string;
  brandName: string;
  color: string;
  needleRange: {
    from: string;
    to: string;
  };
  hookRange: {
    from: string;
    to: string;
  };
  weight: string;
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

export default function NewYarn() {
  const { bottom } = useSafeAreaInsets();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      yarnName: '',
      brandName: '',
      color: '',
      needleRange: {
        from: '',
        to: '',
      },
      hookRange: {
        from: '',
        to: '',
      },
      weight: '',
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
                <Input title="Yarn Name" placeholder="Enter yarn name" onChangeText={onChange} value={value} />
              )}
              name="yarnName"
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <Input title="Brand Name" placeholder="Enter brand name" onChangeText={onChange} value={value} />
              )}
              name="brandName"
            />

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <Input title="Color" placeholder="Enter color name" onChangeText={onChange} value={value} />
              )}
              name="color"
            />

            <View style={{ zIndex: 100 }}>
              <Label title="Needle range" />
              <View style={{ flexDirection: 'row', gap: 16 }}>
                <View style={{ flex: 1 }}>
                  <Controller
                    control={control}
                    name="needleRange.from"
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
                        placeholder="From"
                      />
                    )}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Controller
                    control={control}
                    name="needleRange.to"
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
                        placeholder="To"
                      />
                    )}
                  />
                </View>
              </View>
            </View>

            <View style={{ zIndex: 99 }}>
              <Label title="Hook Range" />
              <View style={{ flexDirection: 'row', gap: 16 }}>
                <View style={{ flex: 1 }}>
                  <Controller
                    control={control}
                    name="hookRange.from"
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
                        placeholder="From"
                      />
                    )}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Controller
                    control={control}
                    name="needleRange.to"
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
                        placeholder="To"
                      />
                    )}
                  />
                </View>
              </View>
            </View>

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  title="Weight"
                  placeholder="Enter weight(grams) per yarn"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="weight"
            />

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
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Button title="Cancel" type={'cancel'} style={{ flex: 1 }} onPress={handleSubmit(onSubmit)} />
            <Button title="Save" type={'primary'} style={{ flex: 1 }} disabled />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
