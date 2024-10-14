import { getUserPatternV1Api } from '@/apis/user-patterns';
import TopbarCenterAligned from '@/components/topbar/topbar.center-aligned';
import { TypographyBodyMedium } from '@/components/typography/typography.body';
import { TypographyHeading2 } from '@/components/typography/typography.heading';
import { TypographyLabelSmall } from '@/components/typography/typography.label';
import icons from '@/constants/icons';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Image } from 'react-native';

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
      <ScrollView>
        <View style={styles.patternInfoContainer}>
          <TypographyHeading2 text={pattern?.name ?? 'Pattern'} />
          <View style={styles.subtitle}>
            {pattern?.author && <TypographyLabelSmall text={`By ${pattern?.author}  •  `} color="#6E7375" />}
            <TypographyLabelSmall text={`Sep 22, 2024`} color="#6E7375" />
          </View>
          {pattern?.description && <TypographyBodyMedium text={pattern?.description} />}
          <View style={styles.menuIcons}>
            <Image style={styles.icon} source={icons.pencilIcon} />
            <Image style={styles.icon} source={icons.bookmarkIcon} />
            <Image style={styles.icon} source={icons.downloadIcon} />
            <Image style={styles.icon} source={icons.trashIcon} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyPatternDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  patternInfoContainer: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    gap: 16,
  },
  subtitle: {
    flexDirection: 'row',
  },
  menuIcons: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
