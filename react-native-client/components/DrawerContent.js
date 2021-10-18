import React from 'react'
import { View, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import {
    Drawer,
    Text,
} from 'react-native-paper'
 
export default function DrawerContent(props){
    function handleFilter(genreId){
        const { navigation } = props
        navigation.navigate('FilteredMovies', {genreId})
    }

    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View >
                            <Text style={styles.title}>Genre</Text>
                        </View>
                    </View>
                    <Drawer.Section>
                        <DrawerItem
                            label='Action'
                            onPress={() => handleFilter(1)}
                        />
                        <DrawerItem
                            label='Comedy'
                            onPress={() => handleFilter(2)}
                        />
                        <DrawerItem
                            label='Romance'
                            onPress={() => handleFilter(3)}
                        />
                        <DrawerItem
                            label='Science Fiction'
                            onPress={() => handleFilter(4)}
                        />
                        <DrawerItem
                            label='War'
                            onPress={() => handleFilter(5)}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },

    userInfoSection: {
        paddingLeft: 20
    },

    title: {
        fontSize: 20,
        paddingTop: 3,
        fontWeight: 'bold'
    },
})