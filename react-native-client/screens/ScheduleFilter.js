import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import HeaderComponent from '../components/headerComponent';
import ScheduleCards from '../components/ScheduleCards';
export default function ScheduleFilter({navigation, route}) {
    const schedules = useSelector(state => state.schedules.data)
    const isLoading = useSelector(state => state.schedules.loadingSchedule)
    const error = useSelector(state => state.schedules.errorSchedule)

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <HeaderComponent/>
        </View>
        <View style={styles.footer}>
        <ScheduleCards schedules={schedules} isLoading={isLoading} error={error} navigation={navigation}/>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#009387'
  },

  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },

  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
})