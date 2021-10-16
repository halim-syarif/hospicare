import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function Schedule({navigation, route}) {
    const dispatch = useDispatch
    // const schedule = useSelector(state => state.schedules.data)
    // useEffect(() => {
    //     dispatch(scheduleAsync())
    // })

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Schedule</Text>
      </View>
    );
}