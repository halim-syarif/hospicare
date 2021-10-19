import React from 'react'
import { 
    View, 
    StyleSheet 
} from 'react-native'
import { 
    DrawerContentScrollView, 
    DrawerItem 
} from '@react-navigation/drawer'
import {
    Avatar,
    Title,
    Caption,
    Drawer,
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Foundation } from 'react-native-vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { deletePatientData } from '../store/actions'
 
export default function DrawerContent(props){
    const dispatch = useDispatch()
    const imgUrl = useSelector(state => state.patients.imgUrl) || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    const name = useSelector(state => state.patients.name) || "Patient_Name"
    const email = useSelector(state => state.patients.email) || "Patient_Email"
    
    const signOut = () => {
        dispatch(deletePatientData())
    }

    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.userInfoWrapper}>
                            <Avatar.Image
                            source={{
                                uri:imgUrl
                            }}
                            size={50}
                        />
                        <View style={styles.userInfoDetail}>
                            <Title style={styles.title}>{name}</Title>
                            <Caption style={styles.caption}>{email}</Caption>
                        </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="calendar"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Schedules"
                            onPress={() => {props.navigation.navigate('Schedule')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Foundation
                                    name="clipboard-notes"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="History"
                            onPress={() => {props.navigation.navigate('History')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={signOut}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },

    userInfoSection: {
        paddingLeft: 20
    },

    userInfoWrapper: {
        flexDirection: 'row',
        marginTop: 15
    }, 

    userInfoDetail: {
        marginLeft: 15,
        flexDirection: 'column'
    },

    title: {
        fontSize: 16,
        paddingTop: 3,
        fontWeight: 'bold'
    },

    caption: {
        fontSize: 14,
        lineHeight: 14
    },

    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },

    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },

    paragaph: {
        fontWeight: 'bold',
        marginRight: 3,
    },

    drawerSection: {
        marginTop: 15
    },

    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth:  1
    },

    preferences: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
})