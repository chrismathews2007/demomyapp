import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Cart {
  products: {
    id: number;
    name: string;
    image: string;
    price: number;
  }[];
}

export interface CartState {
  cart: Cart;
}

const initialState: CartState = {
  cart: {
    products: [],
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Cart>) => {
      state.cart = action.payload;
    },
  },
});
