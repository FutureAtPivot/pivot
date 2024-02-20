import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

import { defaultStyles } from "../constants/styles";
import { Onboarding } from "../components";
import { Logo, img01, img02, img03 } from "../assets/images";
import COLORS from "../assets/colors";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const value = await AsyncStorage.getItem("@onboarding_complete");
      if (value !== null && value === "true") {
        navigation.replace("Login");
      }
    };

    checkOnboardingStatus();
  }, []);

  const handleOnboardingComplete = async ({ index }) => {
    console.log(index);
    try {
      if (index === 2) {
        await AsyncStorage.setItem("@onboarding_complete", "true");
        navigation.replace("Login");
      }
    } catch (error) {
      console.log("error on storing onboarding status: ", error);
    }
  };

  const data = [
    {
      title: "Start your journey",
      subTItle: "Meet your guide,",
      image: require("../assets/images/img01.png"),
    },
    {
      title: "To stay on track",
      subTItle: "Create a plan",
      image: require("../assets/images/img02.png"),
    },
    {
      title: "Key to all success",
      subTItle: "Action is the",
      image: require("../assets/images/img03.png"),
      isLast: true,
      handleOnboardingComplete: () => {
        navigation.navigate("Login");
      },
    },
  ];

  return (
    <View style={styles.container} source={Logo} resizeMode="contain">
      <SwiperFlatList
        data={data}
        showPagination
        bounces={false}
        onChangeIndex={handleOnboardingComplete}
        renderItem={({ item }) => <Onboarding item={item} />}
      />
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: responsiveWidth(100),
    backgroundColor: COLORS.bg400,
  },
});

export default OnboardingScreen;

//   < SwiperFlatList
// autoplay
// autoplayDelay = { 2}
// autoplayLoop
// // index={2}
// showPagination
// data = { data }
// renderItem = {({ item }) => (
//   <Onboarding item={item} />
// )}
// />
