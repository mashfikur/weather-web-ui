"use client";

import logo from "@/assets/main-logo.png";
import CurrentLocation from "@/components/nav/CurrentLocation";
import DateTime from "@/components/nav/DateTime";
import SearchLocation from "@/components/nav/SearchLocation";
import ToggleTheme from "@/components/nav/ToggleTheme";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current) {
      const nav = navRef.current;

      gsap.to(nav, {
        duration: 2.3,
        ease: "power3.inOut",
        opacity: 1,
      });
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className="container flex items-center justify-between py-8 opacity-0"
    >
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            height={40}
            width={40}
            quality={100}
            alt="nav-logo"
          />
          <h1 className="text-2xl font-medium tracking-tight text-black dark:text-white">
            Forecasta
          </h1>
        </div>

        {/* location meter */}
        <CurrentLocation />
      </div>

      {/* search bar */}
      <SearchLocation />

      {/* toggle */}
      <div className="flex items-center gap-10">
        <DateTime />

        <ToggleTheme />
      </div>
    </nav>
  );
};

export default Navbar;
