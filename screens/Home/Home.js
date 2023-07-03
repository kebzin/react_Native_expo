import React, { useRef, useState } from "react";
import {
  View,
  FlatList,
  Animated,
  Text,
  Image,
  StatusBar,
  StyleSheet,
} from "react-native";
import {
  HeaderComponent,
  CategoryAndInputCombine,
  IconeBotten,
} from "../../components/index";
import { SIZES, icons, COLORS, constants, FONTS } from "../../constants/index";
import ItemImage from "./ItemImage";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]); // Initial data array
  const [page, setPage] = useState(1); // Current page of data

  const scrollY = useRef(new Animated.Value(0)).current; // tracking the scroll position base on the vale provided

  const fetchMoreData = () => {
    // Fetch additional data from API and append it to the existing data array
    // Update the page number accordingly
  };

  const renderItem = ({ item }) => {
    // Render individual items within the FlatList
    return (
      <View
        style={{
          marginHorizontal: SIZES.padding - 10,
          backgroundColor: COLORS.light,
          marginVertical: SIZES.base,
          borderRadius: SIZES.radius,
        }}
      >
        <View style={{ padding: 10 }}>
          <ItemImage image={item.image} />
          <Details
            NumberofBedIcon={icons.bed}
            NumberofBathIcon={icons.bath}
            categoryIcon={icons.appartment}
            NumberOfbath={"2"}
            NumberOfbed={"3"}
          />
        </View>
      </View>
    );
  };

  //  navigate to message
  const HandleMessageNavigation = () => {
    // check if the user is log in or not
    navigation.navigate("message");
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGrey }}>
      {/* header component  */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.lightGrey}
        animated={true}
      />
      <HeaderComponent
        scrollY={scrollY}
        onPress={() => navigation.navigate("Notification")}
        messagePress={HandleMessageNavigation}
      />
      {/* input and category component */}
      <CategoryAndInputCombine scrollY={scrollY} />
      {/* category */}
      <FlatList
        data={constants.walkthrough}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        ListHeaderComponentStyle={{}}
        // onEndReached={fetchMoreData}
        onEndReachedThreshold={0.5}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: false,
          }
        )}
        contentContainerStyle={{}} // Adjust the paddingTop value to make space for the fixed header
      />
    </View>
  );
};

export default Home;

const Details = ({
  title,
  categoryIcon,
  NumberofBedIcon,
  NumberOfbed,
  NumberofBathIcon,
  NumberOfbath,
  sizeAmount,
  SizeIcone,
}) => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <IconeBotten icone={categoryIcon} iconeStyle={style.categoryIcon} />
        <Text style={{ ...FONTS.h5, color: COLORS.success }}>Appartment</Text>
      </View>

      <Text style={{ ...FONTS.h5 }}>Waiga`s Estate Rent House</Text>
      <Text style={{ ...FONTS.body4, color: COLORS.grey }}>
        Live: Kotou Mangai kunda
      </Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ ...FONTS.h5, color: COLORS.primary }}>GMD: 3,000</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <IconeBotten iconeStyle={style.categoryIcon} />
            <IconeBotten />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", gap: 2 }}>
          <IconeBotten
            icone={NumberofBedIcon}
            iconeStyle={style.SmallIconeStyle}
          />
          <Text style={style.DetailSmallText}>{NumberOfbed} Bead</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 2 }}>
          <IconeBotten
            icone={NumberofBathIcon}
            iconeStyle={style.SmallIconeStyle}
          />
          <Text style={style.DetailSmallText}>{NumberOfbath} Bath</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 2 }}>
          <IconeBotten icone={SizeIcone} iconeStyle={style.SmallIconeStyle} />
          <Text>{sizeAmount} sqft</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  SmallIconeStyle: {
    width: 20,
    height: 20,
    tintColor: COLORS.grey80,
  },
  DetailSmallText: {
    ...FONTS.body5,
  },
  ratingIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.support2,
  },
  categoryIcon: {
    width: 25,
    height: 25,
    tintColor: COLORS.success,
  },
});
