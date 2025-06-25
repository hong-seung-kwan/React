import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  token: null,
  info: null
}

export const memberSice = createSlice({
  name: "memberSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.info = action.payload.user;

      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    },

    logout: (state) => {
      state.token = null;
      state.info = null;

      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }
})

export const {login, logout} = memberSice.actions;