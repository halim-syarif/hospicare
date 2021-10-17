import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ScheduleCards from '../components/ScheduleCards';
import { scheduleAsync } from '../store/actions';

export default function Schedule({navigation, route}) {
    const schedules = useSelector(state => state.schedules.data)
    const isLoading = useSelector(state => state.schedules.loadingSchedule)
    const error = useSelector(state => state.schedules.errorSchedule)

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScheduleCards schedules={schedules} isLoading={isLoading} error={error}/>
      </View>
    );
}