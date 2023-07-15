import React, { useState } from "react";
import { FONTS, COLORS, SIZES, icons } from "../../constants/index";
import {
  Text,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
  SafeAreaView,
  StyleSheet,
  Image,
  Keyboard,
} from "react-native";
import { TextButton, InputField } from "../../components/index";
const ForgetPassword = ({ navigation }) => {
  const [Phone, setPHone] = useState("");

  //   handle keyboard dismissed when input release
  const HandleKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    // handeling the safer area view depend on the operationg system
    <TouchableWithoutFeedback onPress={HandleKeyboard}>
      <SafeAreaView style={style.container}>
        <Text
          style={{
            ...FONTS.h1,
          }}
        >
          Continue using Phone Number
        </Text>

        {/* phone nuber field  */}
        <InputField
          containerStyle={{
            marginBottom: 50,
            marginTop: 50,
          }}
          Placeholder={"+220 2493268"}
          onChange={(text) => setPHone(text)}
          value={Phone}
          enterKeyHint={"done"}
          inputMode={"tel"}
          prependComponent={
            <Image
              source={icons.phone}
              style={{
                width: 25,
                height: 25,
                marginRight: SIZES.base,
              }}
            />
          }
        />

        {/* forget password button */}
        <TextButton
          onPress={() => navigation.navigate("VerificationCod")}
          label={"Send Verification Code"}
          contentContainerStyle={{
            height: 55,
            borderRadius: SIZES.radius,
            marginTop: 100,
          }}
          labelStyle={{
            ...FONTS.h5,
          }}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: SIZES.padding,
    flex: 1,
    backgroundColor: COLORS.lightGrey,
  },
});
export default ForgetPassword;
