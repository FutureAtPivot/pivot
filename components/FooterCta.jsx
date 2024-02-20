import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { defaultStyles } from "../constants/styles";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import COLORS from "../assets/colors";
import { Apple, Facebook, Google } from "../assets/images";

const footerCta = ({ title, footerText, message, navScreen }) => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.seperatorView}>
        <View
          style={{
            flex: 1,
            borderBottomColor: COLORS.accentGray,
            borderBottomWidth: 1,
          }}
        />

        <Text style={styles.seperator}>{title}</Text>

        <View
          style={{
            flex: 1,
            borderBottomColor: COLORS.accentGray,
            borderBottomWidth: 1,
          }}
        />
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <TouchableOpacity style={[styles.row, { flex: 1 }]}>
          <Image
            source={Facebook}
            style={{ width: 20, height: 20 }}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.row, { flex: 1 }]}>
          <Image
            source={Google}
            style={{ width: 20, height: 20 }}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.row, { flex: 1 }]}>
          <Image
            source={Apple}
            style={{ width: 20, height: 20 }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "12%",
        }}
      >
        <Text
          style={{
            color: "#CCCCCC70",
            fontSize: 15,
            fontFamily: "InterMeduim",
          }}
        >
          {footerText}
        </Text>
        <TouchableOpacity
          style={{ padding: 4 }}
          onPress={() => navigation.navigate(navScreen)}
        >
          <Text
            style={{
              color: "#CCCCCC98",
              fontSize: 15,
              fontFamily: "InterBold",
            }}
          >
            {message}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  seperatorView: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginBottom: "7%",
  },
  seperator: {
    fontFamily: "InterMeduim",
    fontSize: 14,
    color: "#CCCCCC70",
  },

  row: {
    height: 56,
    borderWidth: 1,
    borderRadius: 10,
    padding: 18,
    backgroundColor: COLORS.dark,
    borderColor: COLORS.accentGray,
    color: COLORS.gray,
    fontSize: 14,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  rowText: {
    fontSize: 16,
    fontFamily: "InterMeduim",
    fontWeight: "500",
    color: COLORS.gray,
  },
});

export default footerCta;
