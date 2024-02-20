import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

import { Logo, mainBg } from "../assets/images";
import COLORS from "../assets/colors";
import { defaultStyles } from "../constants/styles";

const GetStarted = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.replace("Onboarding");
  };

  return (
    <View style={defaultStyles.container}>
      <ImageBackground
        source={mainBg}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Image source={Logo} resizeMode="contain" style={styles.logo} />

          <TouchableOpacity
            onPress={handleGetStarted}
            style={[
              defaultStyles.btn,
              {
                position: "absolute",
                bottom: responsiveHeight(-22),
                backgroundColor: "#333333",
              },
            ]}
            activeOpacity={0.8}
          >
            <Text style={[defaultStyles.btnText, { fontFamily: "InterBold", letterSpacing: 1  }]}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <StatusBar hidden />
    </View>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    objectFit: "cover",
    alignItems: "center",
    justifyContent: "center",
    height: responsiveHeight(100),
    width: responsiveWidth(100),
  },
  overlay: {
    flex: 1,
    left: 0,
    top: 0,
    opacity: 0.8,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    backgroundColor: COLORS.bg400,
  },
  content: {
    paddingHorizontal: "6%",
    width: responsiveWidth(100),
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: responsiveWidth(80),
    aspectRatio: 4 / 5,
  },
});

export default GetStarted;
