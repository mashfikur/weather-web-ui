import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCurrentWeather } from "@/redux/slices/weatherSlice";
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

  const searchURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`;

  // fetching weather data
  const { data, isLoading, isError } = useQuery({
    enabled: location?.lat && location.long ? true : false,
    queryKey: ["weather_data"],
    queryFn: async () => {
      const res = await axios.get(`/data.json`);

      return res.data;
    },
  });

  // useEffect(() => {
  //   const demoData = fetch(`/data.json`).then((res) => res.json());

  //   console.log(demoData);
  // }, []);

  useEffect(() => {
    if (data) {
      dispatch(setCurrentWeather(data?.current));
    }
    // eslint-disable-next-line
  }, [data]);

  return {
    isLoading,
    isError,
  };
};

export default useWeatherInfo;
