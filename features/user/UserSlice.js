/**
 * userSliceApiSlice: Slice for managing user-related API endpoints
 * - The userSliceApiSlice includes API endpoints for registering, updating, and deleting users.
 * - It utilizes the apiSlice from "../api/apiSlice" for handling API requests.
 * - The code also includes the usage of createEntityAdapter and createAsyncThunk from "@reduxjs/toolkit".
 */

import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";
import { apiSlice } from "../api/apiSlice";

// Create entity adapter for user entities
const userAdapter = createEntityAdapter({});
const initialState = userAdapter.getInitialState();

// userSliceApiSlice: Slice for managing user-related API endpoints
export const userSliceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // registerUser: API endpoint for registering a user
    registerUser: builder.mutation({
      query: (initialUserData) => ({
        url: "auth/register",
        method: "POST",
        body: {
          ...initialUserData,
        },
      }),
    }),

    // updateUser: API endpoint for updating a user
    updateUser: builder.mutation({
      query: (initialUserData) => ({
        url: "user/update",
        method: "PATCH",
        body: {
          ...initialUserData,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "user", id: arg.id }],
    }),

    // deleteUser: API endpoint for deleting a user
    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: "user/delete",
        method: "DELETE",
        body: { id },
      }),
    }),
  }),
  overrideExisting: true,
});

// Select the result of the registerUser endpoint
export const selectUserResult =
  userSliceApiSlice.endpoints.registerUser.select();

// Export API hooks from the userSliceApiSlice
export const {
  useDeleteUserMutation,
  useRegisterUserMutation,
  useUpdateUserMutation,
} = userSliceApiSlice;
