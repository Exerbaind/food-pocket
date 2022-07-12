import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuItemType: null,
  showBottomMenu: false,
  searchType: "dish",
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
    handleSearchType: (state, action) => {
      state.searchType = action.payload;
    },
  },
});

export const { handleMenuItemType, handleBottomMenu, handleSearchType } =
  menuSlice.actions;

export default menuSlice.reducer;
