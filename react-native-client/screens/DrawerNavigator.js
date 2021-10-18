import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen options={{headerShown: false}} name="Tab" component={TabNavigator}/>
        </Drawer.Navigator>
    )
}