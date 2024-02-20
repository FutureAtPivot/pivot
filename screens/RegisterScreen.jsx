import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Platform,
  NativeModules,
  ScrollView,
} from "react-native";

// import { StatusBar } from "expo-status-bar"
import React, { useState } from "react";
import { FooterCta, TextInput } from "../components";
import { defaultStyles } from "../constants/styles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../assets/colors";
import { responsiveHeight } from "react-native-responsive-dimensions";

const { statusBarManager } = NativeModules;

const RegisterScreen = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [SavePass, setSavePass] = useState(true);

  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={[defaultStyles.container, { justifyContent: "center" }]}
    >
      <ScrollView
        style={{
          paddingHorizontal: 16,
        }}
      >
        <Text style={[defaultStyles.headerText, { marginTop: "2%" }]}>
          Interested? join us👇
        </Text>

        <TextInput
          placeholder="What should we call you?"
          isPassword={false}
          setStateValue={setName}
        />

        <TextInput
          placeholder="Do you have a mail?"
          isPassword={false}
          setStateValue={setEmail}
        />

        <TextInput
          placeholder="You'll need a password"
          isPassword={true}
          setStateValue={setPassword}
        />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RegisterStack", {
                screen: "TermsAndCondition",
              })
            }
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              paddingVertical: 4,
            }}
          >
            <MaterialIcons
              name={`${SavePass ? "radio-button-off" : "radio-button-on"}`}
              size={20}
              color={"#5E5E5E"}
            />
            <Text
              style={{
                color: COLORS.gray,
                fontFamily: "InterMeduim",
                fontSize: 14,
              }}
            >
              I accept the terms and privacy policies
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          disabled={email === "" || password === ""}
          style={[
            defaultStyles.btn,
            {
              marginTop: "10%",
              borderWidth: 1,
              borderColor: COLORS.accentGray,
            },
          ]}
        >
          <Text style={defaultStyles.btnText}>Register</Text>
          <MaterialIcons name="logout" size={24} color={COLORS.iconColor} />
        </TouchableOpacity>

        <View style={{ marginTop: responsiveHeight(5) }}>
          <FooterCta
            title={"Or register with"}
            footerText={"Have an account? "}
            message={"Login"}
            navScreen={"Login"}
          />
        </View>
        <StatusBar style="light" backgroundColor={COLORS.bg400} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
