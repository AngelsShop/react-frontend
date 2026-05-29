type Props = {
  colors: Set<string>;
  changeProductOfColor: (color: string) => void;
  size: "small" | "big";
  choosenColor: string;
};

export default function ColorJacket({
  colors,
  size,
  changeProductOfColor,
  choosenColor,
}: Props) {
  const sizes = {
    small: "w-3.5 h-3.5",
    big: "w-5 h-5",
  };
  return (
    <div className="flex gap-2">
      {Array.from(colors).map((color) => (
        <div
          className={`cursor-pointer rounded-full shadow-[0_0_1px_#252525] ${sizes[size]} ${color === choosenColor ? "shadow-[0_0_1px_1px_#000]  border-2 border-white" : ""}`}
          style={{ background: color }}
          onClick={() => changeProductOfColor(color)}
        ></div>
      ))}
    </div>
  );
}
