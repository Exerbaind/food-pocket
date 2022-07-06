import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentForm: null, // dish || product || menu,
  edit: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    handleForm: (state, action) => {
      state.currentForm = action.payload.currentForm;
      state.edit = action.payload.edit;
    },
    handleResetForm: (state) => {
      state = {
        currentForm: null,
        edit: false,
      };

      return state;
    },
  },
});

export const { handleForm, handleResetForm } = formSlice.actions;

export default formSlice.reducer;
