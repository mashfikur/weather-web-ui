"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSiteTheme } from "@/redux/slices/siteSettingsSlice";
import { useEffect } from "react";
import useWeatherInfo from "@/hooks/useWeatherInfo";

// Create a client
const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useAppSelector((state) => state.site);
  const dispatch = useAppDispatch();

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

  const { isLoading } = useWeatherInfo({});

  if (isLoading) return null;

  return (
    <div className="text-textPrimary dark:text-textPrimary relative min-h-screen w-full">
      <div
        className={`custom_bg ${theme === "dark" ? `active` : ``} absolute inset-0 z-[2]`}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AppWrapper;
