import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { LoginTypes, postType } from "./type";

export interface AuthState {
  mode?: string;
  user: {
    _id: string;
    firstName: string;
    friends: [];
    lastName: string;
    picturePath: string;
  };
  token?: string | null;
  posts: postType[];
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

    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },

    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.log("friends does not exist");
      }
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
    setLogout: (state) => {
      state.user = initialState.user;
      state.token = null;
    },
  },
});

export const { setMode, setLogin, setLogout, setPosts, setPost, setFriends } =
  counterSlice.actions;
export default counterSlice.reducer;
