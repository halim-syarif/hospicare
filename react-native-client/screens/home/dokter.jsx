import React, { useEffect } from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import StatusBarLight from '../../components/StatusBarLight';
import { allDoctorsAsync, scheduleByDoctorName } from '../../store/actions';
import {
    Avatar,
    Text,
} from 'react-native-paper'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Dokter({navigation, route}) {
  const imgUrl = useSelector(state => state.employees?.imgUrl) || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"

  const doctors = useSelector(state => state.doctors.allDoctors)
  const isLoading = useSelector(state => state.doctors.allDoctorsIsLoading)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(allDoctorsAsync())
  }, [])

  const searchByName = (name) => {
    dispatch(scheduleByDoctorName(name))
    navigation.navigate('Schedule')
  }

    return (
        <View style={styles.container}>
            <StatusBarLight/>
            {
                isLoading ?
                <ActivityIndicator size="small" color="#0000ff"/> :  
                <FlatList
                    data={doctors}
                    style={styles.flatList}
                    renderItem={({item}) => 
                    (
                        <TouchableOpacity
                            onPress={() => searchByName(item.name)}
                        >
                            <View style={styles.flatListItems}>
                                <View style={styles.card}>
                                    <View style={styles.avatar}>
                                        <Avatar.Image
                                            source={{
                                                uri:imgUrl
                                            }}
                                            size={50}
                                        />
                                    </View>
                                    <View style={styles.card_profile}>
                                        <Text style={styles.card_employee_name_text}>{item.name}</Text>
                                        <View style={styles.card_availability}>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    flatList: {
        width: '100%',
    },

    flatListItems: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
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
    card: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        paddingBottom: 10
    },

    avatar: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    card_employee_name_text: {
        fontWeight: 'bold',
        width: '90%'
    },

    card_profile: {
        paddingLeft: 10
    },

    card_availability: {
        flexDirection: 'row',
        paddingTop: 5
    },
})