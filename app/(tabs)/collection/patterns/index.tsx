import { getUserPatternsV1Api } from '@/apis/user-patterns';
import ListCard from '@/components/card/card.list-item';
import TopbarLarge from '@/components/topbar/topbar.large';
import icons from '@/constants/icons';
import images from '@/constants/images';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native';

const MyPatterns = () => {
  const router = useRouter();
  const [patterns, setPatterns] = useState<UserPatternV1ResponseData[]>([]);

  useEffect(() => {
    const fetchPatterns = async () => {
      const response = await getUserPatternsV1Api({ username: 'knitwithcode' });
      if (response.data) {
        setPatterns(response.data);
      } else {
        console.error('Error fetching patterns:', response.error);
      }
    };
    fetchPatterns();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TopbarLarge title="My Patterns" leftIcon={icons.chevronLeftColoredIcon} />
      {patterns.length === 0 ? (
        <View style={styles.emptyStateContainer}>
          <Text style={styles.emptyStateText}>It seems you haven't added any patterns.</Text>
          <Text style={styles.emptyStateText}>Start your collection now!</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.listContainer}>
          {patterns.map((pattern) => (
            <ListCard
              key={pattern.id}
              thumbnail={images.placeholderImage64}
              status={pattern?.author ?? 'Unknown'}
              title={pattern.name}
              date={`2h ago`}
              onPress={() => router.push(`/collection/patterns/${pattern.id}`)}
            />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default MyPatterns;

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
