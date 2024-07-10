import { createSlice } from "@reduxjs/toolkit";

export const AuthenticationSlice = createSlice({
  name: "authentication",
  initialState: [],
  reducers: {
    addId: (state, {payload}) => {
      state[0] = payload;
    },
    addToken: (state, {payload}) => {
      state[1] = payload;
    },
    clear: () => {
      return [];
    },
  },
});

export const { addId, addToken, clear } = AuthenticationSlice.actions;
