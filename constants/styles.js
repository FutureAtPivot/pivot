import { StyleSheet } from "react-native";
import COLORS from "../assets/colors";

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg400,
  },

  headerText: {
    fontSize: 32,
    color: COLORS.gray,
    marginBottom: "8%",
    fontFamily: "Variant",
  },

  btn: {
    height: 56,
    width: "100%",
    borderRadius: 99,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 32,
    justifyContent: "center",
    backgroundColor: COLORS.dark,
  },

  btnText: {
    fontSize: 18,
    letterSpacing: 1,
    color: COLORS.gray,
    fontFamily: "Variant",
    lineHeight: 0,
    marginRight: 16,
  },

  btnIcon: {
    position: "absolute",
    left: 16,
  },
});
