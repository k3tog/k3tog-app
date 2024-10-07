import { Image, Text, View } from 'react-native';
import icons from '@/constants/icons';

const ProjectInfo = () => (
  <>
    <Text style={{ lineHeight: 16.8, fontSize: 14, fontWeight: '700', color: '#7257FF' }}>Work In Progress</Text>
    <Text style={{ lineHeight: 28.8, fontSize: 24, fontWeight: '700', color: '#131214' }}>
      Creating Your First Component
    </Text>
    <Text style={{ fontSize: 12, color: '#6E7375' }}>Updated on 22 Sep 2024</Text>
    <View style={{ flexDirection: 'row', gap: 12 }}>
      <Image source={icons.calendarIcon} resizeMode="contain" tintColor="#131214" style={{ width: 24, height: 24 }} />
      <Text style={{ lineHeight: 21, fontSize: 14, color: '#131214' }}>September 15, 2024~ September 30, 2024</Text>
    </View>
    <View style={{ flexDirection: 'row', gap: 12 }}>
      <Image source={icons.gaugeIcon} resizeMode="contain" tintColor="#131214" style={{ width: 24, height: 24 }} />
      <Text style={{ lineHeight: 21, fontSize: 14, color: '#131214' }}>Size S</Text>
    </View>
    <Text style={{ fontSize: 16, color: '#6E7375', fontWeight: '700' }}>Note</Text>
    <Text style={{ lineHeight: 24, fontSize: 16, color: '#131214' }}>
      If you ask designers what a design system is, you’ll probably get a lot of different answers
    </Text>
  </>
);

export default ProjectInfo;
