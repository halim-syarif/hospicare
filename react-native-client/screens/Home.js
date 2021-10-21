import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Landing from './home/landing';
import Lab from './home/lab';
import Apotek from './home/apotek';
import Dokter from './home/dokter';
import Poliklinik from './home/poliklinik';

const Stack = createNativeStackNavigator()

export default function Home() {

  return (
    <>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          options={{headerShown: false}}
          name="Landing"
          component={Landing}
        />
        <Stack.Screen
          name="Poliklinik"
          component={Poliklinik}
        />
        <Stack.Screen
          name="Lab"
          component={Lab}
        />
        <Stack.Screen
          name="Apotek"
          component={Apotek}
        />
        <Stack.Screen
          name="Dokter"
          component={Dokter}
        />
      </Stack.Navigator>
    </>
  );
}
