import { Image, Text, View } from 'react-native';

const ImageUrl =
  'https://s3-alpha-sig.figma.com/img/9965/9e58/1f4c747c2db0fa01eff33a8e4a6d7e7a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZctQvXXTW5JeHUHY5HpZraV-Ah7TmdRPMQS518AYWHFQqGjPSvcPO920KAXnRyIxzheQtFlGPD9CUK~jVw0DLlkd0diA2faUORBSerb6HvfGTW90jUWar10fbozLFg6-ndSUwPpjkIPX1RU6-gXnBAxznHLDIotWknfIAwLGT0A-J8~pkbZKOCu6XSivXNOEU9IAFHEWvIu61VTSGh3JY4sqfPJbMXhTvytSkpEaz8vofzuQmFDHXtCXAAwo3fChrk9AuaajSdN3Dxw2bl6BZLnNyrKKn7W~Y82YI1SD1Nq26lO~w9CNtN~3suxN3y8-W70pcOso5VK9q22DLaq-fQ__';

const PatternInfo = () => (
  <>
    <Text style={{ fontSize: 16, color: '#6E7375', fontWeight: '700' }}>Pattern</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ gap: 8 }}>
        <Text style={{ lineHeight: 19.2, fontSize: 16, color: '#131214', fontWeight: '700' }}>Sweater No. 15</Text>
        <Text style={{ fontSize: 12, color: '#7257FF' }}>by My Favourite Things </Text>
      </View>
      <Image source={{ uri: ImageUrl }} style={[{ width: 60, height: 60, borderRadius: 16 }]} />
    </View>
    <Text style={{ color: '#131214' }}>
      It is a classic style with focus on the details. The shoulder construction and increases along ...
    </Text>
  </>
);
export default PatternInfo;
