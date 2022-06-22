import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentForm: "dish", // dish || product || menu,
  showForm: false,
};

const modalFormSlice = createSlice({
  name: "modalForm",
  initialState,
  reducers: {
    handleModalForm: (state) => {
      state.showForm = !state.showForm;
    },
    handleCurrentForm: (state, action) => {
      state.currentForm = action.payload;
    },
  },
});

export const { handleModalForm, handleCurrentForm } = modalFormSlice.actions;

export default modalFormSlice.reducer;
