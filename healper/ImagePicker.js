// Function: pickImageAsync
// Description: Allows the user to select multiple images from the device's image library.
//              The selected images are added to the existing images state, and the first
//              image is set as the preview image if there is no existing preview.

import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

// Returns: Promise<void>
const pickImageAsync = async ({
  navigation,
  selectionLimit,
  allowsMultipleSelection,
  setImages,
  setPreviewImage,
}) => {
  try {
    // Request permission from the user to access the image library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
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
          allowsMultipleSelection: allowsMultipleSelection,
          orderedSelection: true,
          selectionLimit: selectionLimit,
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
        allowsMultipleSelection: allowsMultipleSelection,
        orderedSelection: true,
        selectionLimit: selectionLimit,
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
