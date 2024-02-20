import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Platform,
  NativeModules,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { responsiveHeight } from "react-native-responsive-dimensions";

import { defaultStyles } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../assets/colors";
import { FooterCta, TextInput } from "../components";

const { statusBarManager } = NativeModules;

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [SavePass, setSavePass] = useState(false);

  const handleSavePassword = () => {
    setSavePass(!SavePass);
    console.log(SavePass);
  };
  const [isLoading, setisLoading] = useState(true);

  return (
    <View style={[defaultStyles.container, { alignItem: "center" }]}>
      <View
        style={{
          paddingHorizontal: 16,
          marginTop: responsiveHeight(4),
        }}
      >
        <Text style={[defaultStyles.headerText, { marginTop: "12%" }]}>
          Hey, welcome 👋
        </Text>

        <View style={{ marginTop: "4%" }}>
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
              onPress={handleSavePassword}
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
                Remember me
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ paddingVertical: 2 }}>
              <Text
                style={{
                  color: COLORS.gray,
                  fontFamily: "InterMeduim",
                  fontSize: 14,
                }}
              >
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => <Text>I have been clicked</Text>}
            style={[
              defaultStyles.btn,
              {
                marginTop: "8%",
                borderWidth: 1,
                borderColor: COLORS.accentGray,
              },
            ]}
          >
            <Text style={defaultStyles.btnText}>Continue</Text>
            <MaterialIcons name="login" size={24} color={COLORS.iconColor} />
          </TouchableOpacity>

          <View style={{ marginTop: responsiveHeight(5) }}>
            <FooterCta
              title={"Or login with"}
              footerText={"Don't have an account? "}
              message={"Sign up"}
              navScreen={"Register"}
            />
          </View>

          {/* <View className="flex-1 w-full">
                    {isLoading
                        ? <View className="flex-1 h-80 items-center justify-center"><ActivityIndicator size={'large'} color={'teal'} /></View>
                        : <></>}
                </View> */}
        </View>
      </View>

      <StatusBar style="light" backgroundColor={COLORS.darker} />
    </View>
  );
};

export default LoginScreen;
