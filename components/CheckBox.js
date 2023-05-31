import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { FONTS, icons, COLORS, SIZES } from "../constants/index";
const CheckBox = ({ containerStyle, isSelected, Onpress }) => {
  return (
    <TouchableOpacity
      style={{
        ...containerStyle,
      }}
      onPress={Onpress}
    >
      <View
        style={{
          width: 25,
          height: 25,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: SIZES.base,
          borderWidth: 3,
          borderColor: isSelected ? COLORS.primary : COLORS.gray,
          backgroundColor: isSelected ? COLORS.primary : null,
        }}
      >
        {isSelected && (
          <Image
            source={icons.checkmark}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.light,
            }}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CheckBox;
