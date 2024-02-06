import { ContactForm, ContactInfo, SectionHeader, Wrapper } from "@/components";
import React from "react";

const ContactSection = () => {
  return (
    <section
      className=" min-h-screen md:py-12 py-24 bg-neutral-800"
      id="contact"
    >
      <Wrapper>
        <SectionHeader>Contact Me</SectionHeader>
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className=" col-span-full md:col-span-1">
            <ContactInfo />
          </div>
          <div className=" col-span-full md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ContactSection;
