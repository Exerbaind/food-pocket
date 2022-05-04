import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screenType: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    getScreenType: (state) => {
      state.screenType = "desktop";
    },
  },
});

export const { getScreenType } = appSlice.actions;

export default appSlice.reducer;
