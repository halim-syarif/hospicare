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
import { registerAsync, setErrorRegister } from '../store/actions';

export default function SignIn({navigation, route}) {
    const errorRegister = useSelector(state => state.patients.errorRegister)
    const loadingRegister = useSelector(state => state.patients.loadingRegister)
    const dispatch = useDispatch()

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    useEffect(() => {
        dispatch(setErrorRegister(''))
    }, [])

    const [data, setData] = useState({
        name: '',
        isValidName: false,
        email: '',
        isValidEmail: false,
        isValidEmailFormat: false,
        password: '',
        isValidPassword: false,
        confirm_password: '',
        isValidConfirmPassword: false,
        age: 0,
        isValidAge: false,
        isValidAgeFormat: false,
        gender: '',
        isValidGender: false,
        address: '',
        isValidAddress: false,
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true
    })

    const textInputChange = (val, key, validKey, validKeyFormat) => {
        if(key === 'name'){
            if(val.trim().length >= 3){
                setData({
                    ...data,
                    [key]: val,
                    [validKey]: true
                })
            } else {
                setData({
                    ...data,
                    [key]: val,
                    [validKey]: false
                })
            }
        }

        else if(key === 'email') {
            if (val.trim().length < 1 ) {
                setData({
                    ...data,
                    [key]: val,
                    [validKey]: false,
                    [validKeyFormat]: false
                })
            } 
            else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)) {
                setData({
                    ...data,
                    [key]: val,
                    [validKey]: true,
                    [validKeyFormat]: false
                })
            }

            else if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)) {
                setData({
                    ...data,
                    [key]: val,
                    [validKey]: true,
                    [validKeyFormat]: true
                })
            }
        }

        else if(key === 'password'){
            if(val.trim().length >= 8){
                setData({
                    ...data,
                    [key]: val,
                    [validKey]: true
                })
            } else {
                setData({
                    ...data,
                    [key]: val,
                    [validKey]: false
                })
            }
        }

        else if(key === 'confirm_password'){
            if(val === data.password){
                setData({
                    ...data,
                    [key]: val,
                    [validKey]: true
                })
            } else {
                setData({
                    ...data,
                    [key]: val,
                    [validKey]: false
                })
            }
        }

        else if(key === 'age'){
            if(+val){
                setData({
                    ...data,
                    [key]: val,
                    [validKeyFormat]: true,
                    [validKey]: true
                })
            }
            else if(val.trim().length < 1 ){
                setData({
                    ...data,
                    [key]: val,
                    [validKey]: false,
                    [validKeyFormat]: true
                })
            }
            else if(!+val){
                setData({
                    ...data,
                    [key]: val,
                    [validKeyFormat]: false,
                    [validKey]: true
                })
            }
        }

        else {
            if(val.trim().length >= 1 ){
                setData({
                    ...data,
                    [key]: val,
                    [validKey]: true,
                })
            } else {
                setData({
                    ...data,
                    [key]: val,
                    [validKey]: false,
                })
            }
        }
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
        if(!data.isValidName || !data.isValidEmail || !data.isValidEmailFormat || !data.isValidPassword || !data.isValidConfirmPassword || !data.isValidAge || !data.isValidAgeFormat || !data.isValidGender || !data.isValidAddress) {
            return null
        } else {
            dispatch(registerAsync(data, navigation))
        }
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
                            onChangeText={(val) => textInputChange(val, 'name', 'isValidName')}
                        />
                        {data.isValidName ? 
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
                {data.isValidName ? null :
                <Animatable.View animation="fadeInLeft" duration={2000}>
                    <Text style={styles.text_footer_error_register_validation}>Name must be at least 3 characters long</Text>
                </Animatable.View>}

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
                            onChangeText={(val) => textInputChange(val, 'email', 'isValidEmail', 'isValidEmailFormat')}
                        />
                        {data.isValidEmail && data.isValidEmailFormat ? 
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
                {data.isValidEmail ? null :
                <Animatable.View animation="fadeInLeft" duration={2000}>
                    <Text style={styles.text_footer_error_register_validation}>email cannot be empty</Text>
                </Animatable.View>}
                {data.isValidEmailFormat ? null :
                <Animatable.View animation="fadeInLeft" duration={2000}>
                    <Text style={styles.text_footer_error_register_validation}>Must be a valid email format</Text>
                </Animatable.View>}

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
                            onChangeText={(val) => textInputChange(val, 'password', 'isValidPassword')}
                        />
                        {data.isValidPassword ? 
                        <Animatable.View
                            animation="bounceIn"
                            style={{paddingRight: 10}}
                            >
                            <Feather
                                name="check-circle"
                                size={20}
                                color="green"
                            />
                        </Animatable.View>
                        : null}
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
                {data.isValidPassword ? null :
                <Animatable.View animation="fadeInLeft" duration={2000}>
                    <Text style={styles.text_footer_error_register_validation}>Password must be at least 8 characters long</Text>
                </Animatable.View>}

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
                            onChangeText={(val) => textInputChange(val, 'confirm_password', 'isValidConfirmPassword')}

                        />
                        {data.isValidConfirmPassword ? 
                        <Animatable.View
                            animation="bounceIn"
                            style={{paddingRight: 10}}
                            >
                            <Feather
                                name="check-circle"
                                size={20}
                                color="green"
                            />
                        </Animatable.View>
                        : null}
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
                {data.isValidConfirmPassword ? null :
                <Animatable.View animation="fadeInLeft" duration={2000}>
                    <Text style={styles.text_footer_error_register_validation}>Password does not match</Text>
                </Animatable.View>}

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
                            onChangeText={(val) => textInputChange(val, 'age', 'isValidAge', 'isValidAgeFormat')}
                        />
                        {data.isValidAge && data.isValidAgeFormat ? 
                        <Animatable.View
                            animation="bounceIn"
                            style={{paddingRight: 10}}
                            >
                            <Feather
                                name="check-circle"
                                size={20}
                                color="green"
                            />
                        </Animatable.View>
                        : null}
                </View>
                {data.isValidAgeFormat ? null :
                <Animatable.View animation="fadeInLeft" duration={2000}>
                    <Text style={styles.text_footer_error_register_validation}>Must be a number</Text>
                </Animatable.View>}
                {data.isValidAge ? null :
                <Animatable.View animation="fadeInLeft" duration={2000}>
                    <Text style={styles.text_footer_error_register_validation}>Age cannot be empty</Text>
                </Animatable.View>}

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
                            onChangeText={(val) => textInputChange(val, 'gender', 'isValidGender')}
                        />
                        {data.isValidGender ? 
                        <Animatable.View
                            animation="bounceIn"
                            style={{paddingRight: 10}}
                            >
                            <Feather
                                name="check-circle"
                                size={20}
                                color="green"
                            />
                        </Animatable.View>
                        : null}
                </View>
                {data.isValidGender ? null :
                <Animatable.View animation="fadeInLeft" duration={2000}>
                    <Text style={styles.text_footer_error_register_validation}>Gender cannot be empty</Text>
                </Animatable.View>}

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
                            onChangeText={(val) => textInputChange(val, 'address', 'isValidAddress')}
                        />
                        {data.isValidAddress ? 
                        <Animatable.View
                            animation="bounceIn"
                            style={{paddingRight: 10}}
                            >
                            <Feather
                                name="check-circle"
                                size={20}
                                color="green"
                            />
                        </Animatable.View>
                        : null}
                </View>
                {data.isValidAddress ? null :
                <Animatable.View animation="fadeInLeft" duration={2000}>
                    <Text style={styles.text_footer_error_register_validation}>Address cannot be empty</Text>
                </Animatable.View>}

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

    text_footer_error_register_validation: {
        color: 'red',
        fontSize: 15,
        marginTop: 5,
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