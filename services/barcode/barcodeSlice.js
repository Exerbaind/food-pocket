import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: null,
  barcode: "",
};

const barcodeSlice = createSlice({
  name: "barcode",
  initialState,
  reducers: {
    handleBarcodeModal: (state) => {
      state.active = !state.active;
    },
    setBarcodeData: (state, action) => {
      state.barcode = action.payload;
    },
  },
});

export const { handleBarcodeModal } = barcodeSlice.actions;

export default barcodeSlice.reducer;
