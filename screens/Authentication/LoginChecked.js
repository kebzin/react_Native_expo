import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { decryptData } from "../../components/EncriptionAndDescription";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "react-native";

const LoginChecked = ({ renderChildrents, navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const retrieveLoginData = async () => {
      try {
        // Retrieve the encrypted data from AsyncStorage
        const encryptedData = await AsyncStorage.getItem("loginData");
        console.log("decript", decryptedData);

        // Decrypt the data
        const decryptedData = await decryptData(
          encryptedData,
          "your-secret-key"
        );

        // Parse the decrypted data and extract the access token
        const { accessToken } = JSON.parse(decryptedData);

        // Dispatch setCredentials action with the access token
        dispatch(setCredentials(accessToken));
      } catch (error) {
        console.log(error);
      }
    };

    retrieveLoginData();
  }, [navigation]);
  return <View style={{ flex: 1 }}>{renderChildrents}</View>;
};

export default LoginChecked;
