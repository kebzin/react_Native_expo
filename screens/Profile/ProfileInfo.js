import React, { useRef, useState } from "react";
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
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { COLORS, FONTS, SIZES, icons, images } from "../../constants/index";
import {
  HeaderComponent,
  IconeBotten,
  TextButton,
} from "../../components/index";
import { ColorSpace } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectIsLogin,
} from "../../features/auth/authSlice";

const ProfileInfo = ({ navigation }) => {
  const dispatch = useDispatch();
  const LoginUser = useSelector(selectCurrentToken);
  return (
    <View style={style.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      <View style={style.secondContainer}>
        <IconeBotten
          icone={icons.edit}
          Onpress={() => navigation.navigate("EditProfile")}
          iconeStyle={{
            tintColor: COLORS.grey,
          }}
          containerStyle={{
            alignSelf: "flex-end",
            paddingRight: SIZES.padding,
            paddingTop: SIZES.base,
          }}
        />
        <ScrollView
          contentContainerStyle={style.scrollViewContentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={style.profileInfoContainer}>
            <Image style={style.profileImage} source={icons.logo} />
            <Text style={{ ...FONTS.h3, paddingTop: SIZES.h3 }}>
              {LoginUser?.user?.firstName + " " + LoginUser.user?.lastName}
            </Text>
          </View>
          {/* profile info */}

          <ProfileDetaile
            title={"Email"}
            description={LoginUser?.user?.Email}
          />
          <ProfileDetaile
            title={"Phone Number"}
            description={"+ 220" + " " + LoginUser?.user?.PhoneNumber}
          />
          <ProfileDetaile
            title={"Social Network"}
            description={"My other Plateforms"}
            facebook={icons.google}
            twitter={icons.twitter}
            instagram={icons.linkedin}
          />

          <ProfileDetaile title={"Date of Birth"} description={"27/may/2000"} />
          <ProfileDetaile title={"Gender"} description={"Male"} />
          <ProfileDetaile
            title={"Account Type "}
            description={"Bussiness Account"}
          />
          <ProfileDetaile
            title={"Company Name"}
            description={"Real Estate Rental LTD"}
          />
          <ProfileDetaile title={"Website"} description={"www.Rental.com"} />
          <ProfileDetaile
            title={"Location"}
            description={"Sukuta Trafic lightz"}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const ProfileDetaile = ({
  title,
  description,
  facebook,
  instagram,
  twitter,
}) => {
  const socialMediaIcons = [
    { icon: facebook, name: "Facebook" },
    { icon: instagram, name: "Instagram" },
    { icon: twitter, name: "Twitter" },
  ];

  const renderSocialMediaIcons = () => {
    return socialMediaIcons
      .filter(({ icon }) => icon) // Filter out null or undefined icons
      .map(({ icon, name }) => (
        <IconeBotten
          iconeStyle={{
            tintColor: COLORS.primary,
          }}
          key={name}
          icone={icon}
        />
      ));
  };

  return (
    <View style={{ marginVertical: SIZES.base - 3 }}>
      <Text style={{ color: COLORS.grey, ...FONTS.body4 }}>{title}</Text>
      {description && <Text style={{ ...FONTS.h5 }}>{description}</Text>}
      {renderSocialMediaIcons().length > 0 && (
        <View style={{ flexDirection: "row", gap: 10 }}>
          {renderSocialMediaIcons()}
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGrey,
    padding: SIZES.padding - 10,
    position: "relative",
  },
  scrollViewContentContainer: {
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    position: "relative",
  },
  secondContainer: {
    flex: 1,
    backgroundColor: COLORS.light,
    // height: SIZES.padding * 25,
    elevation: 1,
    borderRadius: SIZES.base,
  },
  profileInfoContainer: {
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileTextContainer: {
    marginLeft: SIZES.padding,
  },
  profileName: {
    ...FONTS.h3,
    color: COLORS.dark,
  },
});

export default ProfileInfo;
