"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TLocation = {
  latitude?: number;
  longitude?: number;
  name?: string;
  country?: string;
};

type TdefaultState = {
  theme: string | null;
  location: TLocation | null;
};

const defaultState: TdefaultState = {
  theme: null,
  location: {
    name: "Dhaka",
    country: "Bangladesh",
    latitude: 23.728888888,
    longitude: 90.394444444,
  },
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
