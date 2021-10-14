import React from 'react';
import { View, Text, Button } from 'react-native';

export default function About({navigation, route}) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About</Text>
      </View>
    );
}