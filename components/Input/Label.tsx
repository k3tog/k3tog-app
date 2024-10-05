import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  label: {
    color: '#131214',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default function Label({ title }: { title?: string }) {
  if (!title) return null;
  return (
    <View>
      <Text style={styles.label}>{title}</Text>
      <View style={{ height: 16 }} />
    </View>
  );
}
