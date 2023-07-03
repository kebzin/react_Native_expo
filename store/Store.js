import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "../features/user/UserSlice";

export default Store = configureStore({
  reducer: {
    users: usersReducers,
  },
  devTools: true,
});
// setupListeners(Store.dispatch);
