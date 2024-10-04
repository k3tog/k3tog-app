import Button from '@/components/Button';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

const styles = StyleSheet.create({
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    gap: 32,
    flex: 1,
  },
  main_text: {
    color: '#131214',
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
  },
  login_buttons: {
    gap: 16,
  },
  terms_privacy_area: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  terms_privacy_text: { textAlign: 'center', lineHeight: 18, color: '#898D8F', fontSize: 12 },
});

export default function LoginOptions() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const imageUrl = require('../../assets/images/login/login_thumbnail.png');

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Image source={imageUrl} style={[styles.image, { width, resizeMode: 'cover' }]} />
      <View style={styles.content}>
        <Text style={styles.main_text}>Continue Your Knitting Journey with K3tog</Text>
        <View style={styles.login_buttons}>
          <Button style={{ backgroundColor: '#131214' }} title="Continue with Apple" />
          <Button
            style={{ backgroundColor: '#F4F6F7' }}
            titleStyle={{ color: '#131214' }}
            title="Continue with Google"
          />
          <Button style={{ backgroundColor: '#0078FF' }} title="Continue with FaceBook" />

          <Button
            style={{ backgroundColor: '#F0EDFF' }}
            titleStyle={{ color: '#5336E2' }}
            title="Continue with Email"
            onPress={() => {
              router.push('/auth/login');
            }}
          />
        </View>

        <View style={styles.terms_privacy_area}>
          <Text style={styles.terms_privacy_text}>
            By continuing, you agree to  our Terms of Service and Privacy Policy.
          </Text>
        </View>
      </View>
    </View>
  );
}
