import { ScrollView, View, StyleSheet } from 'react-native';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  return (
    <ScrollView>
      <View style={styles.projectContainer}>
        <ProjectCard />
        <ProjectCard />
      </View>
    </ScrollView>
  );
};

export default ProjectList;

const styles = StyleSheet.create({
  projectContainer: {
    gap: 24, // 카드 간격
  },
});
