import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import productsReducer from "./features/porductsSlice";
import cartReducer from "./features/cartSlice";
import modalReducer from "./features/modalSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
