import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useFocusEffect } from "@react-navigation/native";

import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync, setErrorLogin } from "../store/actions";

export default function History({ navigation, route }) {
  histories = [
    {
      name: "tes",
    },
    {
      name: "tes",
    },
    {
      name: "tes",
    },
    {
      name: "tes",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.active}>
        <Text>Pesanan Aktif</Text>
        {histories.map((el) => {
          return (
            <View style={styles.card}>
              <Text>Pesanan Aktif</Text>
            </View>
          );
        })}
      </View>
      <View>
        <Text>History Pesanan</Text>
        <View style={styles.card}>
          <Text>Pesanan Aktif</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  active: {
    marginBottom: 30
  },  
  card: {
    marginTop: 10,
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
});
