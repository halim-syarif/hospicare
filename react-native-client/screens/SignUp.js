import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Platform,
    TextInput,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    FlatList,
    LogBox,
    ActivityIndicator
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import * as Animatable from 'react-native-animatable'
import {LinearGradient} from 'expo-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Feather } from '@expo/vector-icons'
import { registerAsync } from '../store/actions';

export default function SignIn({navigation, route}) {
    const errorRegister = useSelector(state => state.patients.errorRegister)
    const loadingRegister = useSelector(state => state.patients.loadingRegister)
    const dispatch = useDispatch()

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
        age: 0,
        gender: '',
        address: '',
        imgUrl: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true
    })

    const textInputChange = (val) => {
        if(val.length !== 0){
            setData({
                ...data,
                name: val,
                check_textInputChange: true
            })
        } else {
            setData({
                ...data,
                name: val,
                check_textInputChange: false
            })
        }
    }

    const handleChange = (val, key) => {
        setData({
            ...data,
            [key]: val
        })
    }

    const handleSignUp = () => {
        delete data.check_textInputChange
        delete data.confirm_secureTextEntry
        delete data.secureTextEntry
        delete data.confirm_password
        setData({
            ...data,
            secureTextEntry: true,
            confirm_secureTextEntry: true
        })
        dispatch(registerAsync(data, navigation))
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        })
    }

    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle='light-content'/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now</Text>
            </View>

            <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig">
                <Text style={styles.text_footer}>Name</Text>
                <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color='#05375a'
                            size={20}
                        /> 
                        <TextInput
                            placeholder="Your Full name"
                            style={styles.textInput}
                            value={data.name}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                        />
                        {data.check_textInputChange ? 
                        <Animatable.View
                            animation="bounceIn"
                            >
                            <Feather
                                name="check-circle"
                                size={20}
                                color="green"
                            />
                        </Animatable.View>
                        : null}
                </View>

                <Text style={styles.text_footer_below}>Email</Text>
                <View style={styles.action}>
                        <FontAwesome
                            name="envelope"
                            color='#05375a'
                            size={20}
                        /> 
                        <TextInput
                            placeholder="Your Email"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleChange(val, 'email')}
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
                            placeholder="Your Password"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleChange(val, 'password')}

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

                <Text style={styles.text_footer_below}>Confirm Password</Text>
                <View style={styles.action}>
                        <FontAwesome
                            name="lock"
                            color='#05375a'
                            size={20}
                        /> 
                        <TextInput
                            placeholder="Confirm Your Password"
                            secureTextEntry={data.confirm_secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleChange(val, 'confirm_password')}

                        />
                        <TouchableOpacity
                            onPress={updateConfirmSecureTextEntry}
                        >
                            {data.confirm_secureTextEntry ? 
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

                <Text style={styles.text_footer_below}>Age</Text>
                <View style={styles.action}>
                        <FontAwesome
                            name="birthday-cake"
                            color='#05375a'
                            size={20}
                        /> 
                        <TextInput
                            placeholder="Your Current Age"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleChange(val, 'age')}
                        />
                </View>

                <Text style={styles.text_footer_below}>Gender</Text>
                <View style={styles.action}>
                        <FontAwesome
                            name="venus-mars"
                            color='#05375a'
                            size={20}
                        /> 
                        <TextInput
                            placeholder="Your Gender (You can put anything you want)"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleChange(val, 'gender')}
                        />
                </View>

                <Text style={styles.text_footer_below}>Address</Text>
                <View style={styles.action}>
                        <FontAwesome
                            name="address-card"
                            color='#05375a'
                            size={20}
                        /> 
                        <TextInput
                            placeholder="Your Complete Address"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleChange(val, 'address')}
                        />
                </View>

                {errorRegister ? 
                    <FlatList
                    numColumns={2}
                    horizontal={false}
                    data={errorRegister}
                    renderItem={({item}) => 
                        (
                            <Text style={styles.text_footer_error_register}>{item}</Text>
                        )
                    }
                    keyExtractor={item => item}
                />
                : null}
                

                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={handleSignUp}
                        style={styles.signUp}
                        >
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            {loadingRegister ? 
                            <ActivityIndicator style={styles.loading} size="small" color="#0000ff"/> :
                            <Text style={styles.textSign}>Sign Up</Text>}
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignInScreen')}
                        style={styles.signUp}
                    >
                        <Text style={styles.textSignUp}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </ScrollView>
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

    text_footer_error_register: {
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