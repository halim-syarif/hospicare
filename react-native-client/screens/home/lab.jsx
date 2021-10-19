import React from 'react';
import { View, Text, Button } from 'react-native';
import StatusBarLight from '../../components/StatusBarLight';

export default function Lab({navigation, route}) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBarLight/>
        <Text>Lab</Text>
      </View>
    );
}