import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  StatusBar,
  Switch,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { COLORS, FONTS, SIZES, icons, images } from "../../constants/index";
import {
  BottomSheetDialog,
  BottomSheetEmptyView,
  HeaderComponent,
  IconeBotten,
  TextButton,
} from "../../components/index";

const Account = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [openModal, setShowModal] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  // used effect that set the navigation header

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Account",
      headerTitleStyle: {
        ...FONTS.h2,
      },
    });
  }, [navigation]);
  return (
    <View style={style.contaier}>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />

      <View
        style={{
          backgroundColor: COLORS.light,
          padding: SIZES.padding,
          borderRadius: SIZES.radius,
          marginVertical: SIZES.base,
        }}
      >
        <RenderAccountElement
          toggleFunction={() => navigation.navigate("ProfileInfo")}
          isEnabled={isEnabled}
          title={"Account Information"}
          subTitle={"See your account info"}
        />
        <RenderAccountElement
          toggleFunction={toggleSwitch}
          isEnabled={isEnabled}
          title={"Password"}
          subTitle={"Change your Password"}
        />
        <RenderAccountElement
          toggleFunction={() => setShowModal(true)}
          title={"Delete Account"}
          subTitle={
            "Your Account will be deleted permanently and cannot be recoverd"
          }
        />
      </View>
      <BottomSheetEmptyView
        height={300}
        openModal={openModal}
        setShowModal={setShowModal}
        renderChildrents={
          <View>
            <Text
              style={{
                textAlign: "center",
                ...FONTS.h3,
                marginVertical: SIZES.base,
              }}
            >
              Delete Account
            </Text>
            <Text
              style={{
                textAlign: "center",
                ...FONTS.body4,
                paddingHorizontal: SIZES.padding,
                color: COLORS.grey80,
              }}
            >
              If you choosed to delete your account instate , you wont be able
              to recover it, All the content related to your account will be
              deleted permanently
            </Text>
            <TextButton
              label={"Delete Account"}
              contentContainerStyle={{
                margin: SIZES.padding,
                borderRadius: SIZES.radius - 3,
                height: 50,
                backgroundColor: COLORS.error,
              }}
            />
            <TextButton
              onPress={() => setShowModal(false)}
              label={"Cancel"}
              contentContainerStyle={{
                margin: SIZES.padding,
                backgroundColor: null,
              }}
            />
          </View>
        }
      />
    </View>
  );
};

const RenderAccountElement = ({
  title,
  toggleFunction,
  subTitle,
  isEnabled,
}) => {
  return (
    <TouchableOpacity onPress={toggleFunction}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: SIZES.base,
        }}
      >
        <View style={{ width: "80%" }}>
          <Text style={{ ...FONTS.h4 }}>{title}</Text>
          <Text style={{ color: COLORS.grey, ...FONTS.body5, lineHeight: 15 }}>
            {subTitle}
          </Text>
        </View>
        <IconeBotten
          icone={icons.arrowRight}
          iconeStyle={{
            tintColor: COLORS.grey,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  contaier: {
    flex: 1,
    backgroundColor: COLORS.lightGrey,
    paddingHorizontal: SIZES.padding - 10,
    paddingVertical: SIZES.base,
  },
});

export default Account;
