import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: null,
  error: null,
};

const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.list = action.payload;
      state.error = null;
    },
    handleError: (state, action) => {
      state.error = action.payload;
      state.list = null;
    },
  },
});

export const { setData, handleError } = dishSlice.actions;

export default dishSlice.reducer;
