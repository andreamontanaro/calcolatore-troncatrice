import React, { useState } from "react";

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputForm: React.FC<InputFormProps> = ({ label, ...props }) => {
  const [active, setActive] = useState(props.value?.toString().length || false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setActive(true);
    if (props.onFocus) props.onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setActive(e.target.value !== "");
    if (props.onBlur) props.onBlur(e);
  };

  const classes = `relative w-full border rounded-md px-3 py-2 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 ease-in-out ${
    active ? "pt-5" : ""
  }`;

  const labelClasses = `absolute left-3 transition-all duration-200 ease-in-out text-blue-300 ${
    active ? "top-1 text-xs" : "top-1/4"
  }`;

  return (
    <div className="relative w-full">
      <input
        {...props}
        className={classes}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label htmlFor={props.id} className={labelClasses}>
        {label}
      </label>
    </div>
  );
};

export default InputForm;
