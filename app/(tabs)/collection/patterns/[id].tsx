import { getUserPatternV1Api } from '@/apis/user-patterns';
import TopbarCenterAligned from '@/components/topbar/topbar.center-aligned';
import icons from '@/constants/icons';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const MyPatternDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [pattern, setPattern] = useState<UserPatternV1ResponseData | null>(null);

  useEffect(() => {
    const fetchPattern = async () => {
      const response = await getUserPatternV1Api({ username: 'knitwithcode', patternId: parseInt(id) });
      if (response.data) {
        setPattern(response.data);
      } else {
        console.error('Error fetching pattern:', response.error);
      }
    };
    fetchPattern();
  }, [id]);

  return (
    <SafeAreaView style={styles.container}>
      <TopbarCenterAligned title="Pattern" leftIcon={icons.chevronLeftColoredIcon} />
      <View>
        <Text>{pattern?.name}</Text>
      </View>
    </SafeAreaView>
  );
};

export default MyPatternDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
