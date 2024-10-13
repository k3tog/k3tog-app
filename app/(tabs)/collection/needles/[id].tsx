import { getUserNeedleV1Api } from '@/apis/user-needles';
import TopbarCenterAligned from '@/components/topbar/topbar.center-aligned';
import icons from '@/constants/icons';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const MyNeedleDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [needle, setNeedle] = useState<UserNeedleV1ResponseData | null>(null);

  useEffect(() => {
    const fetchNeedle = async () => {
      const response = await getUserNeedleV1Api({ username: 'knitwithcode', needleId: parseInt(id) });
      if (response.data) {
        setNeedle(response.data);
      } else {
        console.error('Error fetching needle:', response.error);
      }
    };
    fetchNeedle();
  }, [id]);

  return (
    <SafeAreaView style={styles.container}>
      <TopbarCenterAligned title="Pattern" leftIcon={icons.chevronLeftColoredIcon} />
      <View>
        <Text>{needle?.name}</Text>
      </View>
    </SafeAreaView>
  );
};

export default MyNeedleDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
