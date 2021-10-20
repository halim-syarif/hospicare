import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Button,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import Modal from "react-native-modal";
import { useDispatch, useSelector } from "react-redux";
import { transaction, getStatusTransaction } from "../../store/actions/history";
import StatusBarLight from "../../components/StatusBarLight";

export default function DetailHistory({ navigation, route }) {
  const { data } = route.params;
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const { midtransUrl } = useSelector((state) => state.histories);
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
        midtransUrl,
      });
    }
  }, [midtransUrl]);

  return (

    <ScrollView style={styles.container}>
      <StatusBarLight/>
      <View style={styles.active}>
        <View style={{ height: 1, width: "100%", backgroundColor: "gray" }} />
        <View style={styles.header}>
          <Text style={{fontSize: 18}}>Poliklinik {data.DoctorSchedule.Employee.Poli.name}</Text>
          <Text style={{fontSize: 18}}>Dokter : {data.DoctorSchedule.Employee.name}</Text>
          <Text style={{fontSize: 18}}>
            Tanggal Pemeriksaan : {new Date(data.booking_date).toUTCString().slice(0, 16)}
          </Text>
        </View>
        <View style={{ height: 1, width: "100%", backgroundColor: "gray" }} />
        <View style={styles.card}>
          <Text style={{fontSize: 18}}>Keluhan</Text>
          <View style={styles.activeCard}>
            <Text>{data.keluhan}</Text>
          </View>



        </View>
        <View style={styles.card}>
          <Text style={{fontSize: 18}}>Diagnosa Penyakit</Text>
          <View style={styles.activeCard}>
            <Text>{data.MedicationHistory.description}</Text>
          </View>
        </View>
        <View style={styles.cardMedicines}>
          <Text style={{fontSize: 18}}>Obat</Text>
          <View style={styles.activeCardMedicines}>
            {data.MedicationHistory.PatientMedicines.map((el) => {
              return (
                <>
                  <View key={el.id} style={styles.wrap}>
                    <View style={{width: 155, height:  80}}>
                      <Text style={{ fontWeight: "bold", fontSize: 18}}>
                        {el.Medicine.name}{" "}
                        <Pressable
                          onPress={() =>
                            openModal({
                              name: el.Medicine.name,
                              description: el.Medicine.description
                            })
                          }
                        >
                          <Ionicons  name="information-circle-outline" size={15} color="gray" />
                        </Pressable>
                      </Text>
                      <Text >2x sehari</Text>
                      <Text>sebelum makan</Text>
                    </View>
                  </View>
                </>
              );
            })}
          </View>
        </View>
        <View style={styles.card}>
          <Text style={{fontSize: 18}}>Biaya</Text>
          <View style={styles.activeCard}>
            <View style={styles.wrap}>
              <Text>Biaya Dokter : </Text>
              <Text>Rp {data.DoctorSchedule.price.toLocaleString("id-ID")}</Text>
            </View>
            <Text>Obat :</Text>
            {data.MedicationHistory.PatientMedicines.map((el, index) => {
              return (
                <View key={el.id} style={styles.wrap}>
                  <Text style={{ paddingLeft: 10 }}>
                    {index + 1}. {el.Medicine.name} :
                  </Text>
                  <Text>Rp {el.price.toLocaleString("id-ID")}</Text>
                </View>
              );
            })}

            <View style={styles.wrap}>
              <Text style={{marginTop: 10, fontSize: 16}}>Total Harga : </Text>
              <Text style={{marginTop: 10, fontWeight: "bold", fontSize: 18}}>Rp {data.MedicationHistory.total_price.toLocaleString("id-ID")}</Text>
            </View>
            <View style={{ marginTop: 14 }}>
              <Button title={data.MedicationHistory.is_paid ? "Lunas" : "ngutang"} />
            </View>
          </View>
        </View>
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
                    <Text style={{ paddingLeft: 10 }}>
                      {index + 1}. {el.Medicine.name}
                    </Text>
                    <Text>:</Text>
                    <Text>Rp {el.price.toLocaleString("id-ID")}</Text>
                  </View>
                );
              })}

              <View style={styles.wrap}>
                <Text>Total Price</Text>
                <Text>:</Text>
                <Text>
                  Rp{" "}
                  {data.MedicationHistory.total_price.toLocaleString("id-ID")}
                </Text>
              </View>
              <View style={{ marginTop: 10, width: "100%" }}>
                {statusLoading ? (
                  <ActivityIndicator
                    size="small"
                    color="#0000ff"
                    style={styles.button}
                  />
                ) : (
                  <>
                    {paymentStatus === "Transaction doesn't exist." ? (
                      <Pressable onPress={paynow}>
                        <Text style={styles.buttonless}>Bayar Sekarang</Text>
                      </Pressable>
                    ) : (
                      <>
                        {paymentStatus?.transaction_status === "pending" ? (
                          <Pressable onPress={paynow}>
                            <Text style={styles.buttonPending}>
                              Selesaikan Pembayaran
                            </Text>
                            <View>
                              <Text>
                                Metode pembayaran : {paymentStatus.payment_type}
                              </Text>
                              {paymentStatus.payment_type === "cstore" ? (
                                <>
                                  <Text>Merchant : {paymentStatus.store}</Text>
                                  <Text>
                                    Kode Pembayaran :{" "}
                                    {paymentStatus.payment_code}
                                  </Text>
                                </>
                              ) : (
                                <>
                                  {paymentStatus.payment_type ===
                                  "bank_transfer" ? (
                                    <>
                                      <Text>
                                        Bank tujuan :{" "}
                                        {paymentStatus.va_numbers[0].bank}
                                      </Text>
                                      <Text>
                                        VA number :{" "}
                                        {paymentStatus.va_numbers[0].va_number}
                                      </Text>
                                    </>
                                  ) : null}
                                </>
                              )}
                            </View>
                            {/* <Text>{JSON.stringify(paymentStatus)}</Text> */}
                          </Pressable>
                        ) : (
                          <Text style={styles.button}>Pembayaran Berhasil</Text>
                        )}
                      </>
                    )}
                  </>
                )}
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  active: {
    marginBottom: 30
  },
  activeCard: {
    // alignItems: "flex-start",
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
  activeCardMedicines: {
    flexWrap: "wrap",
    flexDirection:"row",
    justifyContent: "space-between",
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
    marginVertical: 10
  },
  cardMedicines: {
    marginTop: 15,
    
  },
  card: {
    marginTop: 15,
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
  }
    elevation: 5,
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
    marginTop: 3,
  },
  buttonless: {
    width: "100%",
    color: "white",
    backgroundColor: "#60A5FA",
    justifyContent: "center",
    textAlign: "center",
    padding: 5,
    borderRadius: 5,
    marginTop: 3,
  },

  buttonPending: {
    width: "100%",
    color: "white",
    backgroundColor: "#FBBF24",
    justifyContent: "center",
    textAlign: "center",
    padding: 5,
    borderRadius: 5,
    marginTop: 3,
  },
});
