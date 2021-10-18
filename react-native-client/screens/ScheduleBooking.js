import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import ScheduleCards from '../components/ScheduleCards';
export default function ScheduleBooking({navigation, route}) {
    console.log(route.params)
    const schedules = useSelector(state => state.schedules.data)
    const isLoading = useSelector(state => state.schedules.loadingSchedule)
    const error = useSelector(state => state.schedules.errorSchedule)

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScheduleCards schedules={schedules} isLoading={isLoading} error={error}/>
      </View>
    );
}