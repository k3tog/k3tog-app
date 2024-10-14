import { getUserNeedlesV1Api } from '@/apis/user-needles';
import ListCard from '@/components/card/card.list-item';
import TopbarLarge from '@/components/topbar/topbar.large';
import icons from '@/constants/icons';
import images from '@/constants/images';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from 'react-native';

const MyNeedles = () => {
  const router = useRouter();
  const [needles, setNeedles] = useState<UserNeedleV1ResponseData[]>([]);

  useEffect(() => {
    const fetchNeedles = async () => {
      const response = await getUserNeedlesV1Api({ username: 'knitwithcode' });
      if (response.data) {
        setNeedles(response.data);
      } else {
        console.error('Error fetching needles:', response.error);
      }
    };
    fetchNeedles();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TopbarLarge title="My Needles" leftIcon={icons.chevronLeftColoredIcon} />
      {needles.length === 0 ? (
        <View style={styles.emptyStateContainer}>
          <Text style={styles.emptyStateText}>It seems you haven't added any needles.</Text>
          <Text style={styles.emptyStateText}>Start your collection now!</Text>
        </View>
      ) : (
        needles.map((needle) => (
          <ScrollView contentContainerStyle={styles.listContainer}>
            <ListCard
              key={needle.id}
              thumbnail={images.placeholderImage64}
              status={needle?.size ?? 'Unknown'}
              title={needle.name}
              date={`2h ago`}
              onPress={() => router.push(`/collection/needles/${needle.id}`)}
            />
          </ScrollView>
        ))
      )}
    </SafeAreaView>
  );
};

export default MyNeedles;

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
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  emptyStateText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    color: '#898D8F',
    lineHeight: 27,
  },
});
