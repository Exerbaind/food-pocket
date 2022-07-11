import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchType: "dish",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    handleSearchType: (state, action) => {
      state.searchType = action.payload;
    },
  },
});

export const { handleSearchType } = searchSlice.actions;

export default searchSlice.reducer;
