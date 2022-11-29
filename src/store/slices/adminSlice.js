import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import * as api from './../../api';
import { alertActions } from './alertSlice';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    isLoggedIn: false,
    adminData: null,
  },
  reducers: {
    loggedIn(state) {
      state.isLoggedIn = true;
    },
    loggedOut(state) {
      state.isLoggedIn = false;
    },
    setAdminData(state, action) {
      state.adminData = action.payload;
    },
  },
});

export const adminLogin = createAsyncThunk(
  'admin/login',
  async ({ name, password }, thunkApi) => {
    try {
      const response = await api.adminLogin({ name, password });
      console.log(response);
      if (!response.data) {
        return thunkApi.dispatch(
          alertActions.openAlertBox("Can't Login Admin")
        );
      }

      const adminData = response?.data;

      thunkApi.dispatch(adminActions.setAdminData(adminData)); // Set admin data which came from server to state
      thunkApi.dispatch(adminActions.loggedIn());
      thunkApi.dispatch(alertActions.openAlertBox('Admin Login Successful'));
      return adminData;
    } catch (error) {
      console.log('custom error', error);
      thunkApi.dispatch(alertActions.openAlertBox("Can't Login Admin!"));
    }
  }
);

export const adminActions = adminSlice.actions;

export default adminSlice;
