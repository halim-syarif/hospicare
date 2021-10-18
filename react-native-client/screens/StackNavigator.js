import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LandingPage from './LandingPage';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Stack = createNativeStackNavigator()

export default function StackNavigator(){
    return (
        <Stack.Navigator initialRouteName="LandingPage">
            <Stack.Screen 
                options={{headerShown: false}}
                name="LandingPage" 
                component={LandingPage}/>
            <Stack.Screen 
                options={{headerShown: false}}
                name="SignInScreen" 
                component={SignIn}/>
            <Stack.Screen 
                options={{headerShown: false}}
                name="SignUpScreen" 
                component={SignUp}/>
        </Stack.Navigator>
    )
}