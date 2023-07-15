import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";

import { TextButton } from "../../components";
import { COLORS, FONTS, SIZES, images } from "../../constants";
import { checkAuthentication } from "../../healper/AuthenticationHealper";
import { useDispatch, useSelector } from "react-redux";
import { isLogin, selectIsLogin } from "../../features/auth/authSlice";

const Welcome = ({ navigation }) => {
  const dispatch = useDispatch();
  const IsLogin = useSelector(selectIsLogin);
  useEffect(() => {
    let isMounted = true; // Flag to track component mount status
    const authenticateUser = async () => {
      const isAuthenticated = await checkAuthentication(dispatch);
      if (!isMounted) {
        return; // Abort the action if the component has unmounted
      }
      if (!isAuthenticated) {
        navigation.navigate("Home");
      }
      navigation.navigate("Home");
      // Display the login message after a delay of 3 seconds
    };

    // Set the isLogin state to true
    dispatch(isLogin({ isLogin: true }));

    // Call the authenticateUser function
    authenticateUser();
    // Cleanup function
    return () => {
      isMounted = false; // Set the flag to false when the component unmounts
    };
  }, [dispatch, navigation]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.light,
      }}
    >
      {/* Logo & Title */}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={images.logo}
          style={{
            width: 150,
            height: 150,
          }}
        />

        <Text style={{ marginTop: SIZES.padding, ...FONTS.h1 }}>
          Welcome to
        </Text>
        <Text style={{ marginTop: SIZES.base, ...FONTS.h1 }}>W_Rental</Text>
      </View>

      {/* Footer Buttons */}
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          marginBottom: 30,
        }}
      >
        <TextButton
          contentContainerStyle={{
            height: 50,
            borderRadius: SIZES.radius,
          }}
          label="Get Started"
          onPress={() => navigation.navigate("Walkthrough")}
        />

        <TextButton
          contentContainerStyle={{
            height: 50,
            marginTop: SIZES.base,
            backgroundColor: null,
          }}
          label="Already have an account"
          labelStyle={{
            color: COLORS.primary,
          }}
          //onPress
        />
      </View>
    </View>
  );
};

export default Welcome;
