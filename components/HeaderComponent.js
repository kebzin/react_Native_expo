import React from "react";
import {
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Animated,
} from "react-native";
import { COLORS, icons, SIZES, images, title, FONTS } from "../constants/index";
import { color } from "react-native-reanimated";

const HeaderComponent = ({ scrollY, onPress, Title, messagePress }) => {
  // const headerTranslateY = scrollY.interpolate({
  //   inputRange: [0, 100], // Adjust the values based on when you want the header animation to start
  //   outputRange: [0, -50], // Adjust the values based on the desired header translateY
  //   extrapolate: "clamp",
  // });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={
          styles.header
          //transform: [{ translateY: headerTranslateY }],
        }
      >
        <View style={styles.headerContent}>
          <View style={styles.logoContainer}>
            <Image source={icons.logo} style={styles.logo} />
          </View>
          <Text style={styles.title}>{Title}</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <TouchableOpacity
              onPress={messagePress}
              style={styles.bellContainer}
            >
              <Text
                style={{
                  position: "absolute",
                  top: -3,

                  backgroundColor: COLORS.error,
                  borderRadius: 50,
                  width: 7,
                  height: 7,
                  textAlign: "center",
                  ...FONTS.body5,
                }}
              ></Text>
              <Image source={icons.chat} style={styles.bellIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress} style={styles.bellContainer}>
              <Image source={icons.bell} style={styles.bellIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    position: "absolute",
    top: StatusBar.currentHeight - 20,
    left: 0,
    right: 0,
    zIndex: 50,
    paddingHorizontal: SIZES.padding - 10,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    width: 40,
    height: 40,
    overflow: "hidden",
    borderRadius: 10,
  },
  logo: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  title: {
    ...FONTS.h3,
    color: COLORS.light,
  },
  bellContainer: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.grey80,
    borderRadius: SIZES.radius - 5,
    padding: 3,
    position: "relative",
  },
  bellIcon: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
    tintColor: COLORS.light,
  },
});

export default HeaderComponent;
