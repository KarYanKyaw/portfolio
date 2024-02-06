import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavItems } from ".";

const MobileNav = () => {
  const navItems = [
    {
      id: 1,
      section: "About",
      to: "about",
    },

    {
      id: 3,
      section: "Skills",
      to: "skills",
    },
    {
      id: 4,
      section: "Projects",
      to: "projects",
    },
    {
      id: 2,
      section: "Education",
      to: "education",
    },
    {
      id: 5,
      section: "Contact",
      to: "contact",
    },
  ];
  return (
    <Sheet>
      <SheetTrigger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription asChild>
            <SheetClose asChild>
              <div className=" flex md:flex-row flex-col gap-7">
                {navItems.map(({ to, id, section }) => (
                  <a
                    href={`#${to}`}
                    key={id}
                    className="nav-item pb-4 md:pb-0 border-b md:border-b-0 text-lg font-medium"
                  >
                    {section}
                  </a>
                ))}
              </div>
            </SheetClose>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
