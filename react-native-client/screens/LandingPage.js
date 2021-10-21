import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import {LinearGradient} from 'expo-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import StatusBarLight from '../components/StatusBarLight'

const { height } = Dimensions.get("screen")
const height_logo = height * 0.28

export default function LandingPage({navigation}){
 return (
    <View style={styles.container}>
        <StatusBarLight/>
        <View style={styles.header}>
            <Animatable.Image
                animation="bounceIn"
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode="stretch"
            />
        </View>
        <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig"
        >
            <Text style={styles.title}>The Official Hospicare App</Text>
            <Text style={styles.text}>We will help you to find the best doctors and appointment schedule best suited for you. </Text>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
                    <LinearGradient
                        colors={['#08d4c4', '#01ab9d']}
                        style={styles.signIn}
                    >
                        <Text style={styles.textSign}>Get Started</Text>
                        <MaterialIcons
                            name="navigate-next"
                            color="#fff"
                            size={20}
                        />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </Animatable.View>
        
    </View>
 )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },

    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    footer: {
        flex: 0.4,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },

    logo: {
        height: height_logo,
        width: height_logo
    },

    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },

    text: {
        alignItems: 'flex-end',
        marginTop: 10,
    },

    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },

    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },

    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
})