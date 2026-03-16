import type { ButtonProps } from "data/categories";

export default function Button({
  children,
  type = "button",
  variant,
  ...rest
}: ButtonProps) {
  const baseClass =
    "py-4 uppercase cursor-pointer hover:shadow-[0_5px_7px_0_#252525]/15 ";
  const variants = {
    brown:
      "bg-[#E0BEA2] text-white active:bg-[#CCA88A] active:shadow-[inset_0_3px_7px_0_#252525]/15",
    white:
      "border border-[#252525] text-[#252525] active:bg-[#F5F5F5] active:shadow-[inset_0_3px_7px_0_#252525]/15",
  };
  return (
    <button
      type={type}
      className={`${baseClass} ${variants[variant]}`}
      {...rest}
    >
      {children}
    </button>
  );
}
