/**
 * authSlice: Slice for managing authentication state
 * - The authSlice includes actions for setting credentials and logging out the user.
 * - The state includes a token property to store the current authentication token.
 */

import { createSlice } from "@reduxjs/toolkit";

// authSlice: Slice for managing authentication state
const authSlice = createSlice({
  name: "auth",
  initialState: { data: null, isLogin: false }, // Initial state with token set to null
  reducers: {
    // setCredentials: Action for setting the authentication credentials
    setCredentials: (state, action) => {
      const { data } = action.payload;
      state.data = data; // Update the token in the state
    },
    // logOut: Action for logging out the user
    logOut: (state, action) => {
      state.data = null; // Set the token to null when logging out
    },
    isLogin: (state, action) => {
      const { isLogin } = action.payload;
      state.isLogin = isLogin;
    },
  },
});

// Export actions from the authSlice
export const { setCredentials, logOut, isLogin } = authSlice.actions;

// Export the authSlice reducer
export default authSlice.reducer;

/**
 * selectCurrentToken: Selector function to retrieve the current token from the state
 * - This selector function accepts the Redux state as a parameter.
 * - It returns the token property from the auth slice of the state.
 */
export const selectCurrentToken = (state) => state.auth.data;
export const selectIsLogin = (state) => state.auth.isLogin;
