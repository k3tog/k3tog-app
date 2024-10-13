import Button from '@/components/button';
import icons from '@/constants/icons';
import { useRouter } from 'expo-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Image,
  ImageSourcePropType,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import BottomSheet from '@/components/modal/modal.bottom-sheet';
import TopbarCenterAligned from '@/components/topbar/topbar.center-aligned';
import RadioButtonList from '@/components/radio-button/ratio-button.list';

interface IconTextButtonProps {
  icon: ImageSourcePropType;
  text: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const IconTextButton = ({ icon, text, onPress, buttonStyle, textStyle }: IconTextButtonProps) => {
  return (
    <TouchableOpacity style={[styles.iconTextButton, buttonStyle]} onPress={onPress}>
      <Image source={icon} style={styles.icon} />
      <Text
        style={[
          styles.buttonText,
          textStyle,
          { fontFamily: 'Plus Jakarta Sans', fontSize: 14, lineHeight: 21, fontWeight: 400 },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const NewProject = () => {
  const router = useRouter();
  const { control, watch } = useForm({
    defaultValues: {
      title: '',
      status: '',
      start_date: '',
      end_date: '',
      note: '',
      photos: [],
    },
  });

  const [isSaveEnabled, setIsSaveEnabled] = useState(false);
  const titleValue = watch('title');

  useEffect(() => {
    setIsSaveEnabled(titleValue.length > 0);
  }, [titleValue]);

  const statusRef = useRef<BottomSheetModal>(null);
  const startDateRef = useRef<BottomSheetModal>(null);
  const endDateRef = useRef<BottomSheetModal>(null);

  const handleStatusModalPress = useCallback(() => {
    statusRef.current?.present();
  }, []);
  const handleStartDateModalPress = useCallback(() => {
    startDateRef.current?.present();
  }, []);
  const handleEndDateModalPress = useCallback(() => {
    endDateRef.current?.present();
  }, []);

  const statusOptions = [
    { value: 'Not Started', icon: icons.squareIcon, label: 'Not Started', description: 'Planned, but haven’t started' },
    {
      value: 'Work in Progress',
      icon: icons.repeatIcon,
      label: 'Work In Progress',
      description: 'Cast-on, working on it!',
    },
    { value: 'Finished', icon: icons.checkSquareIcon, label: 'Finished', description: 'I’ve got F.O.!' },
  ];

  const [statusValue, setStatusValue] = useState('');

  const handleStatusChange = (value: string) => {
    setStatusValue(value);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <TopbarCenterAligned title="New Project" leftIcon={icons.chevronLeftColoredIcon} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
        keyboardVerticalOffset={Platform.select({ ios: 60, android: 78 })}
        style={styles.container}
      >
        <View style={styles.content}>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Title"
                placeholderTextColor="#898D8F"
                style={styles.titleInput}
                value={value}
                onChangeText={onChange}
              />
            )}
            name="title"
          />
          <View style={styles.spacer} />
          <View style={styles.buttonContainer}>
            {statusValue ? (
              <IconTextButton
                icon={icons.checkCircleColoredIcon}
                text={statusValue}
                onPress={handleStatusModalPress}
                textStyle={{ color: '#131214' }}
              />
            ) : (
              <IconTextButton icon={icons.checkCircleIcon} text="Choose Status" onPress={handleStatusModalPress} />
            )}
            <IconTextButton
              icon={icons.calendarStartIcon}
              text="Choose Start Date"
              onPress={handleStartDateModalPress}
            />
            <IconTextButton icon={icons.calendarEndIcon} text="Choose End Date" onPress={handleEndDateModalPress} />
          </View>

          <View style={styles.spacer} />
          <Text style={styles.noteLabel}>Note</Text>
          <View style={styles.spacer} />
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Write something..."
                placeholderTextColor="#898D8F"
                multiline
                style={styles.noteInput}
                value={value}
                onChangeText={onChange}
              />
            )}
            name="note"
          />
          <View style={styles.spacer} />
          <Text style={styles.noteLabel}>Photos</Text>
          <View style={styles.spacer} />

          <View style={styles.buttonArea}>
            <View style={styles.buttonFlex}>
              <Button title="Cancel" type={'cancel'} style={{ flex: 1 }} onPress={() => router.back()} />
              <Button
                title="Save"
                type={'primary'}
                style={{ flex: 1 }}
                // onPress={handleSubmit(handleCreateNewUserNeedle)}
                disabled={!isSaveEnabled}
              />
            </View>
          </View>
        </View>
        <BottomSheet ref={statusRef} title="Choose Status">
          <View style={styles.statusContainer}>
            <RadioButtonList options={statusOptions} selectedValue={statusValue} onChange={handleStatusChange} />
            <View style={{ flex: 1, flexDirection: 'row', gap: 16, paddingVertical: 16 }}>
              <Button title="Cancel" type={'cancel'} style={{ flex: 1 }} onPress={() => statusRef.current?.dismiss()} />
              <Button
                title="Add"
                type={'primary'}
                style={{ flex: 1 }}
                onPress={() => {
                  if (statusValue) {
                    handleStatusChange(statusValue);
                    statusRef.current?.dismiss();
                  }
                }}
                disabled={!statusValue}
              />
            </View>
          </View>
        </BottomSheet>
        <BottomSheet ref={startDateRef}>
          <Text>EndDateModal 🎉</Text>
        </BottomSheet>
        <BottomSheet ref={endDateRef}>
          <Text>Awesome 🎉</Text>
        </BottomSheet>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default NewProject;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  titleInput: {
    color: '#131214',
    fontSize: 32,
    lineHeight: 38.4,
    fontWeight: '700',
    width: '100%',
  },
  spacer: {
    height: 16,
  },
  buttonContainer: {
    gap: 12,
  },
  iconTextButton: {
    flexDirection: 'row',
    gap: 12,
  },
  icon: {
    width: 24,
    height: 24,
  },
  buttonText: {
    color: '#898D8F',
    lineHeight: 21,
    fontSize: 14,
  },
  noteLabel: {
    color: '#6E7375',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21.6,
  },
  noteInput: {
    color: '#131214',
    fontSize: 16,
    lineHeight: 24,
    width: '100%',
    minHeight: 150,
  },
  buttonArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  buttonFlex: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
  },
  flexButton: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  statusContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 16,
  },
});
