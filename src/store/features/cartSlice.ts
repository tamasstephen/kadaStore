import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types";
import { RootState } from "../";

interface CartItems {
  [id: number]: {
    quantity: number;
    product: Product;
  };
}

interface CartSliceState {
  items: CartItems;
}

const initialState: CartSliceState = {
  items: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const { id } = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = { product: action.payload, quantity: 1 };
      }
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      delete state.items[action.payload.id];
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartAmount = (state: RootState) =>
  Object.values(state.cart.items).reduce((acc, curr) => acc + curr.quantity, 0);

export default cartSlice.reducer;
