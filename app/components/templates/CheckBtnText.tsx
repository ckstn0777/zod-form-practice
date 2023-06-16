import { cn } from "@/app/lib/util";
import { AiFillCheckCircle, AiOutlineRight } from "react-icons/ai";

type CheckBtnTextProps = {
  children: React.ReactNode;
  rightIcon?: boolean;
  checked?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function CheckBtnText({
  children,
  rightIcon,
  checked = false,
  ...rest
}: CheckBtnTextProps) {
  return (
    <button
      className="flex justify-center items-center"
      type="button"
      {...rest}
    >
      <AiFillCheckCircle
        className={cn("text-gray-300 mr-2", checked && "text-[#00CCAA]")}
        size={24}
      />
      {children}

      {rightIcon && <AiOutlineRight />}
    </button>
  );
}
