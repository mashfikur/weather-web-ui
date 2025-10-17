import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import dayjs from "dayjs";
const AreaInfo = () => {
  const currentLocation = useAppSelector((state) => state.weather.location);
  const lastUpdated = useAppSelector(
    (state) => state.weather?.current?.last_updated,
  );

  return (
    <div className="space-y-5 rounded-3xl border bg-[rgba(256,256,256,0.05)] px-6 py-8">
      <div className="flex items-center gap-4">
        <div className="text-lg opacity-40">
          <IoLocation />
        </div>

        <div className="text-lg font-medium">
          <span> {currentLocation.name} </span>,
          <span className="opacity-75"> {currentLocation.country} </span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-lg opacity-40">
          <FaCalendarAlt />
        </div>

        <div className="text-lg font-medium">
          <p>
            {" "}
            {dayjs(lastUpdated).format("dddd , DD MMMM ~ hh:mm A")}{" "}
            <span className="pl-2 text-sm font-normal opacity-45">
              ( last updated )
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AreaInfo;
