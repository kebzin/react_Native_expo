import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useCustomFonts } from "./constants/theme";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  Welcome,
  Walkthrough,
  AuthMain,
  ForgetPassword,
  OTO_Verification,
  ChangePassword,
  Home,
} from "./screens/index";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import StackNavigation from "./Navigation/StackNavigation";

const Stack = createStackNavigator();
export default function App() {
  const { fontsLoaded, onLayoutRootView } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <StackNavigation />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}