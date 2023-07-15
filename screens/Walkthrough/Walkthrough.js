import React, { useRef } from "react";
import {
  View,
  Text,
  Animated,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import { COLORS, SIZES, FONTS, constants } from "../../constants/index";
import { StyleSheet } from "react-native";
import { TextButton } from "../../components/index";
const ScreenDimension = Dimensions.get("screen");
const Walkthrough = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const Dot = ({ index }) => {
    const dotPosition = Animated.divide(scrollX, ScreenDimension.width);
    const dotOpacity = dotPosition.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [0.3, 1, 0.3],
      extrapolate: "clamp",
    });

    return (
      <Animated.View
        style={{
          opacity: dotOpacity,
          backgroundColor: COLORS.primary,
          height: 10,
          width: 10,
          borderRadius: SIZES.radius,
          marginHorizontal: 6,
        }}
      />
    );
  };

  function RederFooter(params) {
    return (
      <View style={styles.footerContainer}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: 5,
          }}
        >
          <View style={styles.dotsContainer}>
            {constants.walkthrough.map((item, index) => (
              <Dot key={item.id} index={index} />
            ))}
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 6, height: 50 }}>
          <TextButton
            label={"Join Now"}
            contentContainerStyle={{
              flex: 1,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.lightGrey,
            }}
          />
          <TextButton
            label={"Login"}
            contentContainerStyle={{
              flex: 1,
              borderRadius: SIZES.radius,
            }}
            onPress={() =>
              navigation.navigate("AuthMain", {
                register: false,
              })
            }
          />
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.light,
      }}
    >
      <Animated.FlatList
        horizontal
        data={constants.walkthrough}
        keyExtractor={(item) => item.id}
        decelerationRate={"fast"}
        scrollEventThrottle={16}
        snapToInterval={ScreenDimension.width}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                justifyContent: "center",
                width: ScreenDimension.width,
              }}
            >
              {/* walkthrought images */}
              <View style={{ flex: 1 }}>
                <View style={styles.imageContainer}>
                  <Image key={index} source={item.image} style={styles.image} />
                </View>
              </View>
              {/* Walkthrought title */}
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subTitle}>{item.sub_title}</Text>
              </View>
            </View>
          );
        }}
      />
      {RederFooter()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
  itemContainer: {
    justifyContent: "center",
    width: ScreenDimension.width,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: SIZES.radius * 10,
  },
  image: {
    width: 300,
    height: 300,
  },
  textContainer: {
    alignItems: "center",
    height: SIZES.height * 0.35,
    paddingHorizontal: 50,
  },
  title: {
    ...FONTS.h2,
  },
  subTitle: {
    color: COLORS.grey,
    ...FONTS.body4,
    textAlign: "center",
  },
  dotsContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: SIZES.height * 0.2,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SIZES.padding,
  },
});

export default Walkthrough;
