"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TLocation = {
  lat?: number;
  long?: number;
  city?: string;
  country?: string;
};

type TdefaultState = {
  theme: string | null;
  location: TLocation | null;
};

const defaultState: TdefaultState = {
  theme: null,
  location: null,
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

    setUserLocation: (state, action: PayloadAction<TLocation>) => {
      return {
        ...state,
        location: action.payload,
      };
    },
  },
});

export const { setSiteTheme, toggleTheme, setUserLocation } =
  siteSettingsSlice.actions;

export default siteSettingsSlice.reducer;
