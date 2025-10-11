import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const defaultTheme = localStorage.getItem("theme");

const siteSettingsSlice = createSlice({
  name: "siteSettingsSlice",
  initialState: {
    theme: defaultTheme || "dark",
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
