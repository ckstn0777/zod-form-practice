type InputProps = {
  id: string;
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ id, name, ...rest }: InputProps) {
  return (
    <input
      type="text"
      id={id}
      name={name}
      className="w-full h-[44px] border-[1px] border-gray-40 rounded-[4px] px-[16px]"
    />
  );
}
