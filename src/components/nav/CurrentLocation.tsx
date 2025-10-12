"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setUserLocation } from "@/redux/slices/siteSettingsSlice";
import { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";

const CurrentLocation = () => {
  const dispatch = useAppDispatch();

  const location = useAppSelector((state) => state.site?.location);

  useEffect(() => {
    if (!location?.lat && !location?.long) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);

            dispatch(
              setUserLocation({
                lat: latitude,
                long: longitude,
              }),
            );
          },
          (error) => {
            console.error("Error getting location:", error);
          },
        );
      } else {
        console.log("Geolocation not supported by this browser.");
      }
    }

    // eslint-disable-next-line
  }, [location?.lat, location?.long]);

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
