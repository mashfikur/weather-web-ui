"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const siteSettingsSlice = createSlice({
  name: "siteSettingsSlice",
  initialState: {
    theme: "dark",
  },
  reducers: {
    setSiteTheme: (state, action: PayloadAction<string>) => {
      return {
        theme: action.payload,
      };
    },
  },
});

export const { setSiteTheme } = siteSettingsSlice.actions;

export default siteSettingsSlice.reducer;
