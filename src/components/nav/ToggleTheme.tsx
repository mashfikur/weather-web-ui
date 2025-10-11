"use client";

import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import {
  ThemeAnimationType,
  useModeAnimation,
} from "react-theme-switch-animation";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { toggleTheme } from "@/redux/slices/siteSettingsSlice";

const ToggleTheme = () => {
  const dispatch = useAppDispatch();

  const { ref, toggleSwitchTheme } = useModeAnimation({
    animationType: ThemeAnimationType.CIRCLE,
  });
  const [isToggled, setToggle] = useState(false);

  const onToggle = () => {
    toggleSwitchTheme();
    setToggle(!isToggled);
    setTimeout(() => {
      dispatch(toggleTheme());
    }, 200);
  };

  return (
    <div>
      <div
        onClick={onToggle}
        className="relative flex size-11 cursor-pointer items-center justify-center overflow-hidden rounded-3xl bg-transparent text-3xl dark:bg-transparent dark:text-white"
      >
        <button
          ref={ref}
          className="relative z-10 h-full w-full cursor-pointer bg-transparent"
        ></button>

        <div className="absolute top-1.5">
          {/* @ts-expect-error - @theme-toggles/react has incompatible types with @types/react v18.3+ */}
          <Classic toggled={isToggled} toggle={onToggle} />
        </div>
      </div>
    </div>
  );
};

export default ToggleTheme;
