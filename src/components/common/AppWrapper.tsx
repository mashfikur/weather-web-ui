"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSiteTheme } from "@/redux/slices/siteSettingsSlice";
import { useEffect, useState } from "react";
import useWeatherInfo from "@/hooks/useWeatherInfo";
import Navbar from "@/shared/Navbar";
import { ClockLoader } from "react-spinners";
// Create a client
const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useAppSelector((state) => state.site);
  const location = useAppSelector((state) => state.weather.location);
  const dispatch = useAppDispatch();

  const [customLoading, setCustomLoading] = useState(true);

  // Load from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || null;

    if (storedTheme) {
      dispatch(setSiteTheme(storedTheme));
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
      console.log("entered storage");
    } else {
      // first time if someone comes
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const defaultTheme = prefersDark ? "dark" : "light";
      dispatch(setSiteTheme(defaultTheme));
      document.documentElement.classList.toggle("dark", prefersDark);

      console.log("entered windows");
    }

    // eslint-disable-next-line
  }, []);

  const { isLoading } = useWeatherInfo({
    lat: location?.latitude,
    long: location?.longitude,
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setCustomLoading(isLoading);
    }, 1500);

    return () => clearTimeout(handler);
  }, [isLoading]);

  return (
    <div className="text-textPrimary dark:text-textPrimary relative min-h-screen w-full">
      <div
        className={`custom_bg ${theme === "dark" ? `active` : ``} absolute inset-0 z-[2]`}
      />
      <Navbar />

      <main className="relative z-10">
        {customLoading ? (
          <div className="flex h-[70vh] w-full items-center justify-center opacity-40">
            <ClockLoader color="white" size={150} />
          </div>
        ) : (
          children
        )}
      </main>
    </div>
  );
};

export default AppWrapper;
