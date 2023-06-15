import React, { useCallback, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  images,
  constants,
} from "../../constants/index";

const Message = ({ navigation }) => {
  // Handle navigation function
  const HandleNavigation = (item) => {
    return navigation.navigate("ViewMessages", {
      item,
    });
  };

  //
  return (
    <View style={style.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} />
      <FlatList
        keyExtractor={(item) => item.id}
        decelerationRate={"fast"}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        data={constants.Message}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => HandleNavigation(item)}>
              <View style={style.RenderMessageContainer}>
                <View style={{ flexDirection: "row", gap: 8, width: "70%" }}>
                  <Image
                    source={
                      item.id === 1
                        ? images.banner02
                        : item.id === 2
                        ? images.banner03
                        : item.id === 3
                        ? images.buy_coffee
                        : item.id === 4
                        ? images.get_reward
                        : item.id === 5
                        ? images.lock
                        : item.id === 6
                        ? images.walkthrough_04_04
                        : images.qr_code
                    }
                    style={{ width: 45, height: 45, borderRadius: 50 }}
                  />
                  <View style={{}}>
                    <Text style={{ ...FONTS.h4 }}>{item.title}</Text>
                    <Text
                      numberOfLines={1}
                      style={{ color: COLORS.grey, ...FONTS.body4 }}
                    >
                      {item.description}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      ...FONTS.body5,
                      color: COLORS.grey,
                      textAlign: "right",
                    }}
                  >
                    {item.date}
                  </Text>
                  <Text
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 50,
                      backgroundColor: COLORS.primary,
                      color: COLORS.light,
                      alignSelf: "flex-end",
                      textAlign: "center",
                    }}
                  >
                    {item.number}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding - 10,
    paddingVertical: SIZES.base,
    flex: 1,
  },
  RenderMessageContainer: {
    backgroundColor: COLORS.light,
    height: SIZES.padding * 4,
    borderRadius: SIZES.radius,
    marginVertical: SIZES.base - 3,
    paddingHorizontal: SIZES.base,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Message;
