import { StyleSheet, View } from 'react-native';
import ProjectInfo from './ProjectInfo';
import PatternInfo from './PatternInfo';
import YarnsInfo from './YarnsInfo';
import NeedlesInfo from './NeedlesInfo';

const Divider = () => <View style={styles.divider} />;

const ProjectContent = () => {
  return (
    <View style={styles.container}>
      <ProjectInfo />
      <Divider />
      <PatternInfo />
      <Divider />
      <YarnsInfo />
      <Divider />
      <NeedlesInfo />
    </View>
  );
};

export default ProjectContent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#E6E9EB',
    marginVertical: 8,
  },
});
