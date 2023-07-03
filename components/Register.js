import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../constants/index";
import {
  TextButton,
  InputField,
  IconeBotten,
  CheckBox,
} from "../components/index";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../features/user/UserSlice";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [phoneNumber, setPHone] = useState("");
  const [termCheck, setTermCheck] = useState(false);
  const [Password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  // hook
  const dispatch = useDispatch();

  // const canSave =
  //   Boolean(firstName) &&
  //   Boolean(lastName) &&
  //   Boolean(Email) &&
  //   Boolean(phoneNumber) &&
  //   Boolean(Password) &&
  //   Boolean(termCheck);

  const onRegisterUser = async () => {
    // if (canSave) {
    try {
      setAddRequestStatus("pending");
      await dispatch(
        RegisterUser({
          firstName,
          lastName,
          phoneNumber,
          Password,
          Email,
          termCheck,
        })
      ).unwrap();
      setFirstName("");
      setLastName("");
      setPHone("");
      setPassword("");
      setEmail("");
      setTermCheck(false);
    } catch (err) {
      console.error(err.message);
    } finally {
      setAddRequestStatus("idle");
    }
  };

  return (
    <View style={style.Containe}>
      <View style={style.secondContainer}>
        <Text style={{ width: "60%", ...FONTS.h2 }}>Creat new account</Text>
        {/* Input fields  */}

        {/* UserName */}
        <InputField
          inputContainerStyle={{
            backgroundColor: COLORS.lightGrey80,
          }}
          containerStyle={{
            marginTop: 50,
            marginBottom: 10,
          }}
          Placeholder={"Enter First Name"}
          onChange={(text) => setFirstName(text)}
          value={firstName}
          inputMode={"text"}
          prependComponent={
            <Image
              source={icons.person}
              style={{
                width: 25,
                height: 25,
                marginRight: SIZES.base,
              }}
            />
          }
        />

        {/* lastname */}
        <InputField
          inputContainerStyle={{
            backgroundColor: COLORS.lightGrey80,
          }}
          containerStyle={{
            marginTop: 5,
            marginBottom: 10,
          }}
          Placeholder={"Enter Last Name"}
          onChange={(text) => setLastName(text)}
          value={lastName}
          inputMode={"text"}
          prependComponent={
            <Image
              source={icons.person}
              style={{
                width: 25,
                height: 25,
                marginRight: SIZES.base,
              }}
            />
          }
        />

        {/* email Address */}
        <InputField
          inputContainerStyle={{
            backgroundColor: COLORS.lightGrey80,
          }}
          containerStyle={{
            marginBottom: 10,
          }}
          Placeholder={"Someone@gmail.com"}
          onChange={(text) => setEmail(text)}
          value={Email}
          inputMode={"email"}
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
        {/* phone Numbr */}
        <InputField
          inputContainerStyle={{
            backgroundColor: COLORS.lightGrey80,
          }}
          containerStyle={{
            marginBottom: 10,
          }}
          Placeholder={"+220 2493268"}
          onChange={(text) => setPHone(text)}
          value={phoneNumber}
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

        {/* password field */}
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

        {/* check box */}
        <View
          style={{
            flexDirection: "row",
            gap: 5,
          }}
        >
          <CheckBox
            isSelected={termCheck}
            Onpress={() => setTermCheck(!termCheck)}
          />

          <Text
            style={{
              ...FONTS.body5,
            }}
          >
            By registering you have accepted to the user{" "}
            <Text style={{ color: COLORS.primary }}>terms and conduction</Text>
          </Text>
        </View>

        {/* register button  */}
        <TextButton
          onPress={onRegisterUser}
          label={"Create Account"}
          contentContainerStyle={{
            height: 50,
            marginTop: 20,
            borderRadius: SIZES.radius,
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  Containe: {
    height: SIZES.height * 0.8,
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
  },
  secondContainer: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.radius,
    width: SIZES.width - SIZES.padding * 2,
    flex: 1,
  },
});

export default Register;
