import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  isActive: false,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    handleShowMessage: (state, action) => {
      state.text = action.payload;
      state.isActive = true;
    },
    handleHideMessage: (state) => {
      state.isActive = false;
    },
  },
});

export const { handleShowMessage, handleHideMessage } = messageSlice.actions;

export default messageSlice.reducer;
