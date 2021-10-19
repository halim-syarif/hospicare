import React from 'react';
import { View, Text, Button } from 'react-native';
import StatusBarLight from '../components/StatusBarLight';

export default function About({navigation, route}) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBarLight/>
        <Text>About</Text>
      </View>
    );
}