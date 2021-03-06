import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Button,
  ActivityIndicator
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import Modal from "react-native-modal";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { transaction, getStatusTransaction } from "../../store/actions/history";
import StatusBarLight from "../../components/StatusBarLight";

export default function DetailHistory({ navigation, route }) {
  const { data } = route.params;
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const { midtransUrl, midtransLoading } = useSelector((state) => state.histories);
  const [paymentStatus, setStatusPayment] = useState("");
  const [statusLoading, setStatusLoading] = useState(false);

  function openModal(data) {
    setModalData(data);
    setModalVisible(true);
  }

  function closeModal() {
    setModalData({});
    setModalVisible(false);
  }

  function paynow() {
    dispatch(transaction(data.MedicationHistory.id));
  }

  useEffect(() => {
    return navigation.addListener('focus', () => {
      const { paymentId } = data;
      setStatusLoading(true);
      getStatusTransaction(paymentId)
      .then((response) => {
        setStatusLoading(false);
        setStatusPayment(response.data);
      })
      .catch((err) => {
        setStatusPayment(err.response.data.message);
        setStatusLoading(false);
      });
    });
  },[])

  useEffect(() => {
    const { paymentId } = data;
    setStatusLoading(true);
    getStatusTransaction(paymentId)
      .then((response) => {
        setStatusLoading(false);
        setStatusPayment(response.data);
        // console.log(response.data);
        // console.log(response.data.transaction_status);//capture,pending
        // console.log(response.data.approval_code); //=> credit_card success
        // console.log(response.data.payment_type);//bank_transfer//cstore//credit_card
        // console.log(response.data.store); //nama store => alfamart, indomart
        // console.log(response.data.payment_code); // code pmbayaran csstore
        // console.log(response.data.va_number); //{bank,va_number}
      })
      .catch((err) => {
        setStatusPayment(err.response.data.message);
        setStatusLoading(false);
        // console.log(err.response.data.message);//Transaction doesn't exist.
      });
  }, [data]);

  useEffect(() => {
    if (midtransUrl) {
      navigation.navigate("Payment", {
        midtransUrl
      });
    }
  }, [midtransUrl]);

  return (
    <>
      <ScrollView style={styles.container}>
        <StatusBarLight />
        <View style={styles.active}>
          <View style={{ height: 1, width: "100%", backgroundColor: "gray" }} />
          <View style={styles.header}>
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontSize: 15, color: '#fff' }}>Polyclinic</Text>
              <Text style={{ fontSize: 15, paddingTop: 5, color: '#fff' }}>Doctor</Text>
              <Text style={{ fontSize: 15, paddingTop: 5, color: '#fff' }}>Check Up Date</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontSize: 15, paddingLeft: 10, color: '#fff' }}>:</Text>
              <Text style={{ fontSize: 15, paddingLeft: 10,color: '#fff', paddingTop: 5 }}>:</Text>
              <Text style={{ fontSize: 15, paddingLeft: 10, color: '#fff', paddingTop: 5 }}>:</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontSize: 15, paddingLeft: 10, color: '#fff' }}>
                {data.DoctorSchedule.Employee.Poli.name}
              </Text>
              <Text style={{ fontSize: 15, paddingLeft: 10, paddingTop: 5, color: '#fff' }}>
                {data.DoctorSchedule.Employee.name}
              </Text>
              <Text style={{ fontSize: 15, paddingLeft: 10, paddingTop: 5, color: '#fff' }}>
                {new Date(data.booking_date).toUTCString().slice(0, 16)}
              </Text>
            </View>
            {/* <Text style={{fontSize: 18}}>Poliklinik {data.DoctorSchedule.Employee.Poli.name}</Text>
          <Text style={{fontSize: 18}}>Dokter : {data.DoctorSchedule.Employee.name}</Text>
          <Text style={{fontSize: 18}}>
            Tanggal Pemeriksaan : {new Date(data.booking_date).toUTCString().slice(0, 16)}
          </Text> */}
          </View>
          <View style={{ height: 1, width: "100%", backgroundColor: "gray" }} />
          <View style={styles.card}>
            <View style={styles.activeCard}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginTop: 2, marginRight: 5 }}>
                <MaterialIcons name="sick" size={20} color="green" />
              </View>
              <Text style={{ fontSize: 18 }}>Symptoms</Text>
            </View>
              <Text style={styles.content}>{data.keluhan}</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.activeCard}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginTop: 2, marginRight: 5 }}>
              <FontAwesome name="stethoscope" size={20} color="green" />
            </View>
            <Text style={{ fontSize: 18 }}>Disease Diagnosis</Text>
          </View>
            <Text style={styles.content}>{data.MedicationHistory.description}</Text>
          </View>
        </View>
        <View style={styles.activeCard}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginTop: 2, marginRight: 5 }}>
              <Fontisto name="drug-pack" size={20} color="green" />
            </View>
            <Text style={{ fontSize: 18 }}>Medications</Text>
          </View>
          <View style={styles.activeCardMedicines}>
            {data.MedicationHistory.PatientMedicines.map((el) => {
              return (
                <React.Fragment key={el.id}>
                  <View key={el.id} style={styles.wrap}>
                    <View style={{ width: 155, height: 80 }}>
                      <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                        {el.Medicine.name}{" "}
                        <Pressable
                          onPress={() =>
                            openModal({
                              name: el.Medicine.name,
                              description: el.Medicine.description
                            })
                          }
                        >
                          <Ionicons name="information-circle-outline" size={15} color="gray" />
                        </Pressable>
                      </Text>
                      <Text>2x sehari</Text>
                      <Text>sebelum makan</Text>
                    </View>
                  </View>
                </React.Fragment>
              );
            })}
          </View>
        </View>
        <View style={styles.activeCardPrice}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginTop: 2, marginRight: 5 }}>
              <Ionicons name="card-outline" size={20} color="green" />
            </View>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>Price</Text>
          </View>
          <View style={styles.activeCard}>
            <View style={styles.wrap}>
              <Text>Doctor Fee : </Text>
              <Text>Rp {data.DoctorSchedule.price.toLocaleString("id-ID")}</Text>
            </View>
            <Text>Medications :</Text>
            {data.MedicationHistory.PatientMedicines.map((el, index) => {
              return (
                <View key={el.id} style={styles.wrap}>
                  <Text style={{ paddingLeft: 10 }}>
                    {index + 1}. {el.Medicine.name}
                  </Text>
                  <Text>Rp {el.price.toLocaleString("id-ID")}</Text>
                </View>
              );
            })}

            <View style={styles.wrap}>
              <Text style={{ marginTop: 10, fontSize: 16 }}>Total Price : </Text>
              <Text style={{ marginTop: 10, fontWeight: "bold", fontSize: 18 }}>
                Rp {data.MedicationHistory.total_price.toLocaleString("id-ID")}
              </Text>
            </View>
            <View style={{ marginTop: 10, width: "100%" }}>
              {statusLoading ? (
                <ActivityIndicator size="small" color="#0000ff" style={styles.button} />
              ) : (
                <>
                  {paymentStatus === "Transaction doesn't exist." ? (
                    <Pressable onPress={paynow}>
                      <Text style={styles.buttonless}>Pay Now</Text>
                    </Pressable>
                  ) : (
                    <>
                      {paymentStatus?.transaction_status === "pending" ? (
                        <Pressable onPress={paynow}>
                          <Text style={styles.buttonPending}>Finish Payment</Text>
                          <View>
                            <Text>Payment Method : {paymentStatus.payment_type}</Text>
                            {paymentStatus.payment_type === "cstore" ? (
                              <>
                                <Text>Merchant : {paymentStatus.store}</Text>
                                <Text>Payment Code : {paymentStatus.payment_code}</Text>
                              </>
                            ) : (
                              <>
                                {paymentStatus.payment_type === "bank_transfer" ? (
                                  <>
                                    <Text>Bank tujuan : {paymentStatus.va_numbers[0].bank}</Text>
                                    <Text>VA number : {paymentStatus.va_numbers[0].va_number}</Text>
                                  </>
                                ) : null}
                              </>
                            )}
                          </View>
                          {/* <Text>{JSON.stringify(paymentStatus)}</Text> */}
                        </Pressable>
                      ) : (
                        <Text style={styles.button}>Payment Succesfull</Text>
                      )}
                    </>
                  )}
                </>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  active: {
    // marginBottom: 10
  },
  activeCard: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    shadowColor: "#000",
    marginHorizontal: 5,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5
  },
  content: {
    marginTop: 10,
  },
  activeCardMedicines: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 3,
    backgroundColor: "white",
    padding: 10,
    marginHorizontal: 5,
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
  activeCardPrice: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginBottom: 35,
    shadowColor: "#000",
    marginHorizontal: 5,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5
  },
  header: {
    marginVertical: 10,
    flexDirection: "row",
    backgroundColor: '#059669',
    borderRadius: 10,
    padding : 10,
    shadowColor: "#000",
    marginHorizontal: 5,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5
  },
  cardMedicines: {
    marginTop: 15
  },
  card: {
    marginTop: 15
  },
  medicinesWrap: {
    // flexWrap: "wrap",
  },
  wrap: {
    flexDirection: "row",
    justifyContent: "space-between"
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
  button: {
    flex: 1,
    width: "100%",
    color: "white",
    backgroundColor: "#059669",
    justifyContent: "center",
    textAlign: "center",
    padding: 5,
    borderRadius: 5,
    marginTop: 3
  },
  buttonless: {
    width: "100%",
    color: "white",
    backgroundColor: "#60A5FA",
    justifyContent: "center",
    textAlign: "center",
    padding: 5,
    borderRadius: 5,
    marginTop: 3
  },

  buttonPending: {
    width: "100%",
    color: "white",
    backgroundColor: "#FBBF24",
    justifyContent: "center",
    textAlign: "center",
    padding: 5,
    borderRadius: 5,
    marginTop: 3
  }
});
