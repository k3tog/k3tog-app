import { getUserNeedleV1Api } from '@/apis/user-needles';
import Divider from '@/components/divider/divider';
import MediumImageSlider from '@/components/slider/slider.images-medium';
import TopbarCenterAligned from '@/components/topbar/topbar.center-aligned';
import { TypographyBodySmall } from '@/components/typography/typography.body';
import { TypographyHeading2 } from '@/components/typography/typography.heading';
import { TypographyLabelMedium, TypographyLabelSmall } from '@/components/typography/typography.label';
import icons from '@/constants/icons';
import images from '@/constants/images';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Image, View } from 'react-native';

const IMAGES: TImageSliderProps[] = [
  {
    id: '1',
    image: images.placeholderImage320,
  },
  {
    id: '2',
    image: images.placeholderImage320,
  },
  {
    id: '3',
    image: images.placeholderImage320,
  },
];

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
      <TopbarCenterAligned title="Needle" leftIcon={icons.chevronLeftColoredIcon} />
      <ScrollView>
        <View style={styles.infoContainer}>
          <TypographyHeading2 text={needle?.name ?? 'Needle'} />
          <View style={styles.infoSubText}>
            <TypographyLabelSmall text={`${needle?.size}`} color="#6E7375" />
            <View style={styles.menuIcons}>
              <Image style={styles.icon} source={icons.pencilIcon} />
              <Image style={styles.icon} source={icons.bookmarkIcon} />
              <Image style={styles.icon} source={icons.trashIcon} />
            </View>
          </View>
          <Divider />
          {needle?.note && (
            <View style={styles.notes}>
              <TypographyLabelMedium text={`Notes`} style={{ fontWeight: 700 }} />
              <TypographyBodySmall text={needle?.note} color="#6E7375" />
            </View>
          )}
        </View>
        <MediumImageSlider images={IMAGES} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyNeedleDetail;

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
  notes: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
});
