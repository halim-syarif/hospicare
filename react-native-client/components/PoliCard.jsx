import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Ionicons } from "react-native-vector-icons";

export default function PoliCard({ data }) {
  const [isFull, setIsFull] = useState(false);
  const [content, setContent] = useState("");
  const [buttonShowAll, setButtonShowAll] = useState(false);

  useEffect(() => {
    if (data.content.length > 200) {
      setIsFull(true);
      setContent(data.content.slice(0, 190) + " ...");
      setButtonShowAll(true);
    } else {
      setContent(data.content);
    }
  }, []);

  function showAll() {
    setContent(data.content);
    setButtonShowAll(false);
  }

  function showLess() {
    setButtonShowAll(true);
    setContent(data.content.slice(0, 190) + " ...");
  }

  return (
    <View key={data.name} >
      <View style={styles.activeCard}>
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={{
              uri: data.image,
            }}
          />
          <View style={styles.column}>
            <View style={styles.row}>
              <Ionicons name="medkit" size={15} color="green" />
              <Text style={styles.poli}>Poliklinik {data.name}</Text>
            </View>
            <Text style={styles.text_content}>{content} </Text>
            {isFull ? (
              <>
                {buttonShowAll ? (
                  <Pressable onPress={showAll} style={{ width: "100%" }}>
                    <Text style={styles.button}>Selengkapnya</Text>
                  </Pressable>
                ) : (
                  <Pressable onPress={showLess} style={{ width: "100%" }}>
                    <Text style={styles.buttonless}>Lihat sedikit</Text>
                  </Pressable>
                )}
              </>
            ) : null}
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
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
    padding: 10,
  },
  image: {
    height: "100%",
    width: "30%",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  content: {
    flexDirection: "row",
    width: "100%",
  },
  text_content: {
    paddingVertical: 8,
    fontSize: 11,
    textAlign: "justify",
    maxWidth: "82%",
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
});
