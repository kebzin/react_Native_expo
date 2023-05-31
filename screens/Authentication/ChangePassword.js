import React, { useState } from "react";
import { FONTS, COLORS, SIZES, icons } from "../../constants/index";
import {
  Text,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
  SafeAreaView,
  StyleSheet,
  Image,
  Keyboard,
} from "react-native";
import { TextButton, InputField } from "../../components/index";
const ChangePassword = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const [confermPassword, setConfermPassword] = useState("");

  //  handle form submit
  const HandleFormSubmit = () => {
    if (password !== confermPassword) {
      return setError("Password do not match. Please try again");
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "AuthMain" }],
    });
  };

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
          Change Your Password
        </Text>

        {/* password  field  */}
        <InputField
          containerStyle={{
            marginTop: 50,
          }}
          Placeholder={"Enter new password"}
          onChange={(text) => setPassword(text)}
          value={password}
          enterKeyHint={"done"}
          inputMode={"text"}
          prependComponent={
            <Image
              source={icons.lock}
              style={{
                width: 25,
                height: 25,
                marginRight: SIZES.base,
              }}
            />
          }
        />
        {/* conferm password field  */}
        <InputField
          containerStyle={{
            marginTop: 5,
          }}
          Placeholder={"Conferm Password"}
          onChange={(text) => setConfermPassword(text)}
          value={confermPassword}
          enterKeyHint={"done"}
          inputMode={"text"}
          prependComponent={
            <Image
              source={icons.lock}
              style={{
                width: 25,
                height: 25,
                marginRight: SIZES.base,
              }}
            />
          }
        />
        <Text
          style={{ alignSelf: "center", marginTop: 30, color: COLORS.error }}
        >
          {Error}
        </Text>

        {/* forget password button */}
        <TextButton
          onPress={HandleFormSubmit}
          label={"Submit"}
          contentContainerStyle={{
            height: 55,
            borderRadius: SIZES.radius,
            marginTop: 50,
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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: SIZES.padding,
    flex: 1,
    backgroundColor: COLORS.light,
  },
});
export default ChangePassword;
