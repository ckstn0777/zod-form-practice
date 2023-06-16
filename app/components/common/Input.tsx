import { cn } from "@/app/lib/util";
import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

type InputProps = {
  errorMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, onChange, errorMessage, ...rest }, ref) => {
    const [value, setValue] = React.useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <div className="relative">
        <input
          type="text"
          id={id}
          className={cn(
            "w-full h-[44px] border-[1px] border-gray-40 rounded-[4px] px-[16px] outline-none",
            "placeholder:text-gray-60 placeholder:text-[14px]",
            errorMessage && "border-red-500"
          )}
          value={value}
          onChange={(e) => {
            onChange!(e);
            handleChange(e);
          }}
          ref={ref}
          {...rest}
        />

        {value && (
          <button type="button" onClick={() => setValue("")}>
            <AiFillCloseCircle className="text-gray-300 absolute right-[15px] top-[50%] -translate-y-[50%]" />
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
