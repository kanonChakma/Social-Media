import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { LoginTypes } from "./type";

export interface AuthState {
  mode?: string;
  user: {
    _id: string;
    firstName: string;
    friends: [];
    lastName: string;
    picturePath: string;
  } | null;
  token?: string | null;
  posts?: [];
}

const initialState: AuthState = {
  mode: "",
  user: {
    _id: "",
    picturePath: "",
    firstName: "",
    lastName: "",
    friends: [],
  },
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

    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setMode, setLogin, setLogout } = counterSlice.actions;
export default counterSlice.reducer;
