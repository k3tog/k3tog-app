import { getUserYarnV1Api } from '@/apis/user-yarns';
import TopbarCenterAligned from '@/components/topbar/topbar.center-aligned';
import icons from '@/constants/icons';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
const MyYarnDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [yarn, setYarn] = useState<UserYarnV1ResponseData | null>(null);

  useEffect(() => {
    const fetchYarn = async () => {
      const response = await getUserYarnV1Api({ username: 'knitwithcode', yarnId: parseInt(id) });
      if (response.data) {
        setYarn(response.data);
      } else {
        console.error('Error fetching yarn:', response.error);
      }
    };
    fetchYarn();
  }, [id]);

  return (
    <SafeAreaView style={styles.container}>
      <TopbarCenterAligned title="Pattern" leftIcon={icons.chevronLeftColoredIcon} />
      <View>
        <Text>{yarn?.yarn_name}</Text>
      </View>
    </SafeAreaView>
  );
};

export default MyYarnDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
