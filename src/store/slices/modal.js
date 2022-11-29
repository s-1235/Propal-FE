import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    opened: false,
  },
  reducers: {
    showModal(state) {
      state.opened = true;
    },
    closeModal(state) {
      state.opened = false;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
