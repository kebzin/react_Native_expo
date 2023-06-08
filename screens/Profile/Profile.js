import React, { useCallback, useRef, useState } from "react";
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
  BottomSheetDialog,
  HeaderComponent,
  IconeBotten,
  TextButton,
} from "../../components/index";

const Profile = ({ navigation }) => {
  //states;
  const scrollY = useRef(new Animated.Value(0)).current;
  const [isLogin, setIsLogin] = useState(false);

  // hooks
  const bottomSheetModalRef = useRef(null);

  // bottom sheet function
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const RenderLoginComponent = () => {
    return (
      <View style={styles.loginPromptContainer}>
        <View style={styles.loginButtonsContainer}>
          <TextButton
            label={"Register"}
            contentContainerStyle={styles.loginButton}
          />
          <TextButton
            label={"Login"}
            contentContainerStyle={styles.loginButton}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerTopContainer}>
        <View style={styles.profileInfoContainer}>
          <Image source={icons.logo} style={styles.profileImage} />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>Kebba Waiga</Text>
            <TouchableOpacity>
              <Text style={styles.personalInfo}>Personal Info</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.counterContainer}>
          <View style={styles.counterItem}>
            <Image source={icons.shoppingBag} style={styles.counterIcon} />
            <View>
              <Text style={styles.counterValue}>200</Text>
              <Text style={styles.counterLabel}>Post</Text>
            </View>
          </View>
          <View style={styles.counterItem}>
            <Image
              source={icons.exchange}
              style={[styles.counterIcon, styles.counterExchangeIcon]}
            />
            <View>
              <Text style={styles.counterValue}>200</Text>
              <Text style={styles.counterLabel}>Exchanges</Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollViewContentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.shadowContainer}>
          <RenderProfileContent
            onPress={() => navigation.navigate("ProfileInfo")}
            Title={"Profile Info"}
            IconLeft={icons.person2}
            description="See your profile info"
            IconRight={icons.arrowRight}
          />
          <RenderProfileContent
            Title={"Manage Post"}
            IconLeft={icons.gift}
            description="Manage all your items"
            IconRight={icons.arrowRight}
          />
          <RenderProfileContent
            Title={"Messages"}
            IconLeft={icons.bell}
            IconRight={icons.arrowRight}
            description="Messages you sent or received"
          />
        </View>
        <View style={styles.shadowContainer}>
          <RenderProfileContent
            Title={"Setting"}
            IconLeft={icons.setting}
            description="See your profile info"
            IconRight={icons.arrowRight}
          />
          <RenderProfileContent
            Title={"Term of use"}
            IconLeft={icons.condition}
            description="Manage all your items"
            IconRight={icons.arrowRight}
          />
          <RenderProfileContent
            Title={"Support"}
            IconLeft={icons.bell}
            IconRight={icons.arrowRight}
            description="Messages you sent or received"
          />
        </View>
        {/* logout */}
        <TextButton
          onPress={handlePresentModalPress}
          label={"Log out"}
          contentContainerStyle={{
            height: 50,
            borderRadius: SIZES.radius,
          }}
        />

        {/* Repeat the above code blocks for other sections */}
      </ScrollView>

      {isLogin && RenderLoginComponent}
      <BottomSheetDialog
        bottomSheetModalRef={bottomSheetModalRef}
        Title={"Logout Confermation"}
        ButtonText={"Continue"}
        Icone={icons.checkmark}
        Status={"Success"}
        Message={"Are you sure that you want to logout"}
        HandleClick={() => {
          bottomSheetModalRef.current?.close(), navigation.navigate("Password");
        }}
      />
    </View>
  );
};

const RenderProfileContent = ({
  onPress,
  Title,
  description = "",
  IconLeft,
  IconRight,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.profileContentContainer}>
      <View style={styles.profileContent}>
        <IconeBotten
          icone={IconLeft}
          iconeStyle={{ width: 25, height: 25, tintColor: COLORS.grey80 }}
        />
        <View>
          <Text style={styles.profileContentTitle}>{Title}</Text>
          {description.length > 0 && (
            <Text style={styles.profileContentDescription}>{description}</Text>
          )}
        </View>
      </View>
      <IconeBotten
        icone={IconRight}
        iconeStyle={{ width: 20, height: 20, tintColor: COLORS.support2 }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGrey,
    paddingHorizontal: SIZES.padding - 10,
  },
  headerTopContainer: {
    height: SIZES.padding * 4,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  profileInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: SIZES.base,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  profileTextContainer: {
    marginLeft: SIZES.padding,
  },
  profileName: {
    ...FONTS.h3,
    color: COLORS.dark,
  },
  personalInfo: {
    ...FONTS.h4,
    color: COLORS.secondary,
  },
  counterContainer: {
    flexDirection: "row",
    gap: 10,
    position: "absolute",
    backgroundColor: COLORS.light,
    height: SIZES.padding * 3.3,
    bottom: -SIZES.padding * 2,
    left: SIZES.radius,
    right: SIZES.radius,

    shadowColor: "#000",
    elevation: 20,
    borderRadius: SIZES.radius,
    paddingLeft: SIZES.padding * 2,
    paddingRight: SIZES.padding * 2,
    justifyContent: "space-between",
  },
  counterItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  counterIcon: {
    width: 30,
    height: 30,
  },
  counterExchangeIcon: {
    tintColor: COLORS.error80,
  },
  counterValue: {
    ...FONTS.h3,
    color: COLORS.primary,
  },
  counterLabel: {
    color: COLORS.grey,
    ...FONTS.body5,
  },
  scrollViewContentContainer: {
    paddingTop: SIZES.padding * 3,
    paddingBottom: SIZES.padding,
  },
  shadowContainer: {
    backgroundColor: COLORS.light,
    elevation: 2,
    borderRadius: SIZES.base,
    height: SIZES.padding * 9,
    marginBottom: SIZES.radius - 2,
  },
  loginPromptContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonsContainer: {
    flexDirection: "row",
    gap: 20,
    backgroundColor: COLORS.grey20,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.base,
    borderRadius: 7,
  },
  loginButton: {
    height: 50,
    flex: 1,
    borderRadius: SIZES.radius,
  },
  profileContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: SIZES.base * 1.5,
  },
  profileContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  profileContentTitle: {
    ...FONTS.h4,
    color: COLORS.dark,
  },
  profileContentDescription: {
    ...FONTS.body5,
    color: COLORS.grey,
    lineHeight: 12,
    marginTop: 3,
  },
});

export default Profile;
