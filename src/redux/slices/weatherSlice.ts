import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TcurrentWeather = {
  temp_c?: number;
  temp_f?: number;
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
