import React, { useState } from "react";
import { Button } from "./ui/button";
import { FormInput } from ".";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    textarea: "",
    email: "",
  });
  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      textarea: "",
      email: "",
    });
    toast("Thank You for sending me message. Have a nice day!");
  };
  return (
    <div className=" md:w-[80%] w-full mx-auto">
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col gap-5">
          <FormInput
            required
            onChange={handleInputChange}
            value={formData.name}
            type={"text"}
            name={"name"}
            label={"your name"}
            placeholder={"Enter Your Name"}
          />
          <FormInput
            required
            value={formData.email}
            onChange={handleInputChange}
            type="email"
            name="email"
            label="email"
            placeholder="Enter Your Email"
          />
          <Label
            className=" text-lg text-neutral-200/50 capitalize"
            htmlFor={"message"}
          >
            Say Somethig, dont be shy
          </Label>

          <Textarea
            required
            id="message"
            name="message"
            className=" bg-neutral-900 border-neutral-900 text-neutral-200"
          />

          <Button type="submit">Send Now</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
