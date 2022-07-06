import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleModal: (state) => {
      state.showModal = !state.showModal;
    },
  },
});

export const { handleModal } = modalSlice.actions;

export default modalSlice.reducer;
