"use client";

import { useAppSelector } from "@/redux/hooks";

import { FaLocationDot } from "react-icons/fa6";

const CurrentLocation = () => {
  const location = useAppSelector((state) => state.site?.location);

  return (
    <div className="flex items-center gap-2">
      <FaLocationDot />
      <div>
        <p className="flex items-center gap-1">
          <span className="font-semibold"> {location?.name} </span>
          <span>,</span>
          <span className="opacity-80">Bangladesh</span>
        </p>
      </div>
    </div>
  );
};

export default CurrentLocation;
