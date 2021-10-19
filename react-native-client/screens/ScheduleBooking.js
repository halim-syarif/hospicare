import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Platform,
    TextInput,
    TouchableOpacity,
    StatusBar,
    FlatList,
    LogBox,
    ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import * as Animatable from 'react-native-animatable'
import {LinearGradient} from 'expo-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Feather } from '@expo/vector-icons'
import Modal from "react-native-modal";
import { createBookingAsync, setErrorBooking } from '../store/actions';
import { StackActions, } from '@react-navigation/native';

export default function SignIn({navigation, route}) {
    const errorBooking = useSelector(state => state.booking.errorBooking)
    const loadingBooking = useSelector(state => state.booking.loadingBooking)
    const DoctorScheduleId = useSelector(state => state.booking.doctorScheduleId)
    const booking_date = useSelector(state => state.booking.bookingDate)
    const PatientId = useSelector(state => state.patient?.id) || 1
    const dispatch = useDispatch()

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    useEffect(() => {
        dispatch(setErrorBooking(''))
    }, [])

    const [data, setData] = useState({
        keluhan: '',
        isValidSymptoms: false,
        modalData: '',
        isModalVisible: false
        
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

    const handleBooking = async () => {
        const payload = {
            PatientId,
            DoctorScheduleId,
            booking_date,
            keluhan: data.keluhan
        }
        if(!data.isValidSymptoms){
            return null
        } else {
            dispatch(createBookingAsync(payload))
        }
        openModal()
    }

    function openModal(value) {
        setData({
            ...data,
            isModalVisible: true,
            modalData: value

        });
      }

      function goToHistory(){
        navigation.dispatch(
            StackActions.popToTop()
        )
        navigation.navigate("History")
      }

    

    return (
        <View style={styles.container}>
            <Modal
                animationIn="fadeIn"
                isVisible={data.isModalVisible}
                animationType="slide"
                animationInTiming={1000}
                animationOutTiming={1000}

            >
                <View style={styles.modalView}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalHeaderText}>Information</Text>
                    </View> 
                    <View style={styles.modalContent}>
                        <Text style={styles.modalContentText}>You have successfully bookeed your appointment click the button belom to see your booking history </Text>
                        <TouchableOpacity 
                            onPress={() => goToHistory()}
                            style={styles.closeModal}
                        >
                            <Text>History</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

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
                            placeholder="Enter any symptomps that you might be having"
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
                    <Text style={styles.text_footer_error_booking_validation}>Symptoms cannot be empty</Text>
                </Animatable.View>}

                {errorBooking ? 
                    <FlatList
                    numColumns={2}
                    horizontal={false}
                    data={errorRegister}
                    renderItem={({item}) => 
                        (
                            <Text style={styles.text_footer_error_booking}>{item}</Text>
                        )
                    }
                    keyExtractor={item => item}
                />
                : null}
                

                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={handleBooking}
                        style={styles.createAppointment}
                        >
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            {loadingBooking ? 
                            <ActivityIndicator style={styles.loading} size="small" color="#0000ff"/> :
                            <Text style={styles.textCreateAppointment}>Create Appointment</Text>}
                        </LinearGradient>
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

    modalView: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        width: "100%",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },

    modalHeader: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        marginBottom: 30,
      },

    modalHeaderText: {
        fontSize: 25,
        fontWeight: 'bold'
    },

    modalContent: {
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      },

    modalContentText: {
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
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

    text_footer_error_booking: {
        color: 'red',
        fontSize: 15,
        marginTop: 35,
        paddingLeft: 5
    },

    text_footer_error_booking_validation: {
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

    createAppointment: {
        borderColor: '#009387',
        borderWidth: 1,
        marginTop: 15,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },

    closeModal: {
        borderColor: '#009387',
        borderWidth: 1,
        marginTop: 15,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },

    textCreateAppointment: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
})