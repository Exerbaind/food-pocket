import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import appSlice from "./app/appSlice";
import menuSlice from "./menu/menuSlice";
import modalFormSlice from "./modalForm/modalFromSlice";

export const store = configureStore({
  reducer: {
    appService: appSlice,
    menuService: menuSlice,
    modalFormService: modalFormSlice,
  },
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
