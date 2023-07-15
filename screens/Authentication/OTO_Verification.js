import React, { useCallback, useEffect, useRef, useState } from "react";
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
import {
  TextButton,
  InputField,
  BottomSheetDialog,
} from "../../components/index";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheet,
} from "@gorhom/bottom-sheet";

const OTO_Verification = ({ navigation }) => {
  const [Phone, setPHone] = useState("");
  const [Modal, SetModal] = useState(false);
  const bottomSheetModalRef = useRef(null);

  // functions
  // Handle Buttomsheet
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    Keyboard.dismiss();
  }, []);

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
          Enter OTP sent to your phone
        </Text>

        {/* phone nuber field  */}
        <InputField
          containerStyle={{
            marginBottom: 50,
            marginTop: 50,
          }}
          Placeholder={"2 4 9 3 2"}
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
          onPress={handlePresentModalPress}
          label={"Submit"}
          contentContainerStyle={{
            height: 55,
            borderRadius: SIZES.radius,
            marginTop: 100,
          }}
          labelStyle={{
            ...FONTS.h5,
          }}
        />

        <BottomSheetDialog
          bottomSheetModalRef={bottomSheetModalRef}
          Title={"OTP code Succesfull"}
          ButtonText={"Continue"}
          Icone={icons.checkmark}
          Status={"Success"}
          Message={"Your OTP code is succesfilly conferm "}
          HandleClick={() => {
            bottomSheetModalRef.current?.close(),
              navigation.navigate("ChangePassword");
          }}
        />
      </SafeAreaView>
      {/* bottom sheet  */}
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
export default OTO_Verification;
