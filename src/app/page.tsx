import Forecast from "@/components/hero/Forecast";
import WeatherInfo from "@/components/hero/WeatherInfo";
import React from "react";

const page = () => {
  return (
    <div className="container my-14 flex items-center justify-between">
      <WeatherInfo />
      <Forecast />
    </div>
  );
};

export default page;
