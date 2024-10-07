import { Image, Text, View, StyleSheet } from 'react-native';
import icons from '@/constants/icons';

const ProjectInfo = () => (
  <>
    <Text style={styles.workInProgress}>Work In Progress</Text>
    <Text style={styles.title}>Creating Your First Component</Text>
    <Text style={styles.updatedDate}>Updated on 22 Sep 2024</Text>
    <View style={styles.infoRow}>
      <Image source={icons.calendarIcon} resizeMode="contain" tintColor="#131214" style={styles.icon} />
      <Text style={styles.dateRange}>September 15, 2024~ September 30, 2024</Text>
    </View>
    <View style={styles.infoRow}>
      <Image source={icons.gaugeIcon} resizeMode="contain" tintColor="#131214" style={styles.icon} />
      <Text style={styles.size}>Size S</Text>
    </View>
    <Text style={styles.noteTitle}>Note</Text>
    <Text style={styles.noteContent}>
      If you ask designers what a design system is, you’ll probably get a lot of different answers
    </Text>
  </>
);

const styles = StyleSheet.create({
  workInProgress: {
    lineHeight: 16.8,
    fontSize: 14,
    fontWeight: '700',
    color: '#7257FF',
  },
  title: {
    lineHeight: 28.8,
    fontSize: 24,
    fontWeight: '700',
    color: '#131214',
  },
  updatedDate: {
    fontSize: 12,
    color: '#6E7375',
  },
  infoRow: {
    flexDirection: 'row',
    gap: 12,
  },
  icon: {
    width: 24,
    height: 24,
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

export default ProjectInfo;
