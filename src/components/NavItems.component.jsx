import React from "react";

const NavItems = () => {
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
    <div className=" flex flex-row  gap-7">
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
  );
};

export default NavItems;
