import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TcurrentWeather = {
  temp_c?: number;
  temp_f?: number;
  condition: {
    text?: string;
  };
  wind_kph?: string;
  humidity?: string;
  precip_mm?: string;
  isDay?: number;
  feelslike_c?: number;
};

type TdefaultState = {
  current: TcurrentWeather | null;
};

const defaultState: TdefaultState = {
  current: null,
};

const weatherSlice = createSlice({
  name: "weatherSlice",
  initialState: defaultState,
  reducers: {
    setCurrentWeather: (state, action: PayloadAction<TcurrentWeather>) => {
      state.current = action.payload;
    },
  },
});

export const { setCurrentWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
