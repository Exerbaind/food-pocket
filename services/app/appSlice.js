import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMobile: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    handleScreenType: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

export const { handleScreenType } = appSlice.actions;

export default appSlice.reducer;
