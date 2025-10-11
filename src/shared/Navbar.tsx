import logo from "@/assets/main-logo.png";
import SearchLocation from "@/components/nav/SearchLocation";
import ToggleTheme from "@/components/nav/ToggleTheme";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between py-8">
      <div>
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            height={40}
            width={40}
            quality={100}
            alt="nav-logo"
          />
          <h1 className="text-3xl font-medium tracking-tight text-white">
            Forecasta
          </h1>
        </div>

        {/* location meter */}
        <div></div>
      </div>

      {/* search bar */}
      <SearchLocation />

      {/* toggle */}
      <ToggleTheme />
    </nav>
  );
};

export default Navbar;
