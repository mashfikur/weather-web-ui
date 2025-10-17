"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";



type TdefaultState = {
  theme: string | null;
  
};

const defaultState: TdefaultState = {
  theme: null,
};

const siteSettingsSlice = createSlice({
  name: "siteSettingsSlice",
  initialState: defaultState,
  reducers: {
    setSiteTheme: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        theme: action.payload,
      };
    },
    toggleTheme: (state) => {
      // if null, assume light first
      if (!state.theme) state.theme = "light";

      state.theme = state.theme === "light" ? "dark" : "light";
    },

   
  },
});

export const { setSiteTheme, toggleTheme } =
  siteSettingsSlice.actions;

export default siteSettingsSlice.reducer;
