import React, { useState } from 'react'
import { 
    ActivityIndicator, 
    Button, 
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    TextInput, 
    TouchableOpacity,
    Dimensions
} from 'react-native';
import HeaderComponent from './headerComponent';
import * as Animatable from 'react-native-animatable'
// import { Button, } from 'react-native-elements';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Feather } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { loginAsync, setErrorLogin } from '../store/actions';
import {LinearGradient} from 'expo-linear-gradient'


//Drop down untuk tanggal poli 
//Poli id dan name di hardcode


//setelah book appointment ada detail nomor antrian 


const { height } = Dimensions.get("screen")
export default function ScheduleCards({schedules, isLoading, error, navigation}){
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



    async function bookAppointment(id, name){
        navigation.navigate('ScheduleBooking', {
            id, name
        })
    }

    const priceFormat = (price) => {
        const formattedPrice = `Rp ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
        return formattedPrice
    }

    return (
        <View style={styles.container}>
			{
			isLoading ? 
                <ActivityIndicator style={styles.loading} size="small" color="#0000ff"/> :  
                    <FlatList
                        // numColumns={2}
                        horizontal={false}
                        data={schedules}
                        renderItem={({item}) => 
                            (
                                schedules.length == 0 ?
                                <View >
                                    <Text style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>No data yet, input your preferences</Text> 
                                </View> :
                                    //Gatau kenapa gak muncul
                                    <View style={styles.footer_container}>
                                        <View style={styles.card_top}>
                                            <View>
                                                <Text>Saturday</Text>
                                                <Text>Day</Text>
                                            </View>
                                            <View>
                                                <Text>Kebidanan</Text>
                                                <Text>Poli Name</Text>
                                            </View>
                                        </View>
                                        <View style={styles.card_bottom}>
                                            <View style={styles.card_bottom_top}>
                                                <View>
                                                    <Text>Employee Name</Text>
                                                    <Text>Nama Lengkap</Text>
                                                </View>
                                                <View>
                                                    <Text>Booking Limit</Text>
                                                    <Text>5/10</Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Text>Operational Hours</Text>
                                                <Text>Start</Text>
                                                <Text>End</Text>
                                            </View>
                                            <View>
                                                <Text>Price</Text>
                                                <Text>Rp 70.000</Text>
                                            </View>
                                        </View>
                                    </View>
                            )
                        }
                        keyExtractor={item => item.id.toString()}
                    />
                }
        </View>
        
    )
}

const styles = StyleSheet.create({
    // loading: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: '100%'
    // },

    footer_container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 7
    },

    card_top: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingBottom: 5
    },

    card_bottom: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
    },

    card_bottom_top: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingBottom: 5
    },

    container: {
        width: '100%',
        height: '100%',
    },
});


{/* <View style={styles.containers}>
                                        <View style={styles.box}>
                                            <View style={{paddingVertical: 5}}>
                                                <Text>Day {item?.Day?.name}</Text>
                                                <Text>Poli Name {item?.Employee?.Poli?.name}</Text>
                                                <Text>Employee Name {item?.Employee?.name}</Text>
                                                <Text>Booking Limit {item?.booking_limit}</Text>
                                                <Text>Start Hour {item?.start_hour}</Text>
                                                <Text>End Hour {item?.end_hour}</Text>
                                                <Text>Price {priceFormat(item?.price)}</Text>
                                                <Button
                                                    title="Book Appointment"
                                                    type="outline"
                                                    raised="true"
                                                    titleStyle={{color: '#0F430E'}}
                                                    onPress={() => bookAppointment(item.id, item.Employee.name)}
                                                />
                                            </View>
                                        </View>
                                    </View> */}
