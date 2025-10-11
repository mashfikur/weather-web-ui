import logo from "@/assets/main-logo.png";
import CurrentLocation from "@/components/nav/CurrentLocation";
import SearchLocation from "@/components/nav/SearchLocation";
import ToggleTheme from "@/components/nav/ToggleTheme";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between py-8">
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
      <ToggleTheme />
    </nav>
  );
};

export default Navbar;
