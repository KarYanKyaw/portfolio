import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const FormInput = ({ type, name, label, placeholder = "", ...rest }) => {
  return (
    <div className="flex flex-col gap-3 items-start">
      <Label className="text-lg text-neutral-200/50 capitalize" htmlFor={name}>
        {label}
      </Label>
      <Input
        className=" bg-neutral-900 text-neutral-200"
        {...rest}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
