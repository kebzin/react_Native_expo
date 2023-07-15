// authenticationHelper.js

import AsyncStorage from "@react-native-async-storage/async-storage";
import { selectIsLogin, setCredentials } from "../features/auth/authSlice";
import { useSelector } from "react-redux";

/**
 * Checks the authentication status of the user.
 * Retrieves the login data from AsyncStorage if available and updates the app state.
 * @param {Function} dispatch - The dispatch function from the Redux store.
 * @returns {Promise<boolean>} - A promise that resolves to true if the user is authenticated, false otherwise.
 */
export const checkAuthentication = async (dispatch) => {
  // const IsLogin = useSelector(selectIsLogin);
  try {
    const encryptedData = await AsyncStorage.getItem("loginData");
    console.log("from", encryptedData);
    if (encryptedData) {
      const loginData = JSON.parse(encryptedData);

      dispatch(setCredentials({ data: loginData }));
      return true; // User is authenticated
    } else {
      return false; // User is not authenticated
    }
  } catch (error) {
    console.log("Error loading login data:", error);
    return false; // Error occurred, consider user as not authenticated
  }
};
