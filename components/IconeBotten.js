import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { COLORS } from "../constants/index";

const IconeBotten = ({ icone, containerStyle, iconeStyle, Onpress }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        resizeMode: "contain",
        ...containerStyle,
      }}
      onPress={Onpress}
    >
      <Image
        source={icone}
        style={{ width: 25, height: 25, tintColor: "white", ...iconeStyle }}
      />
    </TouchableOpacity>
  );
};

export default IconeBotten;
