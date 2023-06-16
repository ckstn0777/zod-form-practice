import { AiFillCheckCircle, AiOutlineRight } from "react-icons/ai";

type CheckBtnTextProps = {
  children: React.ReactNode;
  rightIcon?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function CheckBtnText({
  children,
  rightIcon,
  ...rest
}: CheckBtnTextProps) {
  return (
    <button
      className="flex justify-center items-center"
      type="button"
      {...rest}
    >
      <AiFillCheckCircle className="text-gray-300 mr-2" size={24} />
      {children}

      {rightIcon && <AiOutlineRight />}
    </button>
  );
}
