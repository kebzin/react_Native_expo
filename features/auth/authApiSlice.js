/**
 * authApiSlice: Slice for managing authentication API endpoints
 * - The authApiSlice includes API endpoints for login, logout, and token refresh.
 * - It utilizes the apiSlice from "../api/apiSlice" for handling API requests.
 * - The onQueryStarted callbacks handle the response from the API and dispatch actions accordingly.
 */

import { apiSlice } from "../api/apiSlice";
import { logOut, setCredentials } from "./authSlice";

// authApiSlice: Slice for managing authentication API endpoints
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // login: API endpoint for user login
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    // sendLogout: API endpoint for user logout
    sendLogout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      async onQueryStarted(argument, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(logOut()); // Dispatch logOut action to update authentication state
          setTimeout(() => {
            dispatch(apiSlice.util.resetApiState()); // Reset API state after logout
          }, 1000);
        } catch (err) {
          console.log(err);
        }
      },
    }),
    // refresh: API endpoint for token refresh
    refresh: builder.mutation({
      query: () => ({
        url: "/auth/refresh",
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          const { accessToken } = data;
          dispatch(setCredentials({ accessToken })); // Dispatch setCredentials action to update token
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
  overrideExisting: true,
});

// Export API hooks from the authApiSlice
export const { useLoginMutation, useSendLogoutMutation, useRefreshMutation } =
  authApiSlice;
