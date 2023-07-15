import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  FlatList,
  Animated,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {
  HeaderComponent,
  CategoryAndInputCombine,
  IconeBotten,
  BottomSheetEmptyView,
  TextButton,
  CategorySectionHome,
  InputField,
} from "../../components/index";
import {
  SIZES,
  icons,
  COLORS,
  constants,
  FONTS,
  dummyData,
} from "../../constants/index";

const PropertyDetails = ({ navigation, route }) => {
  const { item } = route.params;

  useEffect(() => {
    // call the property item api
  });
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.lightGrey}
        animated={true}
      />
      {/* back button and item  */}
      <View style={{ position: "relative" }}>
        <Image
          source={item.image}
          style={{
            width: SIZES.width,
            height: SIZES.height * 0.45,
            borderEndWidth: 2,
            borderColor: "red",
            resizeMode: "stretch",

            zIndex: 100,
          }}
        />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.lightGrey,
    marginTop: 0,
  },
  imageStyle: {
    resizeMode: "contain",
  },
});
export default PropertyDetails;
