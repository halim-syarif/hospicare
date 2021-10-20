import React from 'react';
import { View, Text, Button } from 'react-native';
import StatusBarLight from '../../components/StatusBarLight';

export default function Apotek({navigation, route}) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBarLight/>
        <Text>Apotek</Text>
      </View>
    );
}