import Button from '@/components/Button';
import Input from '@/components/Input';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Select from '@/components/Select';
import Label from '@/components/Input/Label';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { useState } from 'react';
import { createUserYarnV1Api } from '@/apis/user-yarns';

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

const hookSizeOptions = [
  { label: 'B-1 (2.25 mm)', value: 2.25 },
  { label: 'C-2 (2.75 mm)', value: 2.75 },
  { label: 'D-3 (3.25 mm)', value: 3.25 },
  { label: 'E-4 (3.5 mm)', value: 3.5 },
  { label: 'F-5 (3.75 mm)', value: 3.75 },
  { label: 'G-6 (4.0 mm)', value: 4.0 },
  { label: 'H-8 (5.0 mm)', value: 5.0 },
  { label: 'I-9 (5.5 mm)', value: 5.5 },
  { label: 'J-10 (6.0 mm)', value: 6.0 },
  { label: 'K-10.5 (6.5 mm)', value: 6.5 },
  { label: 'L-11 (8.0 mm)', value: 8.0 },
  { label: 'M-13 (9.0 mm)', value: 9.0 },
  { label: 'N-15 (10.0 mm)', value: 10.0 },
];

export default function NewYarn() {
  const router = useRouter();
  const { bottom } = useSafeAreaInsets();
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      yarnName: '',
      brandName: '',
      color: '',
      needleRange: {
        from: 0,
        to: 0,
      },
      hookRange: {
        from: 0,
        to: 0,
      },
      weight: 0,
      notes: '',
      // photo_ids:[]
    },
  });

  const [isSaveEnabled, setIsSaveEnabled] = useState(false);

  const yarnNameValue = watch('yarnName');

  useEffect(() => {
    setIsSaveEnabled(yarnNameValue.length > 0);
  }, [yarnNameValue]);

  const HandleCreateNewUserYarn = async (data: {
    yarnName: string;
    brandName: string;
    color: string;
    needleRange: { from: number; to: number };
    hookRange: { from: number; to: number };
    weight: number;
    notes: string;
  }) => {
    try {
      const result = await createUserYarnV1Api({
        username: 'knitwithcode', // TODO(irene/juno): this is temporary username - handle dynamically once authentication is done
        body: {
          yarn_name: data.yarnName,
          brand_name: data.brandName,
          color: data.color,
          needle_range_from: data.needleRange.from,
          needle_range_to: data.needleRange.to,
          hook_range_from: data.hookRange.from,
          hook_range_to: data.hookRange.to,
          weight: data.weight.toString(),
          note: data.notes,
        },
      });
      if (result.error) {
        console.error('Failed to create yarn:', result.error);
      } else {
        console.log('Yarn created successfully:', result.data);
      }
    } catch (error) {
      console.error('Error creating yarn:', error);
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
                required: false,
              }}
              render={({ field: { onChange, value } }) => (
                <Input title="Brand Name" placeholder="Enter brand name" onChangeText={onChange} value={value} />
              )}
              name="brandName"
            />

            <Controller
              control={control}
              rules={{
                required: false,
              }}
              render={({ field: { onChange, value } }) => (
                <Input title="Color" placeholder="Enter color name" onChangeText={onChange} value={value} />
              )}
              name="color"
            />
            {/* consider use bottom pop up instead of dropdown */}
            <View>
              <Label title="Needle range" />
              <View style={{ flexDirection: 'row', gap: 16 }}>
                <View style={{ flex: 1 }}>
                  <Controller
                    control={control}
                    name="needleRange.from"
                    render={({ field: { onChange, value } }) => (
                      <Select onChange={onChange} value={value} items={needleSizeOptions} placeholder="From" />
                    )}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Controller
                    control={control}
                    name="needleRange.to"
                    render={({ field: { onChange, value } }) => (
                      <Select onChange={onChange} value={value} items={needleSizeOptions} placeholder="To" />
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
                      <Select onChange={onChange} value={value} items={hookSizeOptions} placeholder="From" />
                    )}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Controller
                    control={control}
                    name="hookRange.to"
                    render={({ field: { onChange, value } }) => (
                      <Select onChange={onChange} value={value} items={hookSizeOptions} placeholder="To" />
                    )}
                  />
                </View>
              </View>
            </View>

            <Controller
              control={control}
              rules={{
                required: false,
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  title="Weight"
                  placeholder="Enter weight(grams) per yarn"
                  onChangeText={onChange}
                  value={value.toString()}
                />
              )}
              name="weight"
            />

            <View style={{ height: 200 }}>
              <Controller
                control={control}
                rules={{
                  required: false,
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
        <View style={styles.ButtonArea}>
          <View style={{ flex: 1, flexDirection: 'row', gap: 16 }}>
            <Button title="Cancel" type={'cancel'} style={{ flex: 1 }} onPress={() => router.back()} />
            <Button
              title="Save"
              type={'primary'}
              style={{ flex: 1 }}
              onPress={handleSubmit(HandleCreateNewUserYarn)}
              disabled={!isSaveEnabled}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  ButtonArea: {
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
