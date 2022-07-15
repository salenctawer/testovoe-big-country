import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import commentsSlice from "./commentsSlice";

const store = configureStore({
  reducer: {
    comments: commentsSlice,
    auth: authSlice,
  },
});

export default store;
