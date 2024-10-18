import { getUserProjectV1Api } from '@/apis/user-projects';
import Divider from '@/components/divider/divider';
import LargeImageSlider from '@/components/slider/slider.images-large';
import TopbarCenterAligned from '@/components/topbar/topbar.center-aligned';
import icons from '@/constants/icons';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native';

const MyProjectDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [project, setProject] = useState<UserProjectV1ResponseData | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      const response = await getUserProjectV1Api({ username: 'knitwithcode', projectId: parseInt(id) });
      if (response.data) {
        setProject(response.data);
      } else {
        console.error('Error fetching project:', response.error);
      }
    };
    fetchProject();
  }, [id]);

  const images: TImageSliderProps[] =
    project?.photos?.map((photo) => ({
      id: photo.photo_id,
      image: photo.signed_photo_url,
    })) ?? [];

  return (
    <SafeAreaView style={styles.container}>
      <TopbarCenterAligned title="Project" leftIcon={icons.chevronLeftColoredIcon} />
      <LargeImageSlider images={images} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.projectInfoContainer}>
          <Text style={styles.status}>{project?.status}</Text>
          <Text style={styles.title}>{project?.title}</Text>
          <Text style={styles.updatedDate}>Updated on for now</Text>
          <View style={styles.menuIcons}>
            <Image style={styles.icon} source={icons.pencilIcon} />
            <Image style={styles.icon} source={icons.bookmarkIcon} />
            <Image style={styles.icon} source={icons.trashIcon} />
          </View>
          <View style={styles.iconInfo}>
            <Image style={styles.icon} source={icons.calendarIcon} />
            <Text style={styles.descriptionText}>
              {project?.co_date} ~ {project?.fo_date}
            </Text>
          </View>
          <View style={styles.iconInfo}>
            <Image style={styles.icon} source={icons.rulerIcon} />
            <Text style={styles.descriptionText}>{project?.size}</Text>
          </View>
          <Text style={styles.sectionTitle}>Note</Text>
          <Text style={styles.noteText}>{project?.note}</Text>
        </View>
        <Divider />
        <View>
          <Text style={styles.sectionTitle}>Pattern</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyProjectDetail;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 16,
  },
  projectInfoContainer: {
    gap: 8,
  },
  status: {
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: 16.8,
    fontSize: 14,
    fontWeight: '700',
    color: '#7257FF',
  },
  title: {
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: 28.8,
    fontSize: 24,
    fontWeight: '700',
    color: '#131214',
  },
  updatedDate: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    color: '#6E7375',
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
  iconInfo: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  descriptionText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    color: '#131214',
  },
  noteText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#131214',
  },
  sectionTitle: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16,
    color: '#6E7375',
  },
  dateRange: {
    lineHeight: 21,
    fontSize: 14,
    color: '#131214',
  },
  size: {
    lineHeight: 21,
    fontSize: 14,
    color: '#131214',
  },
  noteTitle: {
    fontSize: 16,
    color: '#6E7375',
    fontWeight: '700',
  },
  noteContent: {
    lineHeight: 24,
    fontSize: 16,
    color: '#131214',
  },
});
