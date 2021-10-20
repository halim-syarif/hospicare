import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailHistory from "./history/DetailHistory";
import MainHistory from './history/MainHistory';
import Payment from './history/Payment';

const Stack = createNativeStackNavigator()

export default function History() {

  return (
    <>
      <Stack.Navigator initialRouteName="Riwayat Pemesanan">
        <Stack.Screen
          name="Riwayat Pemesanan"
          component={MainHistory}
        />
        <Stack.Screen
          name="Detail"
          component={DetailHistory}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
        />
      </Stack.Navigator>
    </>
  );
}
