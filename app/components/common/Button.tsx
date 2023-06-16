import { cn } from "@/app/lib/util";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, disabled, ...rest }: ButtonProps) {
  return (
    <button
      className={cn(
        "w-full bg-[#00CCAA] text-white rounded-[6px] px-4 py-3",
        disabled && "bg-gray-300"
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
