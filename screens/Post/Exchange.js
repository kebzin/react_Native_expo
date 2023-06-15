import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
  Linking,
  ScrollView,
} from "react-native";
import { COLORS, FONTS, SIZES, constants, icons } from "../../constants/index";
import {
  BottomSheetEmptyView,
  CountryDropDown,
  IconeBotten,
  InputField,
  Select,
  TextButton,
} from "../../components/index";

import * as ImagePicker from "expo-image-picker";

/**
 * Component responsible for displaying a screen for adding a property Exchanjes.
 * @param {Object} navigation - The navigation object provided by React Navigation.
 * @returns {JSX.Element} Exchange component JSX.
 */
const PostExchange = ({ navigation }) => {
  // states
  const [previewImage, setPreviewImage] = useState(null);
  const [openModal1, setShowModal1] = useState(false);
  const [Category, setCategory] = useState("Choose Category");
  const [CategoryOpen, setCategoryOpen] = useState(false);
  const [PriceMonthly, setPriceMonthly] = useState(null);
  const [PriceYearly, setPriceYearly] = useState(null);
  const [PropertyTitle, setPropertyTitle] = useState(null);
  const [PropertyLocation, setPropertyLocation] = useState(null);
  const [Description, setDescription] = useState(null);
  const [images, setImages] = useState([]);

  // hooks
  const bottomSheetModalRef = useRef(null);

  const HandleSheetPresent = useCallback(() => {
    bottomSheetModalRef?.current?.present();
  }, []);

  useEffect(() => {
    // Set navigation options for the screen
    navigation.setOptions({
      headerShown: true,
      title: "Add Exchange Item",
      headerStyle: {
        height: 80,
      },
      headerTitleStyle: {
        ...FONTS.h3,
      },
    });

    // Set up a focus listener to show the modal when the screen gains focus
    // const focusListener = navigation.addListener("focus", () => {
    //   setModalVisible(true);
    // });

    // Clean up the listener when the component unmounts or when the dependencies change
    return () => {
      //   focusListener(); // Remove the focus listener to avoid memory leaks
    };
  }, [navigation]);

  // seperating Exchange

  /**
   * Handles the press event of an image item.
   * Sets the selected image as the preview image.
   * @param {Object} item - The selected image item.
   */
  const handleImagePress = (item) => {
    setPreviewImage(item.uri);
  };
  /**
   * Handles the long press event of an image item.
   * Currently empty, can be implemented later if needed.
   * @param {Object} item - The selected image item.
   */
  const handleImageLongPress = (item) => {
    // Handle long press event on image item
    setImages(images.filter((value) => value !== item)); // filtering the image which is acting as delete
    if (item.uri === previewImage) {
      // if the image the user delete is the same as the preview image then change the preview image to the next image
      return setPreviewImage(images[1].uri);
    }
  };

  // Function: pickImageAsync
  // Description: Allows the user to select multiple images from the device's image library.
  //              The selected images are added to the existing images state, and the first
  //              image is set as the preview image if there is no existing preview.
  // Returns: Promise<void>
  const pickImageAsync = async () => {
    try {
      // Request permission from the user to access the image library
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        // Handle the case where permission is not granted
        // Display an error message and provide instructions to grant permission
        Alert.alert(
          "Permission required",
          "Please grant permission to access the image library in your device settings.",
          [
            {
              text: "OK",
              onPress: () => {
                // Open the device settings for the app
                Linking.openSettings();
              },
            }, // You can add additional buttons and actions as needed
          ]
        );

        // Provide an option to prompt the user again for permission
        const promptResult =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (promptResult.status === "granted") {
          // User granted permission, attempt to launch the image library picker again
          result = await ImagePicker.launchImageLibraryAsync({
            allowsMultipleSelection: true,
            orderedSelection: true,
            selectionLimit: 10,
            quality: 1,
            aspect: [4, 3],
          });
        } else {
          // User did not grant permission again, handle accordingly (e.g., show another error message)
          return;
        }
      } else {
        // Permission is granted, proceed with launching the image library picker
        result = await ImagePicker.launchImageLibraryAsync({
          allowsMultipleSelection: true,
          orderedSelection: true,
          selectionLimit: 10,
          quality: 1,
          aspect: [4, 3],
        });
      }

      // Check if an image was selected
      if (!result.canceled && result.assets && result.assets.length > 0) {
        // Add the selected images to the existing images state
        setImages((prevImages) => [...prevImages, ...result.assets]);

        // Set the preview image if it is not already set
        if (!previewImage) {
          setPreviewImage(result.assets[0].uri);
        }
      }
    } catch (error) {
      console.error("Error picking image:", error);
      // Handle any errors that occur during image selection
      // You can show an error message or perform any other necessary actions
    }
  };

  const handleExchange = () => {
    // Function to handle property Exchange submission
    // Perform necessary validation and submit the Exchange
  };

  return (
    <ScrollView style={styles.container}>
      {/* Container for rendering images */}
      <View style={styles.imageContainer}>
        {/* Preview image */}
        <View style={styles.previewImageContainer}>
          {images.length > 0 ? (
            <Image
              source={{ uri: previewImage }}
              resizeMode="stretch"
              style={styles.previewImage}
            />
          ) : (
            <View style={{}}>
              <IconeBotten
                icone={icons.addPost}
                iconeStyle={{
                  tintColor: COLORS.error60,
                  width: 80,
                  height: 80,
                }}
                containerStyle={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 100,
                }}
                Onpress={pickImageAsync}
              />
              <Text
                style={{
                  ...FONTS.body5,
                  color: COLORS.grey,
                  textAlign: "center",
                }}
              >
                Choose image
              </Text>
            </View>
          )}
        </View>

        {/* FlatList for rendering the images */}
        <FlatList
          horizontal
          data={images}
          keyExtractor={(item) => item.assetId}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleImagePress(item)}
              onLongPress={() => handleImageLongPress(item)}
            >
              <View style={styles.imageItemContainer}>
                {/* Individual image item */}
                <Image source={{ uri: item?.uri }} style={styles.imageItem} />
              </View>
            </TouchableOpacity>
          )}
        />

        {/* Image count */}
        <View style={styles.imageCountContainer}>
          <Text style={styles.imageCountText}>Images: {images.length}/10</Text>
          <View>
            <IconeBotten
              icone={icons.addPost}
              iconeStyle={styles.addExchangeIcon}
              Onpress={pickImageAsync}
            />
            <Text
              style={{ ...FONTS.body5, color: COLORS.grey, lineHeight: 13 }}
            >
              Add image
            </Text>
          </View>
        </View>
      </View>

      {/* Property details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsHeading}>Details</Text>

        <InputField
          inputMode={"text"}
          value={PropertyTitle}
          onChange={(text) => setPropertyTitle(text)}
          Placeholder={"Enter item title"}
          inputContainerStyle={styles.inputContainer}
        />
        <CountryDropDown
          onPress={() => setCategoryOpen(true)}
          dropDownState={Category}
          containerStyle={{ flex: 1, marginTop: SIZES.base }}
        />

        {/* Bedrooms and Bathrooms */}

        {/* monthly price */}
        <InputField
          inputMode={"text"}
          value={PriceMonthly}
          onChange={(text) => setPriceMonthly(text)}
          containerStyle={styles.inputFieldContainer}
          Placeholder={"What are Your Exchanging"}
          inputContainerStyle={styles.inputContainer}
        />
        {/* yearly price */}
        <InputField
          inputMode={"text"}
          value={PriceYearly}
          onChange={(text) => setPriceYearly(text)}
          containerStyle={styles.inputFieldContainer}
          Placeholder={"Exchanging For (eg. phone,laptop etc)"}
          inputContainerStyle={styles.inputContainer}
        />
        <InputField
          inputMode={"text"}
          value={PriceYearly}
          onChange={(text) => setPriceYearly(text)}
          containerStyle={styles.inputFieldContainer}
          Placeholder={"If money involved (Enter)"}
          inputContainerStyle={styles.inputContainer}
        />
        {/* description */}

        {/* price */}

        <InputField
          multiline={true}
          inputMode={"text"}
          value={Description}
          onChange={(text) => setDescription(text)}
          containerStyle={styles.inputFieldContainer}
          inputStyle={{ flex: 1, textAlign: "justify" }}
          Placeholder={"Enter Description about your Exchange "}
          inputContainerStyle={{ height: 100, backgroundColor: COLORS.grey08 }}
        />
        <TextButton
          contentContainerStyle={{
            height: 50,
            borderRadius: SIZES.radius,
          }}
          label={"Exchange"}
          onPress={HandleSheetPresent}
        />
      </View>

      <Select
        openModal={CategoryOpen}
        height={SIZES.padding * 10}
        Onclose={() => setCategoryOpen(false)}
        setShowModal={setCategoryOpen}
        data={[
          { id: 1, name: "Appartment" },
          { id: 2, name: "Rooms" },
          { id: 3, name: "Single Rooms" },
          { id: 4, name: "Shops" },
          { id: 5, name: "Compounds" },
          { id: 6, name: "Offices" },
          { id: 7, name: "Cars" },
        ]}
        setDropDownState={setCategory}
      />

      {/* number of passengers */}

      {/* passengers */}
      {/* number of passengers */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding - 15,
    marginTop: SIZES.base,
    backgroundColor: COLORS.grey08,
    paddingBottom: SIZES.padding,
  },
  imageContainer: {
    backgroundColor: COLORS.light,
    padding: SIZES.padding - 7,
    borderRadius: SIZES.radius,
    height: 350,
    marginHorizontal: SIZES.radius - 10,
  },
  previewImageContainer: {},
  previewImage: {
    width: "100%",
    resizeMode: "cover",
    height: 220,
  },
  imageItemContainer: {
    justifyContent: "center",
    paddingHorizontal: SIZES.base,
    paddingVertical: SIZES.base,
  },
  imageItem: {
    width: 65,
    height: 65,
    borderRadius: SIZES.radius * 1.5,
    marginBottom: SIZES.base,
  },
  imageCountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: SIZES.base,
  },
  imageCountText: {
    ...FONTS.h5,
  },
  addExchangeIcon: {
    tintColor: COLORS.success,
  },
  detailsContainer: {
    backgroundColor: COLORS.light,
    marginTop: SIZES.base,
    padding: SIZES.base,
  },
  detailsHeading: {
    ...FONTS.h5,
  },
  inputFieldContainer: {
    marginVertical: SIZES.base,
    flex: 1,
  },
  inputContainer: {
    backgroundColor: COLORS.grey08,
  },
  bedBathContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default PostExchange;
