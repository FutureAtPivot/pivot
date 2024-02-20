import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GetStarted, Login, Onboarding, Register } from "./screens";

// SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterMeduim: require("./assets/fonts/Inter-Medium.ttf"),
    InterSemibold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    Variant: require("./assets/fonts/Pacifico-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="GetStarted"
      >
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ animation: "simple_push" }}
        />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
