import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Button,
  RefreshControl
} from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "react-native-vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistoryPatient, getAntrian, setAntrian } from "../../store/actions/history";
import Moment from 'moment';

export default function MainHistory({ navigation, route }) {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.patients)
  const { histories, antrian, loading, antrianLoading } = useSelector((state) => state.histories);
  const [activeBooking, setActiveBooking] = useState([]);
  const [historyBooking, setHistoryBooking] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  Moment.locale("en")
  const newDate = modalData?.booking_date

  const onRefresh = () => {
    dispatch(fetchHistoryPatient(id));
  };

  useEffect(() => {
    dispatch(fetchHistoryPatient(id));
  }, []);

  useEffect(() => {
    let active = [];
    let history = [];
    histories.forEach((el) => {
      if (el.MedicationHistory) {
        const paymentId = el.Patient.name.split(' ')[0] + el.MedicationHistory.id
        el.paymentId = paymentId
        history.push(el);
      } else {
        active.push(el);
      }
      setActiveBooking(active), setHistoryBooking(history);
    });
  }, [histories]);

  function getLastAntrian(bookingId) {
    dispatch(getAntrian(bookingId));
  }

  function openModal(data) {
    setModalData(data);
    setModalVisible(true);
  }

  function closeModal() {
    setModalData({});
    setModalVisible(false);
    dispatch(setAntrian([]));
  }

  return (
    <>
      <ScrollView
        style={styles.container}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {/* Modal */}
        <Modal animationIn="fadeIn" isVisible={modalVisible} onBackdropPress={() => closeModal()}>
          <View style={styles.position}>
            <View style={styles.modalView}>
              <View style={styles.modalHeader}>
                <Text style={{ fontWeight: "bold", fontSize: 25 }}>Detail Pesanan</Text>
                
                {antrianLoading ? (
                  <ActivityIndicator size="small" color="#0000ff" style={{ flex: 1 }} />
                ) : (
                  <View>
                    {antrian?.map((item) => {
                      return modalData?.DoctorSchedule?.id === item.bookingId ? (
                        <Text style={{fontSize: 18, marginBottom: 10, textAlign: "center", marginTop: 2, fontWeight: "bold"}} key={item.id}>Antrian: #{item.lastAntrian}</Text>
                      ) : null;
                    })}
                  </View>
                )}
              </View>
              <View
                style={{
                  flex: 1,
                  height: 4,
                  backgroundColor: "gray"
                }}
              />
              <View style={styles.modalContent}>
                <Text
                  style={{
                    fontSize: 16,
                    marginBottom: 10,
                    marginTop: -20,
                  }}
                >
                  Poliklinik {modalData?.DoctorSchedule?.Employee?.Poli.name}
                </Text>
                <View>
                  <View style={{flexDirection: 'row', paddingBottom: 15}}>
                    <View style={{flexDirection: "column"}}>
                      <Text>Dokter</Text>
                      <Text>Keluhan</Text>
                      <Text>Tanggal</Text>
                      <Text>Hari</Text>
                      <Text>Jam</Text>
                      <Text>Antrian</Text>
                    </View>
                    <View style={{flexDirection: "column", paddingLeft: 15}}>
                      <Text>:</Text>
                      <Text>:</Text>
                      <Text>:</Text>
                      <Text>:</Text>
                      <Text>:</Text>
                      <Text>:</Text>
                    </View>
                    <View style={{flexDirection: "column", paddingLeft: 15}}>
                      <Text>{modalData?.DoctorSchedule?.Employee?.name}</Text>
                      <Text>{modalData?.keluhan}</Text>
                      <Text>{Moment(newDate).format('D MMMM YYYY')}</Text>
                      <Text>{modalData?.DoctorSchedule?.Day?.name}</Text>
                      <Text>{modalData?.DoctorSchedule?.start_hour} -{" "}
                      {modalData?.DoctorSchedule?.end_hour}</Text>
                      <Text>{modalData?.antrian}</Text>
                    </View>
                  </View>
                  <Button
                    title="get antrian"
                    onPress={() => getLastAntrian(modalData?.DoctorSchedule?.id)}
                  />
                </View>
                
              </View>
            </View>
          </View>
        </Modal>

        {loading ? (
          <ActivityIndicator size="small" color="#0000ff" style={{ flex: 1 }} />
        ) : (
          <>
            <View style={styles.active}>
              <Text>Pesanan Aktif</Text>
              <View style={styles.active}>
                {activeBooking?.map((el) => {
                  return (
                    <TouchableOpacity
                      key={el.id}
                      onPress={() => openModal(el)}
                      style={styles.activeCard}
                    >
                      <View style={styles.headerActive}>
                        <Ionicons name="medkit" size={15} color="green" />
                        <Text style={styles.poli}>
                          Poliklinik {el.DoctorSchedule.Employee.Poli.name}                         
                        </Text>
                      </View>
                      <Text>
                        {el.DoctorSchedule.Day.name},{" "}
                        {new Date(el.booking_date).toLocaleDateString("id-ID")}
                      </Text>
                      <Text>
                        jam {el.DoctorSchedule.start_hour.slice(0, 5)} -{" "}
                        {el.DoctorSchedule.end_hour.slice(0, 5)}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            {/* History Pesanan */}
            <View style={styles.active}>
              <Text>History Pesanan</Text>
              <View style={styles.active}>
                {historyBooking?.map((el) => {
                  return (
                    <TouchableOpacity
                      key={el.id}
                      onPress={() =>
                        navigation.navigate("Detail", {
                          data: el
                        })
                      }
                      style={styles.activeCard}
                    >
                      <View style={styles.header}>
                        <Ionicons name="medkit" size={15} color="green" />
                        <Text style={styles.poli}>
                          Poliklinik {el.DoctorSchedule.Employee.Poli.name}
                        </Text>
                      </View>
                      <Text>
                        {el.DoctorSchedule.Day.name},{" "}
                        {new Date(el.booking_date).toLocaleDateString("id-ID")}
                      </Text>
                      <Text>
                        jam {el.DoctorSchedule.start_hour.slice(0, 5)} -{" "}
                        {el.DoctorSchedule.end_hour.slice(0, 5)}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  active: {
    marginBottom: 20,
  },
  card: {
    marginTop: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 5
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
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  header: {
    flexDirection: "row"
  },
  headerActive: {
    flexDirection: "row",
  },
  poli: {
    paddingHorizontal: 5
  },
  position: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
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
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30
  },
  modalContent: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%"
  }
});
