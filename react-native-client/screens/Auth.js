import React from 'react';
import { 
    View, 
} from 'react-native';
import { useSelector } from 'react-redux'
import DrawerNavigator from './DrawerNavigator';
import StackNavigator from './StackNavigator';
import TabNavigator from './TabNavigator';


export default function Auth(){
    const access_token = useSelector(state => state.patients.access_token)
    return (
        // <View style={{flex: 1}}>
        //     {access_token ? 
            <DrawerNavigator/>
            // : 
            // <StackNavigator/>
        //     }
        // </View>
    )
}