import React from "react";
import { View, FlatList, Animated, Text, Image, StatusBar } from "react-native";
import { IconeBotten } from "../../components/index";
import { SIZES, icons, COLORS, constants } from "../../constants/index";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { TouchableOpacity } from "@gorhom/bottom-sheet";

const ItemImage = ({
  ratingPress,
  WithoutFeedBackPress,
  ContentContainerStyle,
  onImagePress,
  ImageStyle,
  Iconestyle,
  image,
}) => {
  return (
    <View
      style={{ position: "relative", ...ContentContainerStyle }}
      onPress={WithoutFeedBackPress}
    >
      <TouchableOpacity onPress={onImagePress}>
        <Image
          source={image}
          style={{
            resizeMode: "stretch",
            width: "100%",
            height: 220,
            borderTopLeftRadius: 7,
            borderTopRightRadius: 7,
          }}
        />
      </TouchableOpacity>

      <View
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          backgroundColor: COLORS.lightGrey,
          borderRadius: SIZES.base,
          padding: 5,
          alignItems: "center",
        }}
      >
        <IconeBotten
          containerStyle={{}}
          icone={icons.likeFll}
          iconeStyle={{
            tintColor: COLORS.error,
          }}
          Onpress={ratingPress}
        />
      </View>
    </View>
  );
};

export default ItemImage;
