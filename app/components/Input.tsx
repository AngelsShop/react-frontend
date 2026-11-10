export default function Input({
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...rest}
      className="w-full p-2 sm:py-4 sm:px-5 border focus:border-[#E0BEA2] outline-0 text-[14px] sm:text-[16px]"
    ></input>
  );
}
