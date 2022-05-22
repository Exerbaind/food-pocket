import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    handleMenuAction: (state) => {
      state.active = !state.active;
    },
  },
});

export const { handleMenuAction } = menuSlice.actions;

export default menuSlice.reducer;
