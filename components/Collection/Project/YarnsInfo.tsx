import { Text, StyleSheet } from 'react-native';

const YarnsInfo = () => (
  <>
    <Text style={styles.title}>Yarns</Text>
    <Text style={styles.yarnName}>Olendar</Text>
    <Text style={styles.details}>From Purl Soho · Yellow · 125g · 5 stashes</Text>
    <Text style={styles.description}>
      Named for a silver-leaved, flowering shrub that thrives in the hot climate of the Mediterranean, Oleander is ...
    </Text>
    <Text style={styles.date}>2 weeks ago</Text>
    <Text style={styles.yarnName}>Favorite Cotton</Text>
    <Text style={styles.date}>1 hr ago</Text>
  </>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: '#6E7375',
    fontWeight: '700',
  },
  yarnName: {
    lineHeight: 19.2,
    fontSize: 16,
    color: '#131214',
    fontWeight: '700',
  },
  details: {
    fontSize: 12,
    color: '#7257FF',
  },
  description: {
    color: '#131214',
  },
  date: {
    fontSize: 12,
    color: '#6E7375',
  },
});

export default YarnsInfo;
