import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const selectModalState = (state: RootState) => state.modal.isOpen;

export default modalSlice.reducer;
