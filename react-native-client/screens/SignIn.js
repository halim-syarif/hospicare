import React, { useState, useEffect, useCallback } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Platform,
    TextInput,
    TouchableOpacity,
    StatusBar,
    ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useFocusEffect } from '@react-navigation/native'

import {LinearGradient} from 'expo-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Feather } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { loginAsync, setErrorLogin } from '../store/actions';


export default function SignIn({navigation, route}) {
    const errorLogin = useSelector(state => state.patients.errorLogin)
    const loadingLogin = useSelector(state => state.patients.loadingLogin)
    const dispatch = useDispatch()
    const [data, setData] = useState({
        email: '',
        password: '',
        secureTextEntry: true,
        check_textInputChange: false
    })

    const textInputChange = (val) => {
        if(val.length !== 0){
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            })
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    function handleSignIn() {
        delete data.secureTextEntry
        delete data.check_textInputChange
        setData({
            ...data,
            secureTextEntry: true
        })
        dispatch(loginAsync(data))
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle='light-content'/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome</Text>
            </View>
            <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig">
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                        <FontAwesome
                            name="envelope"
                            color='#05375a'
                            size={20}
                        /> 
                        <TextInput
                            placeholder="Your email"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                        />
                </View>
                <Text style={styles.text_footer_below}>Password</Text>
                <View style={styles.action}>
                        <FontAwesome
                            name="lock"
                            color='#05375a'
                            size={20}
                        /> 
                        <TextInput
                            placeholder="Your password"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}

                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ? 
                            <Feather
                                name="eye-off"
                                size={20}
                                color="grey"
                            />
                            : <Feather
                            name="eye"
                            size={20}
                            color="grey"
                        />}
                        </TouchableOpacity>
                </View>
                {errorLogin ? <Text style={styles.text_footer_error_login}>{errorLogin}</Text> : null }
                <View style={styles.button}>
                <TouchableOpacity
                        onPress={handleSignIn}
                        style={styles.signUp}
                        >
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            {loadingLogin ? 
                            <ActivityIndicator style={styles.loading} size="small" color="#0000ff"/> :
                            <Text style={styles.textSign}>Sign In</Text>}
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}
                        style={styles.signUp}
                    >
                        <Text style={styles.textSignUp}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },

    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },

    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },

    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },

    text_footer: {
        color: '#05375a',
        fontSize: 18
    },

    text_footer_below: {
        color: '#05375a',
        fontSize: 18,
        marginTop: 35
    },

    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },

    text_footer_error_login: {
        color: 'red',
        fontSize: 15,
        marginTop: 35,
        paddingLeft: 5
    },
    
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },

    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
    },

    button: {
        alignItems: 'center',
        marginTop: 50
    },

    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },

    signUp: {
        borderColor: '#009387',
        borderWidth: 1,
        marginTop: 15,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },

    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },

    textSignUp: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#009387',
    }
})