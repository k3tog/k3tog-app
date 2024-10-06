import { Href, useRouter } from 'expo-router';
import { Text, View, Image, StyleSheet, ImageSourcePropType, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  card: {
    height: '100%',
    width: 150,
    marginRight: 16,
    padding: 16,
    justifyContent: 'space-between',
    borderRadius: 16,
    borderColor: '#F4F6F7',
    borderWidth: 1,
    // boxshadow skip in MVP
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 4,
    // elevation: 5, // For Android
  },
  card_title: {
    color: '#131214',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.2,
  },
  card_content: {
    color: '#6E7375',
    fontSize: 14,
    lineHeight: 21,
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    width: 48,
    height: 48,
  },
});

const NewCard = ({
  title,
  content,
  source,
  path,
}: {
  title: string;
  content: string;
  source: ImageSourcePropType;
  path: Href<string>;
}) => {
  const router = useRouter();
  return (
    <TouchableOpacity style={styles.card} onPress={() => router.push(path)}>
      <Image source={source} style={styles.image} />
      <View style={{ gap: 8 }}>
        <Text style={styles.card_title}>{title}</Text>
        <Text style={styles.card_content}>{content}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewCard;
