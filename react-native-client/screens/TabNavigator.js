import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons'

import Home from './Home';
import About from './About'
import Schedule from './Schedule';
import History from './History';

const Tab = createBottomTabNavigator()

export default function TabNavigator({navigation}){
    return (
        <Tab.Navigator 
            initialRouteName="Schedule"
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

                    else if (route.name === 'History') {
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
                <Tab.Screen 
                    name="Schedule" 
                    options={{
                        headerShown: false
                        // headerLeft: () => (
                        //     <Icon.Button 
                        //         name="ios-menu" 
                        //         size={25}
                        //         backgroundColor="#009387"
                        //         onPress={() => {navigation.openDrawer()}}/>
                        // ),
                        // headerStyle: {
                        //     backgroundColor: "#009387",
                        // },
                        // headerTintColor: '#fff'
                    }}
                    component={Schedule}/>
                <Tab.Screen name="History" options={{headerShown: false}} component={History}/>
                <Tab.Screen name="About" component={About}/>
            </Tab.Navigator>
    )
}