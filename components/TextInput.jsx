import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";
import React, { useLayoutEffect, useState } from "react";
import COLORS from "../assets/colors";

const userTextInput = ({ placeholder, isPassword, setStateValue }) => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [Icon, setIcon] = useState(null);

  const handleTextChanged = (text) => {
    setValue(text);
    setStateValue(value);
  };

  useLayoutEffect(() => {
    switch (placeholder) {
      case "Do you have a mail?":
        return setIcon("email");
      case "You'll need a password":
        return setIcon("lock");
      case "What should we call you?":
        return setIcon("person");
    }
  });

  return (
    <View style={styles.container}>
      <MaterialIcons name={Icon} style={styles.Icon} />

      <TextInput
        style={styles.inputField}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={"#CCCCCC50"}
        keyboardAppearance="dark"
        autoCapitalize="none"
        onChangeText={handleTextChanged}
        secureTextEntry={isPassword && showPassword}
        keyboardType={!isPassword ? "email-address" : "default"}
      />

      {isPassword && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={`${showPassword ? "eye-outline" : "eye-off-outline"}`}
            size={20}
            color={"#5E5E5E"}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default userTextInput;

const styles = StyleSheet.create({
  container: {
    gap: 6,
    display: "flex",
    marginBottom: "7%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",

    height: 56,
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 16,
    backgroundColor: COLORS.dark,
    borderColor: COLORS.accentGray,
  },

  inputField: {
    flex: 1,
    color: COLORS.gray,
    fontSize: 16,
    padding: 4,
  },

  Icon: {
    color: COLORS.iconColor,
    fontSize: 22,
  },
});
