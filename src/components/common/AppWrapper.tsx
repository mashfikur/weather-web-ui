"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSiteTheme } from "@/redux/slices/siteSettingsSlice";
import store from "@/redux/store";
import { useEffect } from "react";
import { Provider } from "react-redux";

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

  return (
    <Provider store={store}>
      <div className="text-textPrimary dark:text-textPrimary relative min-h-screen w-full">
        <div
          className={`custom_bg ${theme === "dark" ? `active` : ``} absolute inset-0 z-[2]`}
        />

        <div className="relative z-10">{children}</div>
      </div>
    </Provider>
  );
};

export default AppWrapper;
