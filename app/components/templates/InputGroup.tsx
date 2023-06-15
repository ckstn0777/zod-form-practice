import React from "react";
import Input from "../common/Input";

type InputGroupProps = {
  id: string;
  label: string;
  required?: boolean;
  errorMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputGroup = React.forwardRef<HTMLInputElement, InputGroupProps>(
  ({ id, label, required = true, errorMessage, ...rest }, ref) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={id} className="text-sm text-[#686e7b] mb-[2px]">
          {label}
          {required && <span className="text-[#ff0000] text-lg ml-1">*</span>}
        </label>
        <div className="mb-[20px]">
          <Input id={id} ref={ref} errorMessage={errorMessage} {...rest} />

          {errorMessage && (
            <div>
              <p className="mt-[4px] text-xs text-red-500">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
);

InputGroup.displayName = "InputGroup";

export default InputGroup;

// export default function InputGroup({
//   id,
//   label,
//   required = true,
//   errorMessage,
//   ...rest
// }: InputGroupProps) {
//   return (
//     <div className="flex flex-col">
//       <label htmlFor={id} className="text-sm text-[#686e7b] mb-[2px]">
//         {label}
//         {required && <span className="text-[#ff0000] text-lg ml-1">*</span>}
//       </label>
//       <div className="mb-[20px]">
//         <Input id={id} {...rest} />

//         {errorMessage && (
//           <div>
//             <p className="mt-[4px] text-xs">{errorMessage}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
