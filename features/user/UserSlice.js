import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:3009/api",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const RegisterUser = createAsyncThunk("users/faddUser", async () => {
  async (initialPost) => {
    const response = await makeRequest.post("auth/register", initialPost);
    console.log(response);
    return response.data;
  };
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(RegisterUser.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(RegisterUser.pending),
      (state, action) => {
        return action.payload;
      };
    builder.addCase(RegisterUser.rejected),
      (state, action) => {
        return action.payload;
      };
  },
});

export const { postAdded } = usersSlice.actions;
export default usersSlice.reducer;
