import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ModalState {
  isOpen: boolean;
  isSignedIn: boolean;
}

const initialState: ModalState = {
  isOpen: false,
  isSignedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    setToSignedIn: (state) => {
      state.isSignedIn = true;
    },
    setToSignedOut: (state) => {
      state.isSignedIn = false;
    },
  },
});

export const { openModal, closeModal, setToSignedIn, setToSignedOut } =
  authSlice.actions;

export const selectModalState = (state: RootState) => state.auth.isOpen;
export const selectSignedInState = (state: RootState) => state.auth.isSignedIn;

export default authSlice.reducer;
