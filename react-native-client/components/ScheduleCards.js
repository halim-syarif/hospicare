import React, { useState } from 'react'
import { ActivityIndicator, Button, View, Text, StyleSheet, FlatList } from 'react-native';
import HeaderComponent from './headerComponent';
// import { Button, } from 'react-native-elements';

//Drop down untuk tanggal poli 
//Poli id dan name di hardcode


//setelah book appointment ada detail nomor antrian 


export default function ScheduleCards({schedules, isLoading, error, navigation}){
    async function handleDetail(id, name){
        navigation.navigate('MovieDetail', {
            id, name
        })
    }

    return (
        <View style={styles.container}>
			{
			isLoading ? 
                <ActivityIndicator style={styles.loading} size="small" color="#0000ff"/> :  
				<FlatList
					numColumns={2}
                    ListHeaderComponent={HeaderComponent(schedules)}
					horizontal={false}
					data={schedules}
					renderItem={({item}) => 
						(
                            schedules.length == 0 ?
                                <Text style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>No data yet, input your preferences</Text> :
                                //Gatau kenapa gak muncul
							<View style={styles.containers}>
								<View style={styles.box}>
									<View style={{paddingVertical: 5}}>
                                        <Text>{item?.day?.name}</Text>
                                        <Text>{item?.Employee?.Poli?.name}</Text>
                                        <Text>{item?.Employee?.name}</Text>
                                        <Text>{item?.booking_limit}</Text>
                                        <Text>{item?.start_hour}</Text>
                                        <Text>{item?.end_hour}</Text>
                                        <Text>{item?.price}</Text>
										<Button
											title="Book Appointment"
											type="outline"
											raised="true"
											titleStyle={{color: '#0F430E'}}
											onPress={() => handleDetail(item.id, item.title)}
										/>
									</View>
								</View>
							</View>
						)
					}
					keyExtractor={item => item.id.toString()}
				/>}
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

    container: {
        width: '100%',
        height: '100%',
    },

    containers: {
        height: 350,
        width: '50%',
        padding: 5,
    },

    box: {
        width: '100%',
        height: '100%',
        padding: 5,
    },

	image: {
		flex: 1,
		justifyContent: "center"
    },
});



