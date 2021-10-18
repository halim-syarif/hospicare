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
import { createBookingAsync, registerAsync, setErrorRegister } from '../store/actions';

export default function SignIn({navigation, route}) {
    const errorRegister = useSelector(state => state.patients.errorRegister)
    const loadingRegister = useSelector(state => state.patients.loadingRegister)
    const DoctorScheduleId = useSelector(state => state.booking.doctorScheduleId)
    const booking_date = useSelector(state => state.booking.bookingDate)
    // const PatientId = useSelector(state => state.patient.id) || 1
    const dispatch = useDispatch()

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    useEffect(() => {
        dispatch(setErrorRegister(''))
    }, [])

    const [data, setData] = useState({
        keluhan: '',
        isValidSymptoms: false,
        
    })

    const textInputChange = (val, key, validKey) => {
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

    const handleBooking = () => {
        const payload = {
            PatientId: 1,
            DoctorScheduleId,
            booking_date,
            keluhan: data.keluhan
        }
        if(!data.isValidSymptoms){
            return null
        } else {
            dispatch(createBookingAsync(payload))
        }
    }

    

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle='light-content'/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Book Your Appointment</Text>
            </View>

            <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig">
                <Text style={styles.text_footer}>Symptoms</Text>
                <View style={styles.action}>
                        <FontAwesome
                            name="medkit"
                            color='#05375a'
                            size={20}
                        /> 
                        <TextInput
                            placeholder="Enter Any Symptomps That You Might be Having"
                            style={styles.textInput}
                            value={data.keluhan}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val, 'keluhan', 'isValidSymptoms')}
                        />
                        {data.isValidSymptoms ? 
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
                {data.isValidSymptoms ? null :
                <Animatable.View animation="fadeInLeft" duration={1000}>
                    <Text style={styles.text_footer_error_register_validation}>Symptoms cannot be empty</Text>
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
                        onPress={handleBooking}
                        style={styles.signUp}
                        >
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            {loadingRegister ? 
                            <ActivityIndicator style={styles.loading} size="small" color="#0000ff"/> :
                            <Text style={styles.textSign}>Create Appointment</Text>}
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