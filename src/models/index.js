import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme";
export const darkStore = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
