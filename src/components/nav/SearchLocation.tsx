"use client";

import { LuSearch } from "react-icons/lu";
import { IoLocation } from "react-icons/io5";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { setUserLocation, TLocation } from "@/redux/slices/siteSettingsSlice";
import { useAppDispatch } from "@/redux/hooks";
import useWeatherInfo from "@/hooks/useWeatherInfo";

const SearchLocation = () => {
  const navSearchRef = useRef<null | HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const [customLoc, setCustomLoc] = useState<TLocation | null>(null);

  console.log(customLoc);

  const [showSearchResult, setShowSearchResult] = useState(false);

  useEffect(() => {
    if (navSearchRef.current) {
      const searchBar = navSearchRef.current;

      gsap.to(searchBar, {
        width: `45%`,
        duration: 2,
        ease: "power3.inOut",
      });
    }
  }, []);

  const arr = [
    {
      name: "Dhaka",
      country: "Bangladesh",
      latitude: 55.750555555,
      longitude: 37.6175,
    },
    {
      name: "Dhaka",
      country: "Bangladesh",
      latitude: 23.728888888,
      longitude: 90.394444444,
    },
    {
      name: "Dhaka",
      country: "Bangladesh",
      latitude: 23.728888888,
      longitude: 90.394444444,
    },
    {
      name: "Dhaka",
      country: "Bangladesh",
      latitude: 23.728888888,
      longitude: 90.394444444,
    },
  ];

  // useWeatherInfo({
  //   lat: customLoc?.latitude,
  //   long: customLoc?.longitude,
  // });

  const handleSelect = (item: TLocation) => {
    setCustomLoc(item);
    console.log("set");
    dispatch(setUserLocation(item));
  };

  return (
    <div ref={navSearchRef} className="relative z-50 w-[0%]">
      <div className="overflow-hidden">
        <InputGroup className="search_location_group w-full rounded-3xl px-5 py-6 dark:border-transparent dark:bg-[#1e1e1c]">
          <InputGroupInput placeholder="Search City" className="text-xl" />
          <InputGroupAddon>
            <LuSearch />
          </InputGroupAddon>
        </InputGroup>

        <div
          className={`bg absolute top-15 left-0 h-fit min-h-[260px] w-full overflow-hidden rounded-3xl border bg-white shadow-2xl dark:bg-[#1e1e1c]`}
        >
          <div className="divide-y-white divide-y">
            {arr.map((item, index) => (
              <div
                onClick={() => handleSelect(item)}
                key={index}
                className="flex cursor-pointer items-center gap-3 px-8 py-5 duration-300 ease-in-out hover:bg-[#666]/20"
              >
                <div className="text-xl opacity-50">
                  <IoLocation />
                </div>
                <div className="flex">
                  <span>
                    <span className="font-semibold">{item.name}</span> ,{" "}
                    <span className="opacity-70">{item.country}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchLocation;
