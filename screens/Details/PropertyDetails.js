import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Animated,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
} from "react-native";
import { dummyData, SIZES, COLORS, icons } from "../../constants/index";
import { IconeBotten } from "../../components";

const PropertyDetails = ({ navigation, route }) => {
  const { item } = route.params;

  const imageWidth = SIZES.width;
  const [scrollX] = useState(new Animated.Value(0));

  useEffect(() => {
    // Call the property item API
  }, []);

  const Dot = ({ index }) => {
    return (
      <Animated.View
        style={{
          backgroundColor: COLORS.grey,
          height: 8,
          width: 8,
          borderRadius: SIZES.radius,
          marginHorizontal: 6,
          opacity: Animated.divide(scrollX, imageWidth).interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          }),
        }}
      />
    );
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.lightGrey}
        animated={true}
      />
      <View style={{ position: "relative" }}>
        {/* rendering the navigation */}
        <View
          style={{
            position: "absolute",
            left: 10,
            right: 10,
            top: StatusBar.currentHeight - 20,
            zIndex: 100,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.lightGrey,
              borderRadius: SIZES.base,
              padding: 5,
              alignItems: "center",
            }}
          >
            <IconeBotten
              icone={icons.arrow_left}
              iconeStyle={{
                tintColor: COLORS.dark,
              }}
              Onpress={() => navigation.goBack()}
            />
          </View>
          <View
            style={{
              backgroundColor: COLORS.lightGrey,
              borderRadius: SIZES.base,
              padding: 5,
              alignItems: "center",
            }}
          >
            <IconeBotten
              icone={icons.likeFll}
              iconeStyle={{
                tintColor: COLORS.error,
              }}
              // Onpress={ratingPress}
            />
          </View>
        </View>

        {/* rendering the flatlist  */}
        <FlatList
          data={dummyData.banners}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          snapToInterval={imageWidth} // This property is key for the snapping effect
          decelerationRate="fast" // Adjust as needed
          renderItem={({ item }) => (
            <Image
              source={item.image}
              style={{
                width: imageWidth,
                height: SIZES.height * 0.45,
                resizeMode: "stretch",

                zIndex: 100,
              }}
            />
          )}
        />
        {/* rendering the dot component */}
        <View
          style={{
            position: "absolute",
            bottom: 10,
            left: 0,
            right: 0,
            zIndex: 100,
            width: SIZES.width,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          {dummyData.banners.map((_, index) => (
            <Dot key={index} index={index} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.lightGrey,
    marginTop: 0,
  },
  imageStyle: {
    resizeMode: "contain",
  },
});

export default PropertyDetails;
