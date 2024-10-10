import Button from '@/components/Button';
import Input from '@/components/Input';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Select from '@/components/Select';
import Label from '@/components/Input/Label';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { createUserGaugeV1Api } from '@/apis/user-gauges';

const needleSizeOptions = [
  { label: 'US 0 (2.0 mm)', value: 2.0 },
  { label: 'US 1 (2.25 mm)', value: 2.25 },
  { label: 'US 2 (2.75 mm)', value: 2.75 },
  { label: 'US 3 (3.25 mm)', value: 3.25 },
  { label: 'US 4 (3.5 mm)', value: 3.5 },
  { label: 'US 5 (3.75 mm)', value: 3.75 },
  { label: 'US 6 (4.0 mm)', value: 4.0 },
  { label: 'US 7 (4.5 mm)', value: 4.5 },
  { label: 'US 8 (5.0 mm)', value: 5.0 },
  { label: 'US 9 (5.5 mm)', value: 5.5 },
  { label: 'US 10 (6.0 mm)', value: 6.0 },
];

export default function NewGauge() {
  const router = useRouter();
  const { bottom } = useSafeAreaInsets();
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      yarn_id: null,
      yarn_description: '',
      needle_size: '',
      stitches: 0,
      rows: 0,
      note: '',
      photo_id: '',
    },
  });

  const [isSaveEnabled, setIsSaveEnabled] = useState(false);

  const yarn_id = watch('yarn_id');
  const yarn_description = watch('yarn_description');

  useEffect(() => {
    setIsSaveEnabled(yarn_id || yarn_description.length > 0);
  }, [yarn_id, yarn_description]);

  const handleCreateNewUserGauge = async (data: {
    yarn_id: number | null;
    yarn_description: string;
    needle_size: string;
    stitches: number;
    rows: number;
    note: string;
  }) => {
    try {
      const result = await createUserGaugeV1Api({
        username: 'knitwithcode',
        body: {
          yarn_id: data.yarn_id || undefined,
          yarn_description: data.yarn_description,
          needle_size: data.needle_size,
          stitches: data.stitches,
          rows: data.rows,
          note: data.note,
        },
      });
      if (result.error) {
        console.error('Failed to create gauge:', result.error);
      } else {
        console.log('Gauge created successfully:', result.data);
        router.back();
      }
    } catch (error) {
      console.error('Error creating gauge:', error);
    }
  };

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
                rules={{
                  required: false,
                }}
                name="yarn_id"
                render={({ field: { onChange, value } }) => (
                  <Select
                    onChange={onChange}
                    value={value}
                    items={[
                      { label: 'Yarn 1', value: 1 },
                      { label: 'Yarn 2', value: 2 },
                      { label: 'Yarn 3', value: 3 },
                      { label: 'Yarn 4', value: 4 },
                      { label: 'Yarn 5', value: 5 },
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
                required: false,
              }}
              name="yarn_description"
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
                rules={{
                  required: false,
                }}
                name="needle_size"
                render={({ field: { onChange, value } }) => (
                  <Select
                    onChange={onChange}
                    value={value}
                    items={needleSizeOptions}
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
                    rules={{
                      required: false,
                    }}
                    name="stitches"
                    render={({ field: { onChange, value } }) => (
                      <Input placeholder="stitches" onChangeText={onChange} value={value.toString()} />
                    )}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Controller
                    control={control}
                    rules={{
                      required: false,
                    }}
                    name="rows"
                    render={({ field: { onChange, value } }) => (
                      <Input placeholder="rows" onChangeText={onChange} value={value.toString()} />
                    )}
                  />
                </View>
              </View>
            </View>

            <View style={{ height: 200 }}>
              <Controller
                control={control}
                rules={{
                  required: false,
                }}
                name="note"
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
            <Button title="Cancel" type={'cancel'} style={{ flex: 1 }} onPress={() => router.back()} />
            <Button
              title="Save"
              type={'primary'}
              style={{ flex: 1 }}
              onPress={handleSubmit(handleCreateNewUserGauge)}
              disabled={!isSaveEnabled}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

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
