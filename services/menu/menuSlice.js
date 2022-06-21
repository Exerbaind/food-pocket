import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    handleMenu: (state) => {
      state.active = !state.active;
    },
  },
});

export const { handleMenu } = menuSlice.actions;

export default menuSlice.reducer;
