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

type Tforecast = {
  date?: string;
  day: {
    maxtemp_c?: number;
    mintemp_c?: number;
    condition: {
      text?: string;
      icon?:string
    };
  };
};

type TdefaultState = {
  current: TcurrentWeather | null;
  forecast: Tforecast[] | null;
};

const defaultState: TdefaultState = {
  current: null,
  forecast: null,
};

const weatherSlice = createSlice({
  name: "weatherSlice",
  initialState: defaultState,
  reducers: {
    setCurrentWeather: (state, action: PayloadAction<TcurrentWeather>) => {
      state.current = action.payload;
    },
    setForecast: (state, action: PayloadAction<Tforecast[]>) => {
      state.forecast = action.payload;
    },
  },
});

export const { setCurrentWeather, setForecast } = weatherSlice.actions;

export default weatherSlice.reducer;
