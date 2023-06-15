import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SIZES, COLORS, FONTS, constants, icons } from "../../constants/index";
import { InputField } from "../../components/index";

const Search = () => {
  // state
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [suggestion, setSuggestion] = useState(false);
  // hooks

  // function suggeandeller
  const handleSuggestionClick = (itemId) => {
    // Perform task based on itemId
    switch (itemId) {
      case 1:
        // Task 1: fetch all the post related to the appartment
        console.log("Appartment");
        break;
      case 2:
        // Task 2 : fetch all the post related to the Hotels
        console.log("Hotels");
        break;
      case 3:
        // Task 3 : fetch all the post related to the shop
        console.log("Shop");
        break;
      case 4:
        // Task 4: fetch all the post related to the Rooms
        break;
      case 5:
        // Task 5:
        break;
      case 6:
        // Task 2
        break;
      case 7:
        // Task 2
        break;
      case 2:
        // Task 2
        break;

      default:
        break;
    }
  };

  const Navigation = useNavigation();
  return (
    <View style={style.container}>
      <InputField
        onChange={(text) => setSearch(text)}
        value={search}
        Placeholder={"Search"}
        prependComponent={
          <Image source={icons.search} style={style.ImputField} />
        }
        appendComponent={
          <Image source={icons.camera} style={style.ImputField} />
        }
      />

      {/*  show suggestion only when the user is not typin in the input field */}
      {
        <View style={style.suggestContainer}>
          <Text style={{ ...FONTS.h3 }}>Suggest to you</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: SIZES.padding,
              alignItems: "center",
              gap: 10,
            }}
          >
            {constants.Suggestion.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleSuggestionClick(item.id)}
              >
                <View
                  style={{
                    //   backgroundColor: COLORS.support5_08,
                    padding: SIZES.base - 5,
                    borderRadius: SIZES.radius - 5,
                    borderColor: COLORS.grey20,
                    padding: 5,
                    borderRadius: 5,
                    borderWidth: 1,
                  }}
                >
                  <Text
                    style={{
                      ...FONTS.body5,

                      color: COLORS.grey,
                    }}
                  >
                    {item.label}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      }
    </View>
  );
};

{
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding - 10,
    flex: 1,
    paddingVertical: SIZES.padding,
    backgroundColor: COLORS.lightGrey,
  },

  ImputField: {
    width: 25,
    height: 25,
    tintColor: COLORS.grey,
  },
  suggestContainer: {
    marginVertical: SIZES.padding,
  },
});

export default Search;
