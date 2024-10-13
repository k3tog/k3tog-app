import { getUserYarnsV1Api } from '@/apis/user-yarns';
import ListCard from '@/components/card/card.list-item';
import TopbarLarge from '@/components/topbar/topbar.large';
import icons from '@/constants/icons';
import images from '@/constants/images';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const MyYarns = () => {
  const router = useRouter();
  const [yarns, setYarns] = useState<UserYarnV1ResponseData[]>([]);

  useEffect(() => {
    const fetchYarns = async () => {
      const response = await getUserYarnsV1Api({ username: 'knitwithcode' });
      if (response.data) {
        setYarns(response.data);
      } else {
        console.error('Error fetching yarns:', response.error);
      }
    };
    fetchYarns();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TopbarLarge title="My Yarns" leftIcon={icons.chevronLeftColoredIcon} />
      <ScrollView contentContainerStyle={styles.listContainer}>
        {yarns.map((yarn) => (
          <ListCard
            key={yarn.id}
            thumbnail={images.placeholderImage64}
            status={yarn?.brand_name ?? 'Unknown'}
            title={yarn.yarn_name}
            caption={`Yello - US 8 - 10`}
            date={`2h ago`}
            onPress={() => router.push(`/collection/yarns/${yarn.id}`)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyYarns;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  listContainer: {
    paddingHorizontal: 16,
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: 24,
  },
});
