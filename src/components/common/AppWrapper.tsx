"use client";
import { useAppSelector } from "@/redux/hooks";
import store from "@/redux/store";
import { Provider } from "react-redux";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useAppSelector((state) => state.site);

  return (
    <Provider store={store}>
      <div className="relative min-h-screen w-full text-black dark:text-white">
        <div
          className={`custom_bg ${theme === "dark" ? `active` : ``} absolute inset-0 z-[2]`}
        />

        <div className="relative z-10">{children}</div>
      </div>
    </Provider>
  );
};

export default AppWrapper;
