import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from 'react-native-vector-icons';
import Home from './Home';
import About from './About'
import Schedule from './Schedule';
import History from './History';

const Tab = createBottomTabNavigator()

export default function TabNavigator({navigation}){
    return (
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

                    else if (route.name === 'History') {
                    iconName = focused 
                        ? 'ios-clipboard' 
                        : 'ios-clipboard-outline';
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
                    }}
                    component={Schedule}/>
                <Tab.Screen name="History" options={{headerShown: false}} component={History}/>
                <Tab.Screen name="About" component={About}/>
            </Tab.Navigator>
    )
}