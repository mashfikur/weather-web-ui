"use client";
import { FaWind } from "react-icons/fa";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import weatherIcon from "@/assets/icons/sun-clouds.svg";
import Image from "next/image";

const WeatherInfo = () => {
  const info = useAppSelector((state) => state.weather?.current);

  return (
    <div className="flex basis-[60%] items-center justify-between gap-10">
      <div className="space-y-20">
        <div className="w-fit space-y-8">
          <div className="relative">
            <h3 className="font-secondary text-[150px] leading-[120px] font-extralight">
              {info?.temp_c}
            </h3>
            <span className="absolute -top-10 -right-5 text-5xl font-thin">
              °C
            </span>
          </div>

          <p className="text-[40px] font-thin"> {info?.condition?.text} </p>
        </div>

        <div className="flex items-center gap-14">
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-xl text-gray-400">
              <FaWind />
              <p>Wind</p>
            </div>

            <div className="flex items-end gap-1">
              <p className="text-4xl"> {info?.wind_kph} </p>
              <span className="text-2xl font-medium">km/h</span>
            </div>
          </div>
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-xl text-gray-400">
              <FaWind />
              <p>Humidity</p>
            </div>

            <div className="flex items-end gap-1">
              <p className="text-4xl"> {info?.humidity} </p>
              <span className="text-2xl font-medium">%</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Image
          src={weatherIcon}
          width={400}
          height={400}
          alt="weather_icon"
          quality={100}
        />
      </div>
    </div>
  );
};

export default WeatherInfo;
