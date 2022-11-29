import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import * as api from './../../api';
import { alertActions } from './alertSlice';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    // username: '',
    // email: '',
    isAuthenticated: false,

    user: null,
  },
  reducers: {
    logOut(state) {
      state.isAuthenticated = false;
      localStorage.removeItem('user');
    },
    authenticate(state) {
      state.isAuthenticated = true;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    localAuthenticate(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAction.fulfilled, (state, action) => {
      console.log(action);
      state.username = action.payload?.data.username;
      state.email = action.payload?.data.email;
      localStorage.removeItem('contractor')
      localStorage.setItem('currentlyLogged','user')
      // state.isAuthenticated = true;
    });
  },
});

export const loginAction = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkApi) => {
    try {
      // const response = await api.login({ email, password });
      const response = await axios.post(
        'http://localhost:6969/users/login',
        {
          email,
          password,
        }
        // {
        //   headers: {
        //     'Content-Type': 'application/json; charset=utf-8',
        //   },
        // }
      );
      console.log(response?.data, 'that');
      // console.log(response, 'this');
      if (!response.data) {
        thunkApi.dispatch(
          alertActions.openAlertBox(response.exception?.response?.data?.message)
        );
        // throw new Error('there is no respons. Quitting');
      }
      // else {
      //   thunkApi.getState((state) => state.isAuthenticated === true);
      //   thunkApi.dispatch(alertActions.openAlertBox('success'));
      // }

      const userDetails = response?.data;

      localStorage.setItem('user', JSON.stringify(userDetails));

      const st = thunkApi.getState((state) => state);
      console.log(st);
      thunkApi.dispatch(authActions.authenticate());
      thunkApi.dispatch(authActions.setUser(response.data.data));
      thunkApi.dispatch(alertActions.openAlertBox('success'));
      return userDetails;
    } catch (error) {
      console.log('custom error', error);
      thunkApi.dispatch(alertActions.openAlertBox("Can't Login! Try Again"));
    }
  }
);
export const signupAction = createAsyncThunk(
  'auth/signup',
  async ({ username, email, password, confirmPassword }, thunkApi) => {
    try {
      const response = await api.signup({
        username,
        email,
        password,
        confirmPassword,
      });
      console.log(`custom name${username},email:${email}`);

      // console.log(response);
      const userDetails = response?.data;

      if (!userDetails) {
        thunkApi.dispatch(alertActions.openAlertBox('Error'));
      } else {
        thunkApi.dispatch(alertActions.openAlertBox('Account Created'));
        thunkApi.getState((state) => state.isAuthenticated === true);
        thunkApi.dispatch(authActions.setUser(userDetails.data));
      }

      console.log(userDetails);
      localStorage.setItem('user', JSON.stringify(userDetails));
    } catch (error) {
      console.log('custom error', error);
    }
  }
);

export const authActions = authSlice.actions;

export default authSlice;
