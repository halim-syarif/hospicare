import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ScheduleBooking from './ScheduleBooking';
import ScheduleFilter from './ScheduleFilter';
export default function Schedule() {
   const Stack = createNativeStackNavigator()

    return (
      <Stack.Navigator initialRouteName="ScheduleFilter">
            <Stack.Screen name="ScheduleFilter" options={{headerShown: false}} component={ScheduleFilter}/>
            <Stack.Screen name="ScheduleBooking" 
                options={({ route }) => ({
                    title : route.params.name,
                    headerStyle: {
                        backgroundColor: '#009387'
                    },
                    headerTitleStyle: {
                        color: '#fff',
                        fontWeight: 'bold'
                    }
                })} 
                    component={ScheduleBooking}/>
      </Stack.Navigator>
    );
}