import { ContactForm, ContactInfo, SectionHeader, Wrapper } from "@/components";
import Aos from "aos";
import React, { useEffect } from "react";

const ContactSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      className=" min-h-screen Center overflow-y-hidden  bg-neutral-800"
      id="contact"
    >
      <Wrapper>
        <SectionHeader>Contact Me</SectionHeader>
        <div className=" grid grid-cols-1 gap-12 items-center md:grid-cols-2">
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className=" col-span-full md:col-span-1"
          >
            <ContactInfo />
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className=" col-span-full md:col-span-1"
          >
            <ContactForm />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ContactSection;
