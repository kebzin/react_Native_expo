import React from "react";
import { BottomSheetEmptyView, TextButton } from "../components";
import { Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { useState } from "react";

const LoginPopUp = ({
  navigation,
  modalVisible,
  setModalVisible,
  cancelFunction,
}) => {
  return (
    <BottomSheetEmptyView
      openModal={modalVisible}
      height={SIZES.padding * 10}
      renderChildrents={
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            paddingVertical: SIZES.padding - 5,
          }}
        >
          <Text style={{ textAlign: "center", ...FONTS.h4 }}>
            Login confermation
          </Text>
          <Text
            style={{ textAlign: "center", marginTop: 10, color: COLORS.grey }}
          >
            please Login to access all fictures of this application
          </Text>
          <TextButton
            label={"Log In"}
            onPress={() => {
              setModalVisible(false);
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: "AuthMain",
                    params: {
                      register: true,
                    },
                  },
                ],
              });
            }}
            contentContainerStyle={{
              marginTop: 10,
              borderRadius: SIZES.radius,
              height: 40,
            }}
          />
          <TextButton
            label={"Register"}
            onPress={() => {
              setModalVisible(false);
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: "AuthMain",
                    params: {
                      register: true,
                    },
                  },
                ],
              });
            }}
            contentContainerStyle={{
              marginTop: 10,
              borderRadius: SIZES.radius,
              height: 40,
            }}
          />
          <TextButton
            label={"Cancel"}
            onPress={cancelFunction}
            contentContainerStyle={{
              marginVertical: SIZES.padding - 10,
              backgroundColor: null,
            }}
          />
        </View>
      }
    />
  );
};

export default LoginPopUp;
