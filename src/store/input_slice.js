import { createSlice } from "@reduxjs/toolkit";
import { initialInput } from "./initial_input";

const initialState = {
  value: initialInput,
};

const inputSlice = createSlice({
  name: "inputText",
  initialState,
  reducers: {
    setText: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setText } = inputSlice.actions;
export default inputSlice.reducer;
