import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import productsReducer from "./features/porductsSlice";
import cartReducer from "./features/cartSlice";
import authReducer from "./features/authSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
