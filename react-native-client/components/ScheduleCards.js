import React from 'react'
import { 
    ActivityIndicator, 
    View, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity,
} from 'react-native';

import {
    Avatar,
    Text,
} from 'react-native-paper'

import { useDispatch, useSelector } from 'react-redux';
import { setDoctorScheduleId } from '../store/actions';
import { Feather } from '@expo/vector-icons'
import { priceFormat } from '../helpers/priceFormat';


//Drop down untuk tanggal poli 
//Poli id dan name di hardcode

//setelah book appointment ada detail nomor antrian 

export default function ScheduleCards({schedules, isLoading, error, navigation}){
    const imgUrl = useSelector(state => state.employees?.imgUrl) || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"

    const dispatch = useDispatch()
    async function bookAppointment(id, name){
        dispatch(setDoctorScheduleId(id))
        navigation.navigate('ScheduleBooking', {
            id, name
        })
    }

    return (
        <View style={styles.container}>
			{
            schedules.length == 0 ?
                <View  style={styles.footer_container} >
                    <Text style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>No data yet, input your preferences</Text> 
                </View> 
                :
			isLoading ? 
                <ActivityIndicator style={styles.loading} size="small" color="#0000ff"/> :  
                    <FlatList
                        horizontal={false}
                        data={schedules}
                        renderItem={({item}) => 
                            (
                                <TouchableOpacity
                                    onPress={() => bookAppointment(item.id, item.Employee.name)}
                                    style={styles.footer_container}
                                    >
                                    <View style={styles.activeCard}>
                                        <View style={styles.card_top}>
                                            <Avatar.Image
                                                source={{
                                                    uri:imgUrl
                                                }}
                                                size={50}/>
                                            <View style={styles.card_top_profile}>
                                                <Text style={styles.card_top_employee_name_text}>{item?.Employee?.name}</Text>
                                                <View style={styles.card_top_availability}>
                                                    <Feather
                                                        name="check-circle"
                                                        size={20}
                                                        color="green"
                                                        style={{paddingRight: 5}}
                                                    />
                                                    <Text>Tersedia hari ini (Rumah Sakit Soliam)</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View
                                            style={styles.card_line}/>
                                        <View style={styles.card_bottom}>
                                            <View style={styles.card_bottom_time_detail}>
                                                <Text style={styles.card_bottom_text}>{item?.Day?.name}</Text>
                                                <View style={styles.card_bottom_hour}>
                                                    <View style={{paddingRight: 10}}>
                                                        <Text style={styles.card_bottom_text}>Start Hour</Text>
                                                        <Text style={styles.card_bottom_text}>End Hour</Text>
                                                    </View>
                                                    <View>
                                                        <Text >{item?.start_hour}</Text>
                                                        <Text >{item?.end_hour}</Text> 
                                                    </View>   
                                                </View>
                                            </View>
                                            <View style={styles.card_bottom_price}>
                                                <Text style={styles.card_bottom_text}>Price</Text>
                                                <Text >{priceFormat(item?.price)}</Text>
                                            </View>
                                            
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                
                            )
                        }
                        keyExtractor={item => item.id.toString()}
                    />
                }
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },

    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },

    footer_container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 7,
        elevation: 10
    },

    activeCard: {
        marginTop: 10,
        width: '100%',
        marginHorizontal: 3,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5,
        marginBottom: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderWidth: 1,
        borderColor: "#009387"
      },

    card_top: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        paddingBottom: 10
    },

    card_top_employee_name_text: {
        fontWeight: 'bold',
        width: '92%'
    },

    card_top_profile: {
        paddingLeft: 10
    },

    card_top_availability: {
        flexDirection: 'row',
        paddingTop: 5
    },

    card_line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },

    card_bottom: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        paddingTop: 10
    },

    card_bottom_time_detail: {
        flexDirection: 'column'
    },

    card_bottom_text: {
        textAlign: 'center', 
        fontWeight: 'bold'
    },

    card_bottom_hour: {
        flexDirection: 'row',
    },

    card_bottom_price: {
        flexDirection: 'column'
    },

});