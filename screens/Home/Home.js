import React, { useRef, useState } from "react";
import { View, FlatList, Animated, Text, Image } from "react-native";
import {
  HeaderComponent,
  CategoryAndInputCombine,
  IconeBotten,
} from "../../components/index";
import { SIZES, icons, COLORS } from "../../constants/index";

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
    return <View>{/* Your item component */}</View>;
  };

  //  navigate to message
  const HandleMessageNavigation = () => {
    // check if the user is log in or not
    navigation.navigate("message");
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.light }}>
      {/* header component  */}

      <HeaderComponent
        scrollY={scrollY}
        Title={"Home"}
        messagePress={HandleMessageNavigation}
      />
      {/* input and category component */}
      <CategoryAndInputCombine scrollY={scrollY} />
      {/* category */}
      <View
        style={{
          paddingVertical: SIZES.padding,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      ></View>
    </View>
  );
};

export default Home;
