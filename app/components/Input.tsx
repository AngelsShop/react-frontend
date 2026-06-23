export default function Input({
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...rest}
      className="w-full py-3.5 px-5 border focus:border-[#E0BEA2] outline-0"
    ></input>
  );
}
