import React, { useEffect, useState } from "react";
import { Logo, MobileNav, NavItems, ThemeDropdown, Wrapper } from ".";

const Navbar = () => {
  const [scrollPos, setScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);
  return (
    <div
      className={`h-[70px] z-50 ${
        scrollPos > 1 && "border-b"
      } fixed top-0 w-full flex items-center bg-primary-foreground`}
    >
      <Wrapper>
        <div className="flex items-center justify-between ">
          <Logo />
          <div className=" flex gap-3 items-center ">
            <ThemeDropdown />
            <div className="hidden md:block">
              <NavItems />
            </div>
            <div className="block md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
