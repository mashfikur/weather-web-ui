import { configureStore } from "@reduxjs/toolkit";
import siteSettingsReducer from "./slices/siteSettingsSlice";

const store = configureStore({
  reducer: {
    site: siteSettingsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
