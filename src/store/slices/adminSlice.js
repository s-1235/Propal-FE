import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "./../../api";
import { alertActions } from "./alertSlice";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    loggedIn(state) {
      state.isLoggedIn = true;
    },
    loggedOut(state) {
      state.isLoggedIn = false;
    },
  },
});

export const adminLogin = createAsyncThunk(
  "admin/login",
  async ({ username, password }, thunkApi) => {
    try {
      const response = await api.adminLogin({ username, password });
      console.log(response);
      if (!response.data) {
        return thunkApi.dispatch(
          alertActions.openAlertBox("Can't Login Admin")
        );
      }
      console.log(response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data));
      thunkApi.dispatch(adminActions.loggedIn());
      thunkApi.dispatch(alertActions.openAlertBox("Admin Login Successful"));
    } catch (error) {
      console.log("custom error", error);
      thunkApi.dispatch(alertActions.openAlertBox("Can't Login Admin!"));
    }
  }
);

export const adminData = createAsyncThunk("admin/data", async (thunkApi) => {
  try {
    const response = await api.getAdminData();
    console.log(response);
    if (!response.data.adminData) {
      console.log("custom error");
    }
    return response.data.adminData;
  } catch (error) {
    console.log("custom error", error);
  }
});

export const adminActions = adminSlice.actions;

export default adminSlice;
