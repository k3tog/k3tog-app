import { TypographyBodySmall } from '@/components/typography/typography.body';
import { TypographyHeading2 } from '@/components/typography/typography.heading';
import { TypographyLabelMedium, TypographyLabelSmall } from '@/components/typography/typography.label';
import Divider from '@/components/divider/divider';
import TopbarCenterAligned from '@/components/topbar/topbar.center-aligned';
import { getUserYarnV1Api } from '@/apis/user-yarns';
import icons from '@/constants/icons';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, Image } from 'react-native';

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
      <TopbarCenterAligned title="Yarn" leftIcon={icons.chevronLeftColoredIcon} />
      <ScrollView>
        <View style={styles.infoContainer}>
          <TypographyHeading2 text={yarn?.yarn_name ?? 'Yarn'} />
          <View style={styles.infoSubText}>
            <TypographyLabelSmall text={`From ${yarn?.brand_name}`} color="#6E7375" />
            <View style={styles.menuIcons}>
              <Image style={styles.icon} source={icons.pencilIcon} />
              <Image style={styles.icon} source={icons.bookmarkIcon} />
              <Image style={styles.icon} source={icons.trashIcon} />
            </View>
          </View>
          <Divider />
          <View style={styles.details}>
            <TypographyLabelMedium text={`Details`} style={{ fontWeight: 700 }} />
            {yarn?.color && (
              <View style={styles.detailList}>
                <TypographyLabelSmall text={`Color`} color="#6E7375" />
                <TypographyLabelSmall text={`${yarn?.color}`} color="#6E7375" />
              </View>
            )}
            <View style={styles.detailList}>
              <TypographyLabelSmall text={`Needle Range`} color="#6E7375" />
              <TypographyLabelSmall
                text={`${yarn?.needle_range?.[0] ?? 'N/A'} - ${yarn?.needle_range?.[1] ?? 'N/A'}`}
                color="#6E7375"
              />
            </View>
            <View style={styles.detailList}>
              <TypographyLabelSmall text={`Hook Range`} color="#6E7375" />
              <TypographyLabelSmall
                text={`${yarn?.hook_range?.[0] ?? 'N/A'} - ${yarn?.hook_range?.[1] ?? 'N/A'}`}
                color="#6E7375"
              />
            </View>
            <View style={styles.detailList}>
              <TypographyLabelSmall text={`Weight`} color="#6E7375" />
              <TypographyLabelSmall
                text={`${yarn?.weight ? (Number(yarn.weight) > 0 ? Number(yarn.weight) : 'N/A') : 'N/A'}`}
                color="#6E7375"
              />
            </View>
          </View>
          {yarn?.note && (
            <View style={styles.notes}>
              <TypographyLabelMedium text={`Notes`} style={{ fontWeight: 700 }} />
              <TypographyBodySmall text={yarn?.note} color="#6E7375" />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyYarnDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  infoContainer: {
    display: 'flex',
    gap: 16,
    alignSelf: 'stretch',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  infoSubText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  details: {
    display: 'flex',
    gap: 12,
  },
  notes: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  detailList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
