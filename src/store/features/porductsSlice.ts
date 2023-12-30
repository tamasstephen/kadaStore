import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/product";
import { RootState } from "../store";
import axios from "axios";
import { FetchStatus } from "../../constants";

interface ProductsSliceState {
  products: Product[];
  status: FetchStatus;
}

const initialState: ProductsSliceState = {
  products: [],
  status: FetchStatus.IDLE,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = FetchStatus.PENDING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = FetchStatus.FULFILLED;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = FetchStatus.REJECTED;
      });
  },
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (limit: number) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products?limit=${limit}`
    );
    return response.data;
  }
);

export const selectAllProducts = (state: RootState) => state.products.products;
export const selectFetchStatus = (state: RootState) => state.products.status;
export const selectProductById = (id: number) => (state: RootState) =>
  state.products.products.filter((product) => id === product.id);

export default productsSlice.reducer;
