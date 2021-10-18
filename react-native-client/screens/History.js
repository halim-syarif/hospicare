import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailHistory from "./history/DetailHistory";
import MainHistory from './history/MainHistory';

const Stack = createNativeStackNavigator()

export default function History() {

  return (
    <>
      <Stack.Navigator initialRouteName="MainHistory">
        <Stack.Screen
          name="History"
          component={MainHistory}
        />
        <Stack.Screen
          name="Detail"
          component={DetailHistory}
        />
      </Stack.Navigator>
    </>
  );
}
