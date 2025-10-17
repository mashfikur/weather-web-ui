import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TLocation = {
  latitude?: number;
  longitude?: number;
  name?: string;
  country?: string;
};

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
  last_updated?: string;
};

type Tforecast = {
  date?: string;
  day: {
    maxtemp_c?: number;
    mintemp_c?: number;
    condition: {
      text?: string;
      icon?: string;
    };
  };
};

type TdefaultState = {
  current: TcurrentWeather | null;
  forecast: Tforecast[] | null;
  location: TLocation;
};

const defaultState: TdefaultState = {
  current: null,
  forecast: null,
  location: {
    name: "Dhaka",
    country: "Bangladesh",
    latitude: 23.728888888,
    longitude: 90.394444444,
  },
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
    setWeatherLocation: (state, action: PayloadAction<TLocation>) => {
      return {
        ...state,
        location: action.payload,
      };
    },
    resetWeather: () => {
      return defaultState;
    },
  },
});

export const {
  setCurrentWeather,
  setForecast,
  setWeatherLocation,
  resetWeather,
} = weatherSlice.actions;

export default weatherSlice.reducer;
