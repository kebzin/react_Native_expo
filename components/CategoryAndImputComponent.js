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
const CategoryAndInputCombine = ({ scrollY, Onpress }) => {
  const categoryTranslateY = scrollY.interpolate({
    inputRange: [0, 100], // Adjust the values based on when you want the category animation to start
    outputRange: [0, -100], // Adjust the values based on the desired category translateY
    extrapolate: "clamp",
  });
  return (
    <SafeAreaView style={style.container}>
      <Animated.View
        style={{
          paddingHorizontal: SIZES.padding - 10,
          transform: [{ translateY: categoryTranslateY }],
        }}
      ></Animated.View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    marginTop: 40,
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

export default CategoryAndInputCombine;
