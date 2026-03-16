type Props = {
  colors: string[];
  size: "small" | "big";
};

export default function ColorJacket({ colors, size }: Props) {
  const sizes = {
    small: "w-3.5 h-3.5",
    big: "w-5 h-5",
  };
  return (
    <div className="flex gap-2">
      {colors.map((color) => (
        <div
          className={`rounded-full shadow-[0_0_1px_#252525] ${sizes[size]}`}
          style={{ background: color }}
        ></div>
      ))}
    </div>
  );
}
