import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { cartSlice } from "./CartStore";

export const createStore = () =>
  configureStore({
    reducer: {
      cart: cartSlice.reducer,
    },
  });

export const { setCart } = cartSlice.actions;

export type StoreType = ReturnType<typeof createStore>;
export type RootState = ReturnType<StoreType["getState"]>;
export type AppDispatch = StoreType["dispatch"];

export const useCart = () => useSelector((state: RootState) => state.cart.cart);
