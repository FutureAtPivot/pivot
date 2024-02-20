import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import COLORS from "../assets/colors";
import { defaultStyles } from "../constants/styles";

const Onboarding = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          resizeMode="cover"
          style={styles.mainImage}
        />
      </View>
      <View style={[styles.footerContent, { bottom: item.isLast ? "11%" : "18%" }]}>
        <Text style={styles.subTitle}>{item.subTItle}</Text>
        <Text style={styles.heading}>{item.title}</Text>

        {item.isLast && (
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={item.handleOnboardingComplete}
          >
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
  imageContainer: {
    width: responsiveWidth(100),
    height: responsiveHeight(50),
  },
  mainImage: {
    width: "auto",
  },
  footerContent: {
    position: "absolute",
    width: responsiveWidth(100),
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "InterSemibold",
    color: "#EEEEEE",
  },
  subTitle: {
    fontSize: 16,
    color: COLORS.gray,
    letterSpacing: 2,
    fontFamily: "InterMeduim",
  },
  btnContainer: {
    height: 48,
    width: responsiveWidth(70),
    borderRadius: 99,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 32,
    justifyContent: "center",
    backgroundColor: COLORS.dark,
    marginTop: 16,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 0,
    color: COLORS.gray,
    fontFamily: "InterSemibold",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Onboarding;
