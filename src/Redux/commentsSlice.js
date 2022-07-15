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
  items: [],
  status: "loading",
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Получение комментариев
    builder.addCase(fetchComments.pending, (state) => {
      state.items = [];
      state.status = "loading";
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchComments.rejected, (state) => {
      state.items = [];
      state.status = "error";
    });
  },
});

export default commentsSlice.reducer;
