import Button from '@/components/Button';
import Input from '@/components/Input';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type newPatternFormType = {
  yarnName: string;
  brandName: string;
  color: string;
  needleRange: {
    form: string;
    to: string;
  };
  hookRange: {
    form: string;
    to: string;
  };
  weight: string;
  notes: string;
  // photos:[]
};

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

export default function NewPattern() {
  const { bottom } = useSafeAreaInsets();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      yarnName: '',
      brandName: '',
      color: '',
      needleRange: {
        form: '',
        to: '',
      },
      hookRange: {
        form: '',
        to: '',
      },
      weight: '',
      notes: '',
      // photos:[]
    },
  });
  const onSubmit = (data: newPatternFormType) => console.log(data);

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
          {/* Needle Range */}
          {/* Hook Range */}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input title="Color" placeholder="Enter color name" onChangeText={onChange} value={value} />
            )}
            // how to get a color ?
            // color code? rgba? type is string?
            name="color"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input title="Weight" placeholder="Enter weight(grams) per yarn" onChangeText={onChange} value={value} />
            )}
            name="weight"
          />
        </View>

        <View style={styles.login_button_area}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Button title="Cancel" type={'primary'} style={{ flex: 1 }} onPress={handleSubmit(onSubmit)} />
            <Button title="Save" type={'cancel'} style={{ flex: 1 }} disabled />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
