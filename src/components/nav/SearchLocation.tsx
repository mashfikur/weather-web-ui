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
import { useAppDispatch } from "@/redux/hooks";
import { useQuery } from "@tanstack/react-query";
import { MoonLoader } from "react-spinners";
import axios from "axios";
import {
  resetWeather,
  setWeatherLocation,
  TLocation,
} from "@/redux/slices/weatherSlice";

const SearchLocation = () => {
  const navSearchRef = useRef<null | HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const [showSearchResult, setShowSearchResult] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState<string | null>(null);

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

  const handleSelect = (item: TLocation) => {
    dispatch(setWeatherLocation(item));
    setShowSearchResult(false);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();

    if (value.length > 0) {
      setShowSearchResult(true);
      setInputValue(value);
    } else {
      setShowSearchResult(false);
      setInputValue("");
    }
  };

  useEffect(() => {
    if (!inputValue.trim()) {
      return;
    }

    const handler = setTimeout(() => {
      setSearchValue(inputValue);
    }, 1500);

    return () => clearTimeout(handler);
  }, [inputValue]);

  const { data, isLoading } = useQuery({
    enabled: !!searchValue,
    queryKey: ["searchKey", searchValue],

    queryFn: async () => {
      const res = await axios.get(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/places?limit=5&offset=0&namePrefix=${searchValue}`,
        {
          headers: {
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
            "x-rapidapi-key":
              "93ca5582fcmshe816974e27bec1cp100cadjsn3f396b3ad504",
          },
        },
      );

      return res.data.data;
    },
  });

  return (
    <div ref={navSearchRef} className="relative z-50 w-[0%]">
      <div className="overflow-hidden">
        <InputGroup className="search_location_group w-full rounded-3xl px-5 py-6 dark:border-transparent dark:bg-[#1e1e1c]">
          <InputGroupInput
            placeholder="Search City"
            className="text-xl"
            onChange={handleSearch}
          />
          <InputGroupAddon>
            <LuSearch />
          </InputGroupAddon>
        </InputGroup>

        <div
          className={`bg absolute top-15 left-0 h-fit min-h-[260px] w-full overflow-hidden rounded-3xl border bg-white shadow-2xl dark:bg-[#1e1e1c] ${!showSearchResult ? `invisible opacity-0` : ``}`}
        >
          {isLoading ? (
            <div className="h-full w-full items-center justify-center">
              <div className="mx-auto my-20 w-fit">
                <MoonLoader color="white" />
              </div>
            </div>
          ) : data && data.length > 1 ? (
            <div className="divide-y-white divide-y">
              {data.map((item: TLocation, index: number) => (
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
          ) : (
            <div className="p-6 text-center opacity-70">
              <p>No Results found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchLocation;
