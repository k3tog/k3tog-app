import { ScrollView, StyleSheet, View } from 'react-native';
import ProjectSwiper from '@/components/Collection/Project/ProjectSwiper';
import ProjectContent from '@/components/Collection/Project/ProjectContent';

const Project = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <ProjectSwiper />
        <ProjectContent />
      </View>
    </ScrollView>
  );
};

export default Project;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
  },
});
