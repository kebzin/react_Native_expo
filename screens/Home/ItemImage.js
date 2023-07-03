import React from "react";
import { View, FlatList, Animated, Text, Image, StatusBar } from "react-native";
import { IconeBotten } from "../../components/index";
import { SIZES, icons, COLORS, constants } from "../../constants/index";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ItemImage = ({
  ratingPress,
  WithoutFeedBackPress,
  ContentContainerStyle,
  ImageStyle,
  Iconestyle,
  image,
}) => {
  return (
    <TouchableWithoutFeedback
      style={{ position: "relative", ...ContentContainerStyle }}
      onPress={WithoutFeedBackPress}
    >
      <View style={{ position: "relative" }}>
        <Image
          source={image}
          style={{ resizeMode: "stretch", width: "100%", height: 230 }}
        />
        <IconeBotten
          containerStyle={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
          icone={icons.likeFll}
          iconeStyle={{
            tintColor: COLORS.error,
          }}
          Onpress={ratingPress}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ItemImage;
