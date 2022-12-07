import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { LoginTypes } from "./type";

export interface AuthState {
  mode: string;
  user: {
    friends: [];
  } | null;
  token: string | null;
  posts: [];
}

const initialState: AuthState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },

    setLogin: (state, action: PayloadAction<LoginTypes>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },

    setLogout: (state, action: PayloadAction<LoginTypes>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
  },
});

export const { setMode, setLogin, setLogout } = counterSlice.actions;
export default counterSlice.reducer;
