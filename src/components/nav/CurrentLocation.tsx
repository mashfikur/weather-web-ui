"use client";

import { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
const CurrentLocation = () => {
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("Latitude:", latitude);
          console.log("Longitude:", longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        },
      );
    } else {
      console.log("Geolocation not supported by this browser.");
    }
  }, []);
  return (
    <div className="flex items-center gap-2">
      <FaLocationDot />
      <div>
        <p className="flex items-center gap-1">
          <span className="font-semibold">Dhaka</span>
          <span>,</span>
          <span className="opacity-80">Bangladesh</span>
        </p>
      </div>
    </div>
  );
};

export default CurrentLocation;
