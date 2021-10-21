import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faPills } from "@fortawesome/free-solid-svg-icons"

export default function PoliCard({ data }) {
  const [isFull, setIsFull] = useState(true);
  const [content, setContent] = useState("");
  const [buttonShowAll, setButtonShowAll] = useState(false);

  useEffect(() => {
    if (data?.description?.length > 200) {
      setIsFull(true);
      setContent(data?.description?.slice(0, 190) + " ...");
      setButtonShowAll(true);
    } else {
      setContent(data?.description);
    }
  }, []);

  function showAll() {
    setContent(data.content);
    setButtonShowAll(false);
  }

  function showLess() {
    setButtonShowAll(true);
    setContent(data?.description?.slice(0, 190) + " ...");
  }

  return (
    <View key={data.name} >
      <View style={styles.activeCard}>
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={require('../assets/sampleIcon.png')}
          />
          <View style={styles.column}>
            <View style={styles.row}>
                <FontAwesomeIcon style={{marginLeft: 3}} icon={faPills} />
                <Text style={styles.poli}>{data.name}</Text>
            </View>
            {/* <View style={{borderBottomColor: "black", borderBottomWidth: 1}} /> */}
            <Text style={{fontSize: 14, marginTop: 10}}>Indikasi</Text>
            <Text style={styles.text_content}>{content} </Text>
              <View style={{flexDirection: "row"}}>            
                <Pressable style={{ width: "100%" }}>
                  <Text style={styles.button}>Beli</Text>
                </Pressable>
              </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  activeCard: {
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 7,
  },
  poli: {
    paddingHorizontal: 5,
  },
  row: {
    flexDirection : "row",
    width: 180,
    height: 40
  },
  column: {
    flexDirection: "column",
    padding: 10,
  },
  image: {
    height: "92%",
    width: "50%",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  content: {
    flexDirection: "row",
    width: "82%",
  },
  text_content: {
    paddingVertical: 12,
    fontSize: 13,
    textAlign: "left",
    maxWidth: "74%",
  },
  button: {
    flex: 1,
    width: "40%",
    color: "white",
    backgroundColor: "#059669",
    justifyContent: "center",
    textAlign: "center",
    padding: 5,
    borderRadius: 5,
    marginTop: 3,
  },
  buttonless: {
    flex: 1,
    width: "40%",
    color: "white",
    backgroundColor: "#10B981",
    justifyContent: "center",
    textAlign: "center",
    padding: 5,
    borderRadius: 5,
    marginTop: 3,
  },
  customHeader: {
    flexDirection: "row"
  }
});
