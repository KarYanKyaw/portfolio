import React from "react";
import kyk from "../assets/kyk2.jpg";
import { useAppContext } from "@/contexts/AppContext";

const ContactInfo = () => {
  const { contactData } = useAppContext();
  return (
    <div className="group relative rounded-lg space-y-3 bg-neutral-900">
      <img src={kyk} alt="kyk" className="rounded-md" />
      <div className=" opacity-100 absolute bottom-0 duration-300 bg-neutral-950/90 px-5 py-1 w-full rounded z-50">
        {contactData.map(({ id, type, info, link }) => (
          <div key={id}>
            <p className="text-neutral-200/60 font-serif font-medium">{type}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-neutral-200 text-lg"
            >
              {info}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
