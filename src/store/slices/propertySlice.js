import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './../../api';
import { alertActions } from './alertSlice';
const propertySlice = createSlice({
  name: 'property',
  initialState: {},
  reducers: {},
  extraReducers: {},
});

export const addProperty = createAsyncThunk(
  'property/create',
  async (payload, thunkApi) => {
    try {
      console.log(payload);
      const response = await api.addProperty(payload);

      console.log(response);

      if (!response.data) {
        thunkApi.dispatch(
          alertActions.openAlertBox(response.exception?.response?.data?.message)
        );
      } else {
        thunkApi.dispatch(
          alertActions.openAlertBox('Property Successfully Created')
        );
      }
    } catch (error) {
      console.log('custom error ***', error);
    }
  }
);
export const propertyActions = propertySlice.actions;

export default propertySlice;
