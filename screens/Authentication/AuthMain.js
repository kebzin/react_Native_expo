import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import {
  COLORS,
  SIZES,
  FONTS,
  constants,
  icons,
  images,
} from "../../constants/index";
import { Image } from "react-native";
import { Register, Login, TextButton } from "../../components/index";
import { Colors } from "react-native/Libraries/NewAppScreen";

const AuthMain = ({ navigation }) => {
  const [mode, setmode] = useState(true);
  // handle key board press
  const handlePress = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.lightGrey,
          paddingHorizontal: SIZES.padding,

          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* logo */}
        <Image source={images.logo} alt="logo" style={styles.logo} />

        {mode === false ? (
          <Register navigation={navigation} />
        ) : (
          <Login navigation={navigation} />
        )}

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            marginVertical: SIZES.padding,
            TextAlign: "center",
          }}
        >
          <Text
            style={{
              ...FONTS.h6,
              color: COLORS.grey,
            }}
          >
            {mode === true
              ? "Don't have an Account "
              : " Already have an Account"}
          </Text>
          <TextButton
            label={mode === true ? "Creat Account" : "Login Now"}
            onPress={() => setmode((prev) => !prev)}
            contentContainerStyle={{
              flex: 1,
              height: 30,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary80,
              ...FONTS.body4,
            }}
          />
        </View>
        {mode === true ? (
          <View
            style={{
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ ...FONTS.body4, paddingBottom: 10 }}>
              Or login with
            </Text>
            <TouchableOpacity>
              <Image style={{ width: 30, height: 30 }} source={icons.google} />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </TouchableWithoutFeedback>

    // login  or register
    // here w are setting that if the mode is login then login component will be register else if the mode is register then the register component will be register
  );
};

const styles = StyleSheet.create({
  logo: {
    alignSelf: "center",
    height: 50,
    width: 50,
    marginTop: SIZES.padding * 2,
  },
});

export default AuthMain;
