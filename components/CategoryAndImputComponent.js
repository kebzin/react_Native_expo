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
import { IconeBotten, InputField } from "../components/index";
import { useNavigation } from "@react-navigation/native";

const CategoryAndInputCombine = ({ scrollY, Onpress, filterPress}) => {
  // hooks
  const Navigation = useNavigation();
  // const categoryTranslateY = scrollY.interpolate({
  //   inputRange: [0, 200], // Adjust the values based on when you want the category animation to start
  //   outputRange: [0, -200], // Adjust the values based on the desired category translateY
  //   extrapolate: "clamp",
  // });
  return (
    <View
      style={{
        backgroundColor: COLORS.lightGrey,
        marginTop: 50,
        paddingVertical: SIZES.base,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      }}
    >
      <InputField
        containerStyle={{ flex: 1 }}
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

      <TouchableOpacity
        onPress={filterPress}
        style={{
          backgroundColor: COLORS.success,
          padding: SIZES.base,
          borderRadius: SIZES.radius,
        }}
      >
        <Image
          source={icons.filter}
          style={{ width: 30, height: 30, tintColor: COLORS.light }}
        />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightGrey,
    marginTop: 50,
    paddingVertical: SIZES.base,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
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
