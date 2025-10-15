"use client";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { IoIosWater } from "react-icons/io";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import weatherIcon from "@/assets/3D-icons/sun-clouds.svg";
import Image from "next/image";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
const WeatherInfo = () => {
  const info = useAppSelector((state) => state.weather?.current);

  const iconDiv = `flex items-center gap-2 text-xl text-gray-400`;

  const largeText = `text-4xl`;
  const smallText = `text-2xl font-medium`;

  return (
    <div className="flex basis-[60%] items-start justify-between gap-5">
      <div className="space-y-20">
        <div className="space-y-8">
          <div className="relative flex w-fit">
            <h3 className="font-secondary text-[150px] leading-[120px] font-extralight">
              {info?.temp_c ? Math.floor(info.temp_c) : "N/A"}
            </h3>
            <sup className="text-5xl font-thin">°C</sup>
            <span className="absolute -right-0 -bottom-0 text-3xl font-thin">
              {info?.isDay ? <IoSunny /> : <FaMoon />}
            </span>
          </div>

          <div className="space-y-2">
            <p className="text-[40px] font-thin"> {info?.condition?.text} </p>
            <div className="flex items-center gap-3 text-[20px] font-medium text-gray-400">
              <span>Feels like</span>
              <p className="relative">
                {info?.feelslike_c ? Math.floor(info.feelslike_c) : "N/A"}
                <sup className="pl-1 text-sm">°C</sup>
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-14">
          <div className="w-full space-y-5">
            <div className={iconDiv}>
              <IoIosWater />
              <p>Precipitation</p>
            </div>

            <div className="flex items-end gap-1">
              <p className={largeText}> {info?.precip_mm} </p>
              <span className={smallText}>mm</span>
            </div>
          </div>
          <div className="space-y-5">
            <div className={iconDiv}>
              <FaWind />
              <p>Wind</p>
            </div>

            <div className="flex items-end gap-1">
              <p className={largeText}> {info?.wind_kph} </p>
              <span className={smallText}>km/h</span>
            </div>
          </div>
          <div className="space-y-5">
            <div className={iconDiv}>
              <WiHumidity size={28} />
              <p>Humidity</p>
            </div>

            <div className="flex items-end gap-1">
              <p className={largeText}> {info?.humidity} </p>
              <span className={smallText}>%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex size-[400px] items-center justify-center rounded-full border bg-transparent">
        <Image
          src={weatherIcon}
          width={350}
          height={350}
          alt="weather_icon"
          quality={100}
        />
      </div>
    </div>
  );
};

export default WeatherInfo;
