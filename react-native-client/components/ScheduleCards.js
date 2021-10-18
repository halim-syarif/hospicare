import React from 'react'
import { 
    ActivityIndicator, 
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { setDoctorScheduleId } from '../store/actions';

//Drop down untuk tanggal poli 
//Poli id dan name di hardcode

//setelah book appointment ada detail nomor antrian 

export default function ScheduleCards({schedules, isLoading, error, navigation}){
    const dispatch = useDispatch()
    async function bookAppointment(id, name){
        dispatch(setDoctorScheduleId(id))
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
                                                <Text style={styles.card_top_title}>{item?.Day?.name}</Text>
                                                <Text>Day</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.card_top_title}>{item?.Employee?.Poli?.name}</Text>
                                                <Text style={styles.card_top_poli_name}>Poli Name</Text>
                                            </View>
                                        </View>
                                        <View style={styles.card_bottom}>
                                            <View style={styles.card_bottom_top}>
                                                <View style={styles.card_bottom_employee}> 
                                                    <View style={styles.card_wrapper}>
                                                        <Text style={styles.inner_card_wrapper}>Employee Name</Text>
                                                    </View>
                                                    <View style={styles.card__bottom_employee_name}>
                                                        <Text style={styles.card_bottom_employee_name_text}>{item?.Employee?.name}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.card_bottom_booking_limit}>
                                                    <View style={styles.card_wrapper}>
                                                        <Text style={styles.inner_card_wrapper}>Booking Limit</Text>
                                                    </View>
                                                    <Text>5/{item?.booking_limit}</Text>
                                                </View>
                                            </View>
                                            <View style={{flex:1, flexDirection: 'row'}}>
                                                <View>
                                                    <View>
                                                        <View style={styles.card_wrapper}>
                                                            <Text style={styles.inner_card_wrapper}>Operational Hours</Text>
                                                        </View>
                                                        <View style={styles.card_bottom_content}>
                                                            <Text>Start {item?.start_hour}</Text>
                                                            <Text>End {item?.end_hour}</Text>
                                                        </View>
                                                    </View>
                                                    <View>
                                                        <View style={styles.card_wrapper}>
                                                            <Text style={styles.inner_card_wrapper}>Price</Text>
                                                        </View>
                                                        <View style={styles.card_bottom_content}>
                                                            <Text>{priceFormat(item?.price)}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={styles.card_bottom_booking}>
                                                    <TouchableOpacity 
                                                        style={styles.card_bottom_booking_button}
                                                        onPress={() => bookAppointment(item.id, item.Employee.name)}>
                                                        <Text style={styles.card_bottom_booking_text}>Book appointment</Text>
                                                    </TouchableOpacity>
                                                </View>
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
        // shadowRadius: 20
    },

    card_top: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingBottom: 10
    },

    card_top_title: {
        fontSize: 25,
        fontWeight: '900'
    },

    card_top_poli_name: {
        textAlign: 'right'
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

    card_wrapper: {
        backgroundColor: '#009387',
        marginTop: 15,
        width: 130,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40
    },

    inner_card_wrapper: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#fff',
    },

    card_bottom_content: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },

    card_bottom_employee: {
        flex: 1,
        width: 20,
        paddingRight: 10
    },

    card__bottom_employee_name: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10
    },

    card_bottom_employee_name_text: {
        fontWeight: 'bold'
    },

    card_bottom_booking_limit: {
        alignItems: 'center'
    },

    card_bottom_booking: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    card_bottom_booking_button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#009387',
        height: 50,
        width: 150,
        borderRadius: 30
    },

    card_bottom_booking_text: {
        color: '#fff'
    },

    container: {
        width: '100%',
        height: '100%',
    },
});
