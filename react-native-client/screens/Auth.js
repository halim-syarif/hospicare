import React from 'react';
import { 
    View, 
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux'
import {Ionicons} from 'react-native-vector-icons';
import LandingPage from './LandingPage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Detail from './Detail';
import Home from './Home';
import About from './About'
import Schedule from './Schedule';
import History from './History';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function Auth(){
    const access_token = useSelector(state => state.patients.access_token)
    return (
        // <View style={{flex: 1}}>
        //     {access_token ? 
            <Tab.Navigator 
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
                      if (route.name === 'Home') {
                        iconName = focused
                          ? 'home-sharp'
                          : 'home-outline';
                      } 
                      else if(route.name === 'Schedule'){
                        iconName = focused 
                        ? 'calendar' 
                        : 'calendar-outline'
                      }
                      else if (route.name === 'About') {
                        iconName = focused 
                        ? 'ios-information-circle' 
                        : 'ios-information-circle-outline';
                      } 

                      else if (route.name === 'HistoryRoute') {
                        iconName = focused 
                        ? 'ios-clipboard' 
                        : 'ios-clipboard-outline';
                      } 
                      else if(route.name === 'Schedule'){
                          iconName = focused 
                          ? 'calendar' 
                          : 'calendar-outline'
                      }
                      return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#0F430E',
                    tabBarInactiveTintColor: 'gray',
                  })}
                >
                <Tab.Screen name="Home" options={{headerShown: false}} component={Home}/>
                <Tab.Screen name="Schedule" options={{headerShown: false}} component={Schedule}/>
                <Tab.Screen name="HistoryRoute" options={{ headerShown: false }} component={History}/>
                <Tab.Screen name="About" component={About}/>
            </Tab.Navigator> 
            // : 
            // <Stack.Navigator initialRouteName="LandingPage">
            //     <Stack.Screen 
            //     options={{headerShown: false}}
            //     name="LandingPage" 
            //     component={LandingPage}/>
            //     <Stack.Screen 
            //     options={{headerShown: false}}
            //     name="SignInScreen" 
            //     component={SignIn}/>
            //     <Stack.Screen 
            //     options={{headerShown: false}}
            //     name="SignUpScreen" 
            //     component={SignUp}/>
            // </Stack.Navigator>
        //     }
        // </View>
    )
}