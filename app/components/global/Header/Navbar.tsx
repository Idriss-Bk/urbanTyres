import React from "react";
import Logo from "@/app/components/global/Header/Logo";
import Search from "@/app/components/global/Header/Search";
import Newsletter from "./Newsletter";
import Menu from "@/app/components/global/Header/Menu";
import Drawer from "@/app/components/global/Header/Drawer";

const Navbar = () => {
  return (
    <div>
      <div className="bg-white py-2.5 fixed w-full shadow z-40">
        <div className="max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[1250px] mx-auto md:px-6">
          <div className="flex justify-between items-center">
          <Drawer />
            <Logo />
            <div className="flex justify-center items-center gap-16">
              <Menu />
              <div className="flex justify-center items-center gap-3 lg:gap-5">
                <Newsletter />
                <Search />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
