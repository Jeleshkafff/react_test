import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  startTheme: "white",
};

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setStartTheme(state, { payload }) {
      state.startTheme = payload;
    },
  },
});
const { actions, reducer } = slice;
export const { setStartTheme } = actions;

export default reducer;
export const readThemeMode = createAsyncThunk(
  "theme/readThemeMode",
  ({}, { dispatch }) => {
    let color = localStorage.getItem("colorTheme");
    if (color !== null) {
      //slice.actions.setStartTheme(color);
      dispatch(setStartTheme(color));
    }
  }
);

export const changeThemeMode = createAsyncThunk(
  "theme/changeThemeMode",
  ({ color }, { dispatch }) => {
    localStorage.setItem("colorTheme", color);
    dispatch(setStartTheme(color));
  }
);
