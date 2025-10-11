import { combineReducers, configureStore } from "@reduxjs/toolkit";
import siteSettingsReducer from "./slices/siteSettingsSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["site"],
};

const rootReducer = combineReducers({
  site: siteSettingsReducer,
});

const upgradedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: upgradedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
