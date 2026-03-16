type Props = {
  value: string;
  name: string;
};

export default function RadioButton({ value, name }: Props) {
  return (
    <div>
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        className="mr-2.5 appearance-none border-white border-4 checked:bg-[#E0BEA2] shadow-[0_0_0_0.3px_#252525] size-3.5 rounded-full"
      />
      <label htmlFor={value}>{value}</label>
    </div>
  );
}
