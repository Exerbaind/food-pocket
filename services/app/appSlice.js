import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobile: false,
  menuItemType: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    handleScreenType: (state, action) => {
      state.isMobile = action.payload;
    },
    handleMenuItemType: (state, action) => {
      state.menuItemType = action.payload;
    },
  },
});

export const { handleScreenType, handleMenuItemType } = appSlice.actions;

export default appSlice.reducer;
