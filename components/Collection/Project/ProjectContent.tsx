import { View } from 'react-native';
import ProjectInfo from './ProjectInfo';
import PatternInfo from './PatternInfo';
import YarnsInfo from './YarnsInfo';
import NeedlesInfo from './NeedlesInfo';

const Divider = () => <View style={{ height: 1, backgroundColor: '#E6E9EB', marginVertical: 8 }} />;

const ProjectContent = () => {
  return (
    <View style={{ paddingHorizontal: 16, paddingVertical: 24, gap: 8 }}>
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
