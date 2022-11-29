import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    alertBox: false,
    alertMessage: null,
  },
  reducers: {
    openAlertBox(state, action) {
      state.alertBox = true;
      state.alertMessage = action.payload;
    },
    closeAlertBox(state) {
      state.alertBox = false;
      state.alertMessage = null;
    },
  },
});

export const alertActions = alertSlice.actions;
export default alertSlice;
