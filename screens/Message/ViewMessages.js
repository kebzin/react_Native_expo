import React, { useCallback, useEffect, useRef, useState } from "react";
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
import { IconeBotten, InputField } from "../../components";
import { log } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const ViewMessages = ({ route, navigation }) => {
  const { item } = route.params;

  // setting the routh oprion
  useEffect(() => {
    navigation.setOptions({
      title: item.title,
      headerStyle: {},
    });
  }, [navigation]);

  return (
    <View style={style.container}>
      <Text>View message </Text>

      <InputField
        Placeholder={"Type a Message"}
        containerStyle={{
          alignItem: "center",
          justifyContent: "center",
          backgroundColor: COLORS.light,
        }}
        appendComponent={
          <IconeBotten
            icone={icons.send}
            iconeStyle={{
              tintColor: COLORS.primary,
            }}
          />
        }
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding - 10,
    flex: 1,
    paddingVertical: SIZES.base,
    // justifyContent:'center'
  },
});

export default ViewMessages;
