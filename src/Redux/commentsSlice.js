import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { commentsApi } from "../Api/Api";

export const fetchComments = createAsyncThunk(
  "/comments/fetchComments",
  async () => {
    const { data } = await commentsApi();
    return data;
  }
);

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
