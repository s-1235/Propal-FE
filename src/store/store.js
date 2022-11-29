import { configureStore } from '@reduxjs/toolkit';
import adminSlice from './slices/adminSlice';
import alertSlice from './slices/alertSlice';
import authSlice from './slices/authSlice';
import modalSlice from './slices/modal';
import propertySlice from './slices/propertySlice';
// import toggleSlice from './slices/toggleSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    auth: authSlice.reducer,
    property: propertySlice.reducer,
    alert: alertSlice.reducer,
    admin: adminSlice.reducer,
  },
});

export default store;
