import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menu/menuSlice";

export const store = configureStore({
  reducer: {
    menuService: menuSlice,
  },
});
