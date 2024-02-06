import React from "react";
import { Logo, MobileNav, NavItems, Wrapper } from ".";

const Navbar = () => {
  return (
    <div className="h-[70px] z-50 fixed top-0 w-full flex items-center bg-neutral-800">
      <Wrapper>
        <div className="flex items-center justify-between ">
          <Logo />
          <div className="hidden md:block">
            <NavItems />
          </div>
          <div className="block md:hidden">
            <MobileNav />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
