import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  images,
  constants,
} from "../../constants/index";
import { TextButton } from "../../components/index";

// Component for displaying notifications
const Notification = ({ navigation }) => {
  useEffect(() => {
    // Show header when component is mounted
    navigation.setOptions({
      headerShown: true,
    });
  }, []);

  const handleOnRefresh = () => {
    // Make an API request to fetch new data
    // fetch("https://example.com/api/data")
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     // Assuming the API response is an array of new items
    //     const newItems = responseData;
    //     // Append the new items to the existing data array
    //     const updatedData = [...constants.Message, ...newItems];
    //     // Update the data state with the updated array
    //     // TODO: Replace setData with the appropriate state update logic in your component
    //     setData(updatedData);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //   });
  };
  const renderNotificationItem = ({ item }) => {
    // Render individual notification item
    // TODO: Add onPress and onLongPress handlers to TouchableOpacity
    return (
      <View style={styles.notificationItem}>
        <View style={styles.notificationContent}>
          <Image source={icons.bell} style={styles.notificationIcon} />
          <View style={styles.notificationTextContainer}>
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text style={styles.notificationDescription}>
              {item.description}
            </Text>
            <Text style={styles.notificationDate}>{item.date}</Text>
          </View>
          <View style={styles.notificationDot}></View>
        </View>
      </View>
    );
  };

  const renderFooterComponent = () => {
    // Render footer component
    return (
      <View>
        <TextButton
          label={"Reset Notification"}
          contentContainerStyle={{
            backgroundColor: null,
          }}
          labelStyle={{
            color: COLORS.success,
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={true} onRefresh={handleOnRefresh} />
        }
        data={constants.Message}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderNotificationItem}
        ListFooterComponent={renderFooterComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.grey08,
    paddingHorizontal: SIZES.padding - 10,
    paddingVertical: SIZES.base,
  },
  notificationItem: {
    flex: 1,
    backgroundColor: COLORS.light,
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.base,
    paddingVertical: SIZES.base,
    borderRadius: SIZES.radius - 3,
  },
  notificationContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.success,
    alignSelf: "flex-start",
    marginRight: SIZES.padding,
  },
  notificationTextContainer: {
    width: "80%",
  },
  notificationTitle: {
    ...FONTS.h5,
  },
  notificationDescription: {
    ...FONTS.body4,
    color: COLORS.dark80,
  },
  notificationDate: {
    color: COLORS.grey,
    ...FONTS.body5,
  },
  notificationDot: {
    width: 8,
    height: 8,
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    alignSelf: "flex-start",
  },
});

export default Notification;
