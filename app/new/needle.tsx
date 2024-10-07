import Button from '@/components/Button';
import Input from '@/components/Input';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Select from '@/components/Select';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { createUserNeedleV1Api } from '@/apis/user-needles';

export default function NewNeedle() {
  const router = useRouter();
  const { bottom } = useSafeAreaInsets();
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      needleName: '',
      size: '',
      notes: '',
      // photos_ids: []
    },
  });

  const [isSaveEnabled, setIsSaveEnabled] = useState(false);

  const needleNameValue = watch('needleName');

  useEffect(() => {
    setIsSaveEnabled(needleNameValue.length > 0);
  }, [needleNameValue]);

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

  const handleCreateNewUserNeedle = async (data: { needleName: string; size: string; notes: string }) => {
    try {
      const result = await createUserNeedleV1Api({
        // TODO(irene/juno): this is temporary username - handle dynamically once authentication is done
        username: 'knitwithcode', // Assuming 'knitwithcode' is the username to use for the API call
        body: {
          name: data.needleName,
          size: data.size,
          note: data.notes,
        },
      });
      if (result.error) {
        console.error('Failed to create needle:', result.error);
      } else {
        console.log('Needle created successfully:', result.data);
      }
    } catch (error) {
      console.error('Error creating needle:', error);
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
                rules={{
                  required: false,
                }}
                name="size"
                render={({ field: { onChange, value } }) => (
                  <Select onChange={onChange} value={value} items={needleSizeOptions} placeholder="Size" title="Size" />
                )}
              />
            </View>
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
        <View style={styles.login_button_area}>
          <View style={{ flex: 1, flexDirection: 'row', gap: 16 }}>
            <Button title="Cancel" type={'cancel'} style={{ flex: 1 }} onPress={() => router.back()} />
            <Button
              title="Save"
              type={'primary'}
              style={{ flex: 1 }}
              onPress={handleSubmit(handleCreateNewUserNeedle)}
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
