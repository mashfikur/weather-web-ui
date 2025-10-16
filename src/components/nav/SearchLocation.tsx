"use client";

import { LuSearch } from "react-icons/lu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const SearchLocation = () => {
  const navSearchRef = useRef<null | HTMLDivElement>(null);

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

  return (
    <div ref={navSearchRef} className="w-[0%] overflow-hidden">
      <InputGroup className="search_location_group w-full rounded-3xl px-5 py-6 dark:border-transparent dark:bg-[#1e1e1c]">
        <InputGroupInput placeholder="Search City" className="text-xl" />
        <InputGroupAddon>
          <LuSearch />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default SearchLocation;
