import React, { useState  } from 'react'
import { useDispatch } from 'react-redux';
import { ActivityIndicator, Button, View, Text, StyleSheet, FlatList, Picker, ImageBackground, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from "@react-native-community/datetimepicker";
import { Feather } from '@expo/vector-icons'
import { scheduleAsync } from '../store/actions'

export default function HeaderComponent(){
    const dispatch = useDispatch()
    const [data, setData] = useState({
        poliid: 1,
        dayid: 0,
        date: new Date(1598051730000),
        show: false,
        fullDate: '00/00/00'
    })
    const [mode, setMode] = useState(data.date)

    const handleChange = (itemValue) => {
        setData({
            ...data,
            poliid : itemValue
        })
    }
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || data.date;
        setData({
            ...data, 
            date: currentDate,
            show: Platform.OS === 'ios',
            dayid: currentDate.getDay(),
            fullDate: `${selectedDate.getDate()}/${selectedDate.getMonth()}/${selectedDate.getYear()}`
        })
    };

    const search = () => {
        dispatch(scheduleAsync(data.poliid, data.dayid))
    }
    
    const showMode = (currentMode) => {
        setData({
            ...data,
            show: true
        });
        setMode({currentMode});
    };

    const showDateTimePicker = () => {
        setData({
            ...data,
            show: true
        })
    }

    const unShow = () => {
        setData({
            ...data,
            show: false
        })
    }
    
    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };


    return (
        <View style={{flex: 1}}>

            <View style={{flex:1, flexDirection: 'row'}}>
                <View style={{flex: 0.5, justifyContent: 'center', }}>
                    <Picker
                        selectedValue={data.poliid}
                        onValueChange={(itemValue) => handleChange(itemValue)}>
                        <Picker.Item label='Kebidanan' value={1}/>
                        <Picker.Item label='Anak' value={2}/>
                        <Picker.Item label='Jantung' value={3}/>
                        <Picker.Item label='Bedah Umum' value={4}/>
                        <Picker.Item label='Mata' value={5}/>
                        <Picker.Item label='Kulit dan Kelamin' value={6}/>
                        <Picker.Item label='Penyakit Dalam' value={7}/>
                        <Picker.Item label='THT' value={8}/>
                        <Picker.Item label='Umum' value={9}/>
                    </Picker>
                </View>
                <View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity
                        onPress={showDateTimePicker}
                    >
                        
                        <Feather
                            name="calendar"
                            size={20}
                            color="grey"
                        />
                    </TouchableOpacity>
                    <Text>{data.fullDate}</Text>
                    {data.show 
                    ? <DateTimePicker
                        testID="dateTimePicker"
                        value={data.date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        onTouchCancel={unShow}
                        onTouchEnd={unShow}
                    /> 
                    : null}
                    
                </View>
                <View style={{ padding: 10}}>
                    <Button
                        title="Search"
                        onPress={search}
                    />
                </View>
            </View>
        </View>
    )
}