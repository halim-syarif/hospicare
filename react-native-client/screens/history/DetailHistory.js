import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Button,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import Modal from "react-native-modal";
import StatusBarLight from "../../components/StatusBarLight";

export default function DetailHistory({ navigation, route }) {
  const { data } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  function openModal(data) {
    setModalData(data);
    setModalVisible(true);
  }

  function closeModal() {
    setModalData({});
    setModalVisible(false);
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBarLight/>
      <View style={styles.active}>
        <View style={{ height: 1, width: "100%", backgroundColor: "gray" }} />
        <View style={styles.header}>
          <Text>Poliklinik {data.DoctorSchedule.Employee.Poli.name}</Text>
          <Text>Dokter : {data.DoctorSchedule.Employee.name}</Text>
          <Text>
            Tanggal Pemeriksaan :{" "}
            {new Date(data.booking_date).toUTCString().slice(0, 16)}
          </Text>
        </View>
        <View style={{ height: 1, width: "100%", backgroundColor: "gray" }} />
        <View style={styles.card}>
          <Text>Keluhan</Text>
          <View style={styles.activeCard}>
            <Text>{data.keluhan}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text>Diagnosa Penyakit</Text>
          <View style={styles.activeCard}>
            <Text>{data.MedicationHistory.description}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text>Obat</Text>
          <View style={styles.activeCard}>
            {data.MedicationHistory.PatientMedicines.map((el) => {
              return (
                <>
                  <View key={el.id} style={styles.wrap}>
                    <Text>{el.Medicine.name}</Text>
                    <Text>2 x sehari</Text>
                    <Text>sebelum makan</Text>
                    <Pressable
                      onPress={() =>
                        openModal({
                          name: el.Medicine.name,
                          description: el.Medicine.description,
                        })
                      }
                    >
                      <Ionicons
                        name="information-circle-outline"
                        size={15}
                        color="gray"
                      />
                    </Pressable>
                  </View>
                </>
              );
            })}
          </View>
        </View>
        <View style={styles.card}>
          <Text>Biaya</Text>
          <View style={styles.activeCard}>
            <View style={styles.wrap}>
              <Text>Biaya Dokter</Text>
              <Text>:</Text>
              <Text>
                Rp {data.DoctorSchedule.price.toLocaleString("id-ID")}
              </Text>
            </View>
            <Text>Obat :</Text>
            {data.MedicationHistory.PatientMedicines.map((el, index) => {
              return (
                <View key={el.id} style={styles.wrap}>
                  <Text style={ {paddingLeft: 10}}>{index + 1}. {el.Medicine.name}</Text>
                  <Text>:</Text>
                  <Text>
                    Rp {el.price.toLocaleString("id-ID")}
                  </Text>
                </View>
              );
            })}

            <View style={styles.wrap}>
              <Text>Total Price</Text>
              <Text>:</Text>
              <Text>
                Rp {data.MedicationHistory.total_price.toLocaleString("id-ID")}
              </Text>
            </View>
            <View style={{marginTop: 10}}>
              <Button
                title={data.MedicationHistory.is_paid ? "Lunas" : "ngutang"}
              />
            </View>
          </View>
        </View>
      </View>
      <Modal
        animationIn="fadeIn"
        isVisible={modalVisible}
        onBackdropPress={() => closeModal()}
      >
        <View style={styles.position}>
          <View style={styles.modalView}>
            <Text> {data.name}</Text>
            <Text> {data.description}</Text>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  active: {
    marginBottom: 30,
  },
  activeCard: {
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
  },
  header: {
    marginVertical: 10,
  },
  card: {
    marginTop: 15,
  },
  wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  position: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
