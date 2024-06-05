import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./imageSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import ImageApi from "../api/images";

export const store = configureStore({
  reducer: {
    images: imageReducer,
    [ImageApi.reducerPath]: ImageApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ImageApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch)