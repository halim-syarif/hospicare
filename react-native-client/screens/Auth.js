import React from 'react';
import { 
    View, 
} from 'react-native';
import { useSelector } from 'react-redux'
import DrawerNavigator from './DrawerNavigator';
import StackNavigator from './StackNavigator';


export default function Auth(){
    const access_token = useSelector(state => state.patients.access_token)
    return (
        // <View style={{flex: 1}}>
        //     {access_token ? 
        <>
            {/* <Tab.Navigator 
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
            </Tab.Navigator>  */}
            <DrawerNavigator/>
        </>
        //     : 
        //     <StackNavigator/>
        //     }
        // </View>
    )
}