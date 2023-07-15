import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  images,
  constants,
} from "../../constants/index";
import { IconeBotten, InputField } from "../../components/index";

const ViewMessages = ({ route, navigation }) => {
  const [messages, setMessages] = useState();

  const { item, profileImage } = route.params;

  // setting the routh oprion
  useEffect(() => {
    navigation.setOptions({
      title: item.title,
      headerTitleStyle: {
        ...FONTS.body3,
        letterSpacing: 0,
      },
      headerLeft: (props) => (
        <View style={{ flexDirection: "row", alignItem: "center", gap: 20 }}>
          <IconeBotten
            Onpress={() => navigation.goBack()}
            icone={icons.arrow_left}
            iconeStyle={{ tintColor: COLORS.dark }}
          />

          <IconeBotten
            icone={images.banner02}
            iconeStyle={{
              tintColor: null,
              width: 40,
              height: 40,
              borderRadius: 50,
              resizeMode: "contain",
            }}
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      enabled={true}
      // behavior={Platform.OS === "ios" ? "padding" : "padding"}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 10,
            paddingVertical: SIZES.padding,
          }}
        >
          {/* flat list */}
          <FlatList
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={constants.Message}
            inverted={true}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    paddingHorizontal: SIZES.padding - 20,
                    paddingVertical: SIZES.base - 5,
                    maxWidth: 330,
                    alignSelf: item.owner === true ? "flex-start" : "flex-end",
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: COLORS.light,
                      padding: SIZES.padding - 17,
                      borderRadius: SIZES.padding,
                      borderBottomStartRadius: 0,
                      borderTopEndRadius: 0,
                      overflow: "hidden",
                      marginBottom:
                        index === constants.Message.length - 1 ? 50 : null,
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          color:
                            item.owner === true
                              ? COLORS.primary
                              : COLORS.success,
                          ...FONTS.h5,
                        }}
                      >
                        {item.owner === true ? "You" : "From: 2493268"}
                      </Text>
                      {item.id === 4 ? (
                        <Image
                          source={images.walkthrough_01_01}
                          style={{
                            resizeMode: "stretch",
                            width: 300,
                            height: 200,
                          }}
                        />
                      ) : null}

                      <Text>{item.description}</Text>
                      <Image
                        source={icons.done}
                        style={{
                          width: 20,
                          height: 20,
                          alignSelf: "flex-end",
                          tintColor:
                            item.owner === true ? COLORS.primary : null,
                        }}
                      />
                    </View>
                  </View>
                  <Text
                    style={{
                      color: COLORS.grey,
                      ...FONTS.body5,
                      alignSelf: "flex-end",
                    }}
                  >
                    {item.date}
                  </Text>
                </View>
              );
            }}
          />
        </View>

        {/* input field */}
        <View style={{ flex: 1 }}>
          <InputField
            onChange={(text) => setMessages(text)}
            inputMode={"text"}
            multiline={true}
            value={messages}
            Placeholder={"Type a Message"}
            containerStyle={{
              backgroundColor: COLORS.light,
              borderRadius: SIZES.base,
              marginHorizontal: SIZES.padding,
            }}
            inputStyle={{}}
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
      </View>
    </KeyboardAvoidingView>
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

//
//
// <View style={style.container}>
// {/* displaying the message using flatlist */}
{
  /* <FlatList */
}
// keyExtractor={(item) => item.id}
// showsVerticalScrollIndicator={false}
// showsHorizontalScrollIndicator={false}
// data={constants.Message}
// renderItem={({ item, index }) => {
// return (
// <View
// style={{
// paddingHorizontal: SIZES.padding - 20,
// paddingVertical: SIZES.base - 5,
// maxWidth: 300,
// alignSelf: item.owner === true ? "flex-start" : "flex-end",
// flex: 1,
// }}
// >
{
  /* <View> */
}
{
  /* <View */
}
// style={{
// backgroundColor: COLORS.light,
// padding: SIZES.padding - 10,
// borderRadius: SIZES.padding,
// borderBottomStartRadius: 0,
// borderTopEndRadius: 0,
// marginBottom:
// index === constants.Message.length - 1 ? 70 : null,
// }}
// >
{
  /* <Text */
}
// style={{
// color:
// item.owner === true
// ? COLORS.primary
// : COLORS.success,
// ...FONTS.body5,
// }}
// >
{
  /* {item.owner === true ? "You" : "From 2493268"} */
}
{
  /* </Text> */
}
{
  /* <Text>{item.description}</Text> */
}
{
  /* </View> */
}
{
  /* <Text style={{ color: COLORS.grey, ...FONTS.body5 }}> */
}
{
  /* {item.date} */
}
{
  /* </Text> */
}
{
  /* </View> */
}
{
  /* </View> */
}
// );
// }}
{
  /* /> */
}
{
  /* <View */
}
// style={{
// flex: 1,
// position: "absolute",
// left: 0,
// right: 0,
// bottom: 20,
// backgroundColor: COLORS.lightGrey,
// height: 60,
// paddingTop: SIZES.padding,
// }}
{
  /* > */
}
{
  /* <InputField */
}
// onChange={(text) => setMessages(text)}
// inputMode={"text"}
// multiline={true}
// value={messages}
// Placeholder={"Type a Message"}
// containerStyle={{
// backgroundColor: COLORS.light,
// borderRadius: SIZES.base,
// marginHorizontal: SIZES.padding,
// }}
// inputStyle={{}}
// appendComponent={
// <IconeBotten
// icone={icons.send}
// iconeStyle={{
// tintColor: COLORS.primary,
// }}
// />
// }
// />
{
  /* </View> */
}
{
  /* </View> */
}
