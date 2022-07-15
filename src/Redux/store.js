import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "./commentsSlice";

const store = configureStore({
  reducer: {
    comments: commentsSlice,
  },
});

export default store;
