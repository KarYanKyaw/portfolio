import { createContext, useContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const skillsData = [
    {
      id: 31,
      skill: "HTML5",
      rating: 5,
      img: "https://skillicons.dev/icons?i=html",
    },
    {
      id: 69,
      skill: "CSS",
      rating: 5,
      img: "https://skillicons.dev/icons?i=css",
    },
    {
      id: 36,
      skill: "JavaScript (ES6+)",
      rating: 5,
      img: "	https://skillicons.dev/icons?i=js",
    },
    {
      id: 35,
      skill: "Bootstrap 5",
      rating: 4,
      img: "https://skillicons.dev/icons?i=bootstrap",
    },
    {
      id: 34,
      skill: "Tailwind CSS",
      rating: 5,
      img: "https://skillicons.dev/icons?i=tailwind",
    },
    {
      id: 32,
      skill: "Sass",
      rating: 3,
      img: "	https://skillicons.dev/icons?i=sass",
    },
    {
      id: 11,
      skill: "React.js",
      rating: 4,
      img: "https://skillicons.dev/icons?i=react",
    },

    {
      id: 44,
      skill: "GitHub",
      rating: 4,
      img: "https://skillicons.dev/icons?i=github",
    },
    {
      id: 46,
      skill: "Figma",
      rating: 2,
      img: "https://skillicons.dev/icons?i=figma",
    },
  ];

  const starsLooping = (rating) => {
    const stars = Array.from({ length: 5 }, (_, index) => index);

    return stars.map((star) => (
      <svg
        key={star}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-6 h-6  ${
          star < rating.toFixed(0)
            ? "fill-yellow-500 stroke-none"
            : "fill-none stroke-yellow-500"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
    ));
  };

  const data = { skillsData, starsLooping };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
