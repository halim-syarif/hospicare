import React, { useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMedicines } from '../../store/actions/medicine';
import MedicineCard from "../../components/MedicineCard"

export default function Apotek({navigation, route}) {
  const medicines = useSelector(state => state.medicines.medicines)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMedicines())
  }, [])

  return (
    <ScrollView style={styles.container}>
      {medicines?.rows?.map((el, index) => {
        return (
          <MedicineCard key={index} data={el}/>
        )
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 15
  }
});