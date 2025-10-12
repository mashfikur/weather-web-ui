import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCurrentWeather, setForecast } from "@/redux/slices/weatherSlice";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

type Props = { lat?: number; long?: number };

const useWeatherInfo = ({ lat, long }: Props) => {
  const dispatch = useAppDispatch();
  const location = useAppSelector((state) => state.site?.location);
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const latitude = lat ?? location?.lat;
  const longitude = long ?? location?.long;

  const searchURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no&days=7`;

  const localSearch = `/forecast.json`;

  // fetching weather data
  const { data, isLoading, isError } = useQuery({
    enabled: location?.lat && location.long ? true : false,
    queryKey: ["weather_data"],
    queryFn: async () => {
      const res = await axios.get(localSearch);

      return res.data;
    },
  });

  useEffect(() => {
    if (data) {
      dispatch(setCurrentWeather(data?.current));
      dispatch(setForecast(data?.forecast?.forecastday));
    }
    // eslint-disable-next-line
  }, [data]);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useWeatherInfo;
