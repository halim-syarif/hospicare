import React, { useState  } from 'react'
import { useDispatch } from 'react-redux';
import { 
    ActivityIndicator,
    Button, 
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    Picker, 
    ImageBackground,
    Platform,
    StatusBar
} from 'react-native';
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

    const dateFormat = (value) => {
        value = value.toString()
        if(value.length < 2){
            return `0${value}`
        } else {
            return value
        }
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || data.date;
        setData({
            ...data, 
            date: currentDate,
            show: Platform.OS === 'ios',
            dayid: currentDate.getDay(),
            fullDate: `${dateFormat(selectedDate.getDate())}/${dateFormat(selectedDate.getMonth())}/${dateFormat(selectedDate.getFullYear())}`
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


    return (
        <View style={styles.header}>
            <StatusBar backgroundColor="#009387" barStyle='light-content'/>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={styles.dropDown}>
                    <Picker
                        selectedValue={data.poliid}
                        style={styles.text_header}
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
                <View style={styles.date}>
                    <TouchableOpacity
                        onPress={showDateTimePicker}
                    >
                        <Feather
                            name="calendar"
                            size={20}
                            color="grey"
                        />
                    </TouchableOpacity>
                    <Text style={styles.text_header}>{data.fullDate}</Text>
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
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                        onPress={search}
                        style={styles.button1}
                    >
                        <Text style={styles.textSearch}>Search</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex:3, 
        flexDirection: 'column',
        paddingHorizontal: 20,
        padding: 30
    },

    dropDown: {
        flex: 0.6, 
        justifyContent: 'center', 
    },

    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        paddingHorizontal: 5
    },

    date: {
        flex: 0.5, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    button1: {
        borderColor: '#fff',
        borderWidth: 1,
        marginTop: 15,
        width: '100%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },

    textSearch: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
    },

    button :{
        flex: 0.5,
        padding: 5,
        width: '100%'
    }
})