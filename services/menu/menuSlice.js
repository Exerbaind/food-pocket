import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuItemType: null,
  showBottomMenu: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    handleMenuItemType: (state, action) => {
      state.menuItemType = action.payload;
    },
    handleBottomMenu: (state) => {
      state.showBottomMenu = !state.showBottomMenu;
    },
  },
});

export const { handleMenuItemType, handleBottomMenu } = menuSlice.actions;

export default menuSlice.reducer;
