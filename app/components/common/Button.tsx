type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="w-full bg-[#00CCAA] text-white rounded-[6px] px-4 py-3"
      {...rest}
    >
      {children}
    </button>
  );
}
