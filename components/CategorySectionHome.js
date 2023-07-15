import React from "react";
import { FlatList } from "react-native";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, SIZES, constants, dummyData } from "../constants";

const CategorySectionHome = () => {
  return (
    <View style={{}}>
      <FlatList
        data={constants.scan_product_option}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item }) => {
          return (
            <View
              style={{
                alignItems: "center",
                marginRight: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  paddingVertical: 10,
                  backgroundColor: COLORS.primary08,
                  borderRadius: 5,
                  width: SIZES.width / 3.8,
                  alignItems: "center",
                }}
              >
                {/* <Image
                  source={item.image}
                  style={{
                    resizeMode: "center",
                    width: 20,
                    height: 20,
                    tintColor: COLORS.primary,
                  }}
                /> */}
                <Text style={{ color: COLORS.dark, ...FONTS.h5 }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CategorySectionHome;
