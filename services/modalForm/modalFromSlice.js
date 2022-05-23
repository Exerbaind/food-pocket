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
  },
});

export const { handleModalForm } = modalFormSlice.actions;

export default modalFormSlice.reducer;
