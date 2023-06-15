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
  HeaderComponent,
  IconeBotten,
  TextButton,
} from "../../components/index";

const Settings = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  // used effect that set the navigation header
  console.log(isEnabled);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Setting",
      headerTitleStyle: {
        ...FONTS.h2,
      },
    });
  }, [navigation]);
  return (
    <View style={style.contaier}>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />
      <Image
        source={icons.setting}
        style={{
          alignSelf: "center",
          tintColor: COLORS.primary80,
          backgroundColor: COLORS.primary08,
          borderRadius: 50,
          padding: 20,
        }}
      />
      <View
        style={{
          backgroundColor: COLORS.light,
          padding: SIZES.padding,
          borderRadius: SIZES.radius,
          marginVertical: SIZES.base,
        }}
      >
        <RenderSettingElement
          toggleFunction={toggleSwitch}
          isEnabled={isEnabled}
          title={"Notifications"}
          subTitle={"Enable or disable notifications"}
        />
        <RenderSettingElement
          toggleFunction={toggleSwitch}
          isEnabled={isEnabled}
          title={"Push Notification"}
          subTitle={"Recive message whenever a new listing is avelable"}
        />
      </View>

      <View
        style={{
          backgroundColor: COLORS.light,
          padding: SIZES.padding,
          borderRadius: SIZES.radius,
          marginVertical: SIZES.base,
        }}
      >
        <RenderSettingElement
          toggleFunction={toggleSwitch}
          isEnabled={isEnabled}
          title={"Setup Wizard"}
          subTitle={"Enable or disable notifications"}
        />
        <RenderSettingElement
          toggleFunction={toggleSwitch}
          isEnabled={isEnabled}
          title={"Sounds"}
          subTitle={"Enable or disable notifications"}
        />
        <RenderSettingElement
          toggleFunction={toggleSwitch}
          isEnabled={isEnabled}
          title={"Sounds"}
          subTitle={"Enable or disable notifications"}
        />
      </View>
    </View>
  );
};

const RenderSettingElement = ({
  title,
  toggleFunction,
  subTitle,
  isEnabled,
}) => {
  return (
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
      <Switch
        trackColor={{ false: COLORS.grey, true: COLORS.primary }}
        thumbColor={isEnabled ? COLORS.light : COLORS.light}
        ios_backgroundColor={COLORS.primary}
        onChange={toggleFunction}
        value={isEnabled}
      />
    </View>
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

export default Settings;
