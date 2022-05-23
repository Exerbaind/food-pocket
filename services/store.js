import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menu/menuSlice";
import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    menuService: menuSlice,
  },
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
