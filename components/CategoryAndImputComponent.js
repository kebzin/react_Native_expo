import React, { useRef } from "react";
import {
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Animated,
} from "react-native";
import { COLORS, icons, SIZES, images } from "../constants/index";
import { InputField } from "../components/index";
import { useNavigation } from "@react-navigation/native";

const CategoryAndInputCombine = ({ scrollY, Onpress }) => {
  // hooks
  const Navigation = useNavigation();
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
      >
        <InputField
          onPress={() => {
            Navigation.navigate("Search");
          }}
          Placeholder={"Search"}
          prependComponent={
            <Image source={icons.search} style={style.ImputField} />
          }
          appendComponent={
            <Image source={icons.camera} style={style.ImputField} />
          }
        />
      </Animated.View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    marginTop: 50,
    paddingVertical: SIZES.base,
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
  ImputField: {
    width: 25,
    height: 25,
    tintColor: COLORS.grey,
  },
});

export default CategoryAndInputCombine;
