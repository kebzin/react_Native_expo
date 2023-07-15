import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "../features/user/UserSlice";
import { apiSlice } from "../features/api/apiSlice";
import authReducer from "../features/auth/authSlice";
export default Store = configureStore({
  reducer: { [apiSlice.reducerPath]: apiSlice.reducer, auth: authReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
// setupListeners(Store.dispatch);
