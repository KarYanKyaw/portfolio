import React, { useEffect, useState } from "react";
import { Logo, MobileNav, NavItems, Wrapper } from ".";

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
      className={`h-[70px] z-50 fixed top-0 w-full flex items-center ${
        scrollPos > 1 ? "bg-neutral-900" : "bg-neutral-800"
      } `}
    >
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
