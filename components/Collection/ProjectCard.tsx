import icons from '@/constants/icons';
import { useRouter } from 'expo-router';
import { TouchableOpacity, Text, View, StyleSheet, ScrollView, Image } from 'react-native';
const imageUrl =
  'https://s3-alpha-sig.figma.com/img/af4b/a1fa/c41586b8704d7d05635dccb878aeda74?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HxQ2CkCxA9JesmHjuY8qKedqySEEa7UxF2jq2JkpN0OmnFhuARC9ltM9uGEb4r-CB4LLWbOuOeJdleV951ExKcg9e2rd6RjqgPohsndxyw8jApOZpN0fzQbqrDfAXsltPia5~Rtzto044wInYKyOGNMvh6AvtvM~CMKWPV13KoEYiqiHx-H9Q36lQ4hWpU6oYbC4R0y0xMKyeyOD9Qv3L~BGSO5HhR4PH1pvrYjFGLoXrOVT2vq63Xnxd0XNli9isn~~DqE2LKkfpne9j34lVETBdgY~MdfcpLPUEzcIGryhp7cUbPu2XdcKqIKsfOU5ftYx9J~Qon5RCmtHQ1IkFw__';

const ProjectCard = () => {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.card} onPress={() => router.push('/collection/project')}>
      <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.status}>Not Started</Text>
        <Text style={styles.title} numberOfLines={1}>
          Blue Wave Cardigan
        </Text>
        <Text style={styles.description} numberOfLines={3}>
          Building blocks for creating a user Building blocks for creating a user
        </Text>
        <View style={styles.dateContainer}>
          <Image source={icons.calendarIcon} resizeMode="contain" tintColor="#898D8F" style={styles.icon} />
          <Text style={styles.dateText}>Sep 15, 2023 - Unknown</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProjectCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  content: {
    flex: 1,
  },
  status: {
    color: '#7257FF',
    fontWeight: '700',
  },
  title: {
    lineHeight: 19.2,
    color: '#131214',
    fontSize: 16,
    fontWeight: '700',
  },
  description: {
    flex: 1,
    lineHeight: 21,
    color: '#6E7375',
    fontSize: 14,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  icon: {
    width: 16,
    height: 16,
  },
  dateText: {
    flex: 1,
    lineHeight: 21,
    color: '#6E7375',
    fontSize: 14,
  },
});
