import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    message:[],
    currentIdMessage:-1
};

const slice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage(state, { payload }) {

    },
  },
});

export const createReviewThunk = createAsyncThunk(
  "user/createReviewThunk",
  async ({ }, { dispatch }) => {

  }
);
export const createMessageThunk = createAsyncThunk(
  "message/createMessage",
  async ({owner,message}, { dispatch }) => {}
);


export const { reducer: messageReducer } = slice;
export const { actions: messageActions } = slice;
