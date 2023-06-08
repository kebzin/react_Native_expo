import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../constants/index";
import { TextButton, InputField, IconeBotten } from "../components/index";

const Login = ({ navigation }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={style.Containe}>
      <View style={style.secondContainer}>
        <Text style={{ width: "60%", ...FONTS.h2 }}>Sign in to Continue</Text>
        {/* inputfields  */}

        {/* 1 Email Field */}
        <InputField
          inputContainerStyle={{
            backgroundColor: COLORS.lightGrey80,
          }}
          containerStyle={{
            marginTop: 50,
            marginBottom: 10,
          }}
          Placeholder={"Enter  Email Address"}
          onChange={(text) => setEmail(text)}
          inputMode={"email"}
          value={Email}
          prependComponent={
            <Image
              source={icons.email}
              style={{
                width: 25,
                height: 25,
                marginRight: SIZES.base,
              }}
            />
          }
        />

        {/* 2 Password input */}
        <InputField
          inputContainerStyle={{
            backgroundColor: COLORS.lightGrey80,
          }}
          containerStyle={{
            marginTop: 1,
            marginBottom: 10,
          }}
          Placeholder={"Enter  Password"}
          onChange={(text) => setPassword(text)}
          value={Password}
          secureTextEntery={!isVisible}
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
          appendComponent={
            <IconeBotten
              icone={isVisible ? icons.eye_off : icons.eye}
              iconeStyle={{ tintColor: COLORS.primary }}
              Onpress={() => setIsVisible(!isVisible)}
            />
          }
        />

        {/* forget password  */}
        <View
          style={{
            alignItems: "flex-end",
            marginHorizontal: SIZES.base,
            marginVertical: SIZES.radius,
          }}
        >
          <TextButton
            onPress={() => navigation.navigate("ForgetPassword")}
            label={"Forget Password"}
            contentContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary80,
              ...FONTS.h5,
            }}
          />
        </View>

        <TextButton
          onPress={() => navigation.navigate("Home")}
          label={"Log In"}
          contentContainerStyle={{
            height: 50,
            borderRadius: SIZES.radius,
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  Containe: {
    height: SIZES.height * 0.55,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 3.25,
    shadowRadius: 3.84,
    elevation: 10,
    borderRadius: SIZES.radius,
    width: SIZES.width - SIZES.padding * 2,
    justifyContent: "center",
    // flex: 1,
  },
  secondContainer: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.radius,
    width: SIZES.width - SIZES.padding * 2,
    flex: 1,
    justifyContent: "center",
  },
});

export default Login;
