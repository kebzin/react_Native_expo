import React, { useRef } from "react";
import {
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Animated,
} from "react-native";
import { COLORS, icons, SIZES, images } from "../constants/index";
const HeaderComponent = ({ scrollY, Onpress }) => {
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 100], // Adjust the values based on when you want the header animation to start
    outputRange: [0, -100], // Adjust the values based on the desired header translateY
    extrapolate: "clamp",
  });
  return (
    <SafeAreaView style={style.container}>
      <Animated.View
        style={{
          position: "absolute",
          top: StatusBar.currentHeight,
          left: 0,
          right: 0,
          flex: 1,

          paddingHorizontal: SIZES.padding - 10,
          transform: [{ translateY: headerTranslateY }],
          backgroundColor: COLORS.primary,
        }}
      >
        <View style={style.thirdContainer}>
          {/* logo */}
          <View style={style.LogoContainer}>
            <Image source={icons.logo} style={style.logo} />
          </View>
          {/* notification icon  */}
          <View style={style.BellContainer}>
            <TouchableOpacity onPress={Onpress}>
              <Image source={icons.bell} style={style.logo} />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    zIndex: 100,
    backgroundColor: COLORS.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: SIZES.padding - 10,
  },
  thirdContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  LogoContainer: {
    width: 40,
    height: 40,
    overflow: "hidden",
    borderRadius: 10,
  },
  BellContainer: {
    width: 25,
    height: 25,
  },
  logo: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
});

export default HeaderComponent;
