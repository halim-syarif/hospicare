import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider } from 'react-redux'
import { Ionicons } from 'react-native-vector-icons';
import Detail from './screens/Detail';
import Home from './screens/Home';
import About from './screens/About';
import LandingPage from './screens/LandingPage';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import store from './store';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer >
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
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
