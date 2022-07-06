import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

import appSlice from "./app/appSlice";
import menuSlice from "./menu/menuSlice";
import formSlice from "./form/formSlice";
import dishSlice from "./dish/dishSlice";
import messageSlice from "./message/messageSlice";
import barcodeSlice from "./barcode/barcodeSlice";
import productSlice from "./product/productSlice";
import modalSlice from "./modal/modalSlice";

const combinedReducer = combineReducers({
  appService: appSlice,
  menuService: menuSlice,
  formService: formSlice,
  dishService: dishSlice,
  productService: productSlice,
  messageService: messageSlice,
  barcodeService: barcodeSlice,
  modalService: modalSlice,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  }
  return combinedReducer(state, action);
};

export const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    devTools: process.env.NODE_ENV !== "production",
  });

export const wrapper = createWrapper(makeStore);
