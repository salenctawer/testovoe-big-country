import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  author: {
    id: 16,
    name: "John Doe",
    avatar: "http://placeimg.com/640/480/business",
    company: "BigCountry",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default authSlice.reducer;
