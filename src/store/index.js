import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./input_slice";

const store = configureStore({
  reducer: {
    inputText: inputReducer,
  },
});

export default store;
