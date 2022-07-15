import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  item: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default commentsSlice.reducer;
