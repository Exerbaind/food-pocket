import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: null,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
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

export const { setData, handleError } = productSlice.actions;

export default productSlice.reducer;
