import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const Dashboard = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dashboard</Text>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
