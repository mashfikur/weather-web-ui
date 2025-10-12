"use client";
import { useAppSelector } from "@/redux/hooks";
import React from "react";

import Image from "next/image";
import dayjs from "dayjs";

const Forecast = () => {
  const forecast = useAppSelector((state) => state.weather.forecast);

  return (
    <div className="h-fit w-[30%] rounded-2xl border py-2 shadow-lg">
      {forecast &&
        forecast.map((item, index) => (
          <div key={index} className="grid grid-cols-10 px-4 py-3">
            <div className="col-span-6 flex items-center gap-5">
              <Image
                src={
                  item.day.condition.icon
                    ? item.day.condition.icon.replace(/^\/\//, "https://")
                    : ""
                }
                width={40}
                height={40}
                alt="weather_icon"
                quality={100}
              />
              <div>
                <p className="text-lg font-medium">
                  {" "}
                  {dayjs(item.date).format("dddd")}{" "}
                </p>
                <p className="text-sm opacity-70">
                  {" "}
                  {item.day.condition?.text}{" "}
                </p>
              </div>
            </div>

            <div className="col-span-2 flex items-center justify-start">
              <p className="text-lg font-medium">
                {dayjs(item.date).format("DD MMM")}
              </p>
            </div>
            <div className="col-span-2 flex items-center justify-end gap-1">
              <p className="text-lg font-medium">
                {item.day.maxtemp_c ? Math.floor(item.day.maxtemp_c) : "N/A"}
                <sup>°C</sup>
              </p>
              <span>/</span>
              <p className="text-base font-medium opacity-70">
                {item.day.mintemp_c ? Math.floor(item.day.mintemp_c) : "N/A"}
                <sup>°C</sup>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Forecast;
