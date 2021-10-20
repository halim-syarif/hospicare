import { StatusBar } from "expo-status-bar";
import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Pressable,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";
import {
  AntDesign,
  Fontisto,
  Feather,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";
import StatusBarLight from "../../components/StatusBarLight";
import { useDispatch } from "react-redux";
import { doctorNamesAsync, scheduleByDoctorName } from "../../store/actions";
import { useSelector } from "react-redux";

export default function Landing({ navigation }) {
  const dispatch = useDispatch()
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('')
  const searchArea = useRef(null)
  const doctorNames = useSelector(state => state.doctors.doctorNames)

  useEffect(() => {
    dispatch(doctorNamesAsync())
  }, [])


  function hideSearch(){
    searchArea.current.blur()
    setSearchActive(false);
  }

  const updateSearch = (search) => {
    setSearchQuery(search);
  };

  const searchSchedule = () => {
    const doctorName = searchQuery
    dispatch(scheduleByDoctorName(doctorName))
    navigation.navigate('Schedule')
  }

  const searchByName = (name) => {
    dispatch(scheduleByDoctorName(name))
    navigation.navigate('Schedule')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarWrapper}>
        <View style={styles.searchBar}>
          <SearchBar
            ref={searchArea}
            placeholderTextColor="#9CA3AF"
            searchIcon={{ color: "#9CA3AF" }}
            inputStyle={{ fontSize: 12 }}
            inputContainerStyle={styles.inputBar}
            containerStyle={{
              backgroundColor: "white",
              borderWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
            }}
            placeholder="type doctor name or pick one"
            onChangeText={updateSearch}
            value={searchQuery}
            onFocus={() => setSearchActive(true)}
          />
        </View>
        {searchActive ? (
          <View style={styles.activeButtons}>
            <Pressable
              onPress={searchSchedule}
              style={styles.iconlist}
            >
              <Ionicons
                name="ios-search-sharp"
                size={25}
                color="#9CA3AF"
                style={{ marginRight: 20 }}
              />
            </Pressable>
            <Pressable
              onPress={hideSearch}
              style={styles.iconlist}
            >
              <Ionicons
                name="close-circle-outline"
                size={25}
                color="#9CA3AF"
                style={{ marginRight: 20 }}
              />
            </Pressable>
          </View>
        ) : (
          <View style={styles.iconlist}>
            <AntDesign
              name="mail"
              size={20}
              color="black"
              style={{ marginRight: 15 }}
            />
            <AntDesign
              name="bells"
              size={20}
              color="black"
              style={{ marginRight: 15 }}
            />
            <Feather
              name="list"
              size={20}
              color="black"
              style={{ marginRight: 15 }}
              onPress={() => {navigation.openDrawer()}}
            />
          </View>
        )}
      </View>
      {searchActive ? (
        <FlatList
          data={doctorNames}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.scrollViewDoctorNames}
              onPress={() => searchByName(item.name)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )
          }
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <ScrollView style={styles.scrollView}>
          <Image
            style={styles.banner}
            resizeMode="contain"
            source={{
              uri: "https://asset.kompas.com/crops/mOKFrYHlSTM6SEt4aD9PIXZnJE0=/0x5:593x400/750x500/data/photo/2020/03/16/5e6ee88f78835.jpg",
            }}
          />
          <View style={styles.item}>
            <View style={styles.iconitem}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Poliklinik")}
              >
                <FontAwesome
                  name="stethoscope"
                  size={35}
                  color="#10B981"
                  style={{ paddingLeft: 5 }}
                />
                <Text style={styles.icontext}>Poliklinik</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.iconitem}>
              <TouchableOpacity onPress={() => navigation.navigate("Dokter")}>
                <Fontisto name="doctor" size={35} color="#10B981" />
                <Text style={styles.icontext}>Dokter</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.iconitem}>
              <TouchableOpacity onPress={() => navigation.navigate("Lab")}>
                <Entypo name="lab-flask" size={35} color="#10B981" />
                <Text style={styles.icontext}>Lab</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.iconitem}>
              <TouchableOpacity onPress={() => navigation.navigate("Apotek")}>
                <FontAwesome name="medkit" size={35} color="#10B981" />
                <Text style={styles.icontext}>Apotek</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.iconitem}>
              <TouchableOpacity>
                <Feather
                  name="phone-call"
                  size={35}
                  color="#10B981"
                  style={styles.icon}
                />
                <Text style={styles.icontext}>Emergency Call</Text>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView horizontal={true}>
            <Image
              style={styles.slider}
              source={{
                uri: "https://statik.tempo.co/data/2020/03/09/id_921684/921684_720.jpg",
              }}
            />
            <Image
              style={styles.slider}
              source={{
                uri: "https://foto.kontan.co.id/AVzzwCLFFx_mVkGuZvp9tgSJfcQ=/smart/2021/09/08/505330445p.jpg",
              }}
            />
            <Image
              style={styles.slider}
              source={{
                uri: "https://cdns.klimg.com/kapanlagi.com/p/headline/476x238/minho-shinee-oh-yeon-seo-pasangan-palin-7c2805.jpg",
              }}
            />
          </ScrollView>

          <TouchableOpacity style={styles.activeCard}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 20, marginBottom: 5 }}>
                Mengapa Memilih Kami ?
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Ionicons
                name="git-merge-outline"
                size={45}
                color="green"
                style={{ marginTop: 10 }}
              />
              <View style={{ marginLeft: 20 }}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    Rumah Sakit Berbasis Digital
                  </Text>
                  <Text style={{ maxWidth: 300 }}>
                    Menerapkan sistem manajemen operasional berbasis teknologi
                    informasi jaringan
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Ionicons
                name="refresh-outline"
                size={45}
                color="green"
                style={{ marginTop: 15 }}
              />
              <View style={{ marginLeft: 20 }}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    Perawatan Berkelanjutan
                  </Text>
                  <Text style={{ maxWidth: 300 }}>
                    Kesinambungan pelayanan yang dilakukan mulai dari perawatan
                    sampai pasien pulang ke rumah oleh tim home care
                    multi-profesi
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Ionicons
                name="people-outline"
                size={45}
                color="green"
                style={{ marginTop: 10 }}
              />
              <View style={{ marginLeft: 20 }}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    Kolaborasi Interprofesional
                  </Text>
                  <Text style={{ maxWidth: 300 }}>
                    Mengembangkan kolaborasi interprofesional dalam pelayanan,
                    riset bidang kesehatan, serta pengabdian masyarakat
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      )}

      <StatusBarLight/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  searchBarWrapper: {
    marginTop: 5,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchBar: {
    width: "70%",
  },
  iconlist: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  inputBar: {
    borderRadius: 10,
    backgroundColor: "white",
    height: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  activeButtons: {
    flexDirection: "row",
    justifyContent: "flex-start",
  }, 
  banner: {
    width: "100%",
    height: 200,
    borderColor: "white",
    borderWidth: 5,
  },
  scrollView: {
    backgroundColor: "white",
  },
  scrollViewDoctorNames: {
    backgroundColor: "white",
    paddingVertical: 4,
    paddingLeft: 10,
    marginVertical: 10
  },
  slider: {
    width: 390,
    height: 200,
    borderColor: "white",
    borderWidth: 5,
  },
  content1: {
    backgroundColor: "white",
    width: "100%",
    marginVertical: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "black",
  },
  activeCard: {
    marginTop: 10,
    marginHorizontal: 5,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 2,
  },
  item: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  iconitem: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginLeft: 8,
  },
  icontext: {
    fontSize: 11,
    marginTop: 5,
    maxWidth: 60,
    textAlign: "center",
    color: "#9CA3AF",
    justifyContent: "center",
  },
});
