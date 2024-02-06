import { createContext, useContext } from "react";
import cart from "../assets/cart.png";
import baydin2 from "../assets/baydin2.png";
import food from "../assets/food.png";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const contactData = [
    {
      id: 1,
      type: "Email",
      info: "karyankyaw02dev@gmail.com",
    },
    {
      id: 2,
      type: "Phone",
      info: "+959795020295",
    },
    {
      id: 3,
      type: "Linkedlin",
      info: "Kar Yan Kyaw",
      link: "https://www.linkedin.com/in/kar-yan-kyaw-93a5362b3/",
    },
    {
      id: 4,
      type: "Github",
      info: "https://github.com/KarYanKyaw",
      link: "https://github.com/KarYanKyaw",
    },
  ];
  const educationData = [
    {
      id: 1,
      title: "University Of Yangon",
      desc: "Had to leave Vangon University, until changes occurred in the political situation in Myanmar in 2021",
      date: "2018-2020",
      position: "right",
    },
    {
      id: 2,
      title: "MMS-IT",
      desc: "Learning both front-end with React and back-end with PHP in full-stack web development",
      date: "2021-present",
      position: "left",
    },
    {
      id: 3,
      title: "SCBI - Stamford-City Business Institute",
      desc: "Got Diploma in Communative English back in 2019.",
      date: "2018-2019",
      position: "right",
    },
  ];
  const projectsData = [
    {
      id: 1,
      img: cart,
      title: "E-commerce",
      desc: "My very first e-commerce project built using Vanilla JavaScript. The project incorporates Bootstrap, Sass, and SweetAlert2 libraries. For the data aspect, utilized the Fake Store API.",
      github: "https://github.com/KarYanKyaw/cart",
      project: "https://cart-44yq.vercel.app/",
    },
    {
      id: 2,
      img: baydin2,
      title: "Fortune Teller",
      desc: "Burmese fortune-telling website using Context API, React Router v6, and Tailwind CSS to engage users in an immersive experience.",
      github: "https://github.com/KarYanKyaw/Baydin-2",
      project: "https://baydinapp.vercel.app/",
    },
    {
      id: 3,
      img: food,
      title: "Bite Food",
      desc: "Replicate the real life website using React in collaboration with friends, with a focus on Git collaboration and project management. Utilized branching for feature development, pull requests for code review, conflict resolution, and versioning to track changes over time.",
      github: "https://github.com/KarYanKyaw/Bite-Food",
      project: "https://teamf.mmsdev.site/",
    },
  ];
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

  const data = {
    skillsData,
    starsLooping,
    educationData,
    projectsData,
    contactData,
  };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
