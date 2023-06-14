import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, ...rest }, ref) => {
    return (
      <div className="relative">
        <input
          type="text"
          id={id}
          className="w-full h-[44px] border-[1px] border-gray-40 rounded-[4px] px-[16px]"
          ref={ref}
          {...rest}
        />

        <button type="button">
          <AiFillCloseCircle className="text-gray-300 absolute right-[15px] top-[50%] -translate-y-[50%]" />
        </button>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

// export default function Input({ id, ...rest }: InputProps) {
//   return (
//     <div className="relative">
//       <input
//         type="text"
//         id={id}
//         className="w-full h-[44px] border-[1px] border-gray-40 rounded-[4px] px-[16px]"
//         {...rest}
//       />

//       <button type="button">
//         <AiFillCloseCircle className="text-gray-300 absolute right-[15px] top-[50%] -translate-y-[50%]" />
//       </button>
//     </div>
//   );
// }
