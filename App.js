import { useCustomFonts } from "./constants/theme";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import StackNavigation from "./Navigation/StackNavigation";

import Store from "./store/Store";
import { Provider } from "react-redux";

export default function App() {
  const { fontsLoaded, onLayoutRootView } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={Store}>
      <NavigationContainer>
        {/* <LoginChecked
          renderChildrents={ */}
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <StackNavigation />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
        {/* }
        /> */}
      </NavigationContainer>
    </Provider>
  );
}
