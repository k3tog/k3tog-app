import { useRouter } from 'expo-router';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const NewListCard = ({ title, content, source, path }: TNewListCardProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity style={styles.card} onPress={() => router.push(path)}>
      <Image source={source} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardContent}>{content}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewListCard;

const styles = StyleSheet.create({
  card: {
    width: 150,
    // height: 220,
    marginRight: 16,
    padding: 16,
    justifyContent: 'space-between',
    borderRadius: 16,
    borderColor: '#F4F6F7',
    borderWidth: 0.5,
    shadowColor: '#141414',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 1,
    elevation: 1,
  },
  cardTitle: {
    color: '#131214',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.2,
    fontFamily: 'Plus Jakarta Sans',
  },
  cardContent: {
    color: '#6E7375',
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Plus Jakarta Sans',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    width: 48,
    height: 48,
  },
  textContainer: {
    gap: 8,
  },
});
