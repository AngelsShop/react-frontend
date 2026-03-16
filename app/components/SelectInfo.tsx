import type { ProductCardProps } from "data/categories";
import { useSelect } from "downshift";

type Props = {
  product: ProductCardProps;
};

export default function SelectInfo({ product }: Props) {
  function itemToString(item: string | null) {
    return String(item);
  }

  function Select() {
    const {
      isOpen,
      selectedItem,
      getToggleButtonProps,
      getMenuProps,
      highlightedIndex,
      getItemProps,
    } = useSelect({
      items: product.sizes,
      itemToString,
    });
    return (
      <div className="border relative">
        <div
          className="p-2 py-4 bg-white flex justify-between cursor-pointer"
          {...getToggleButtonProps()}
        >
          <span>{selectedItem ? selectedItem : "Выберите размер"}</span>
          <span className="px-2 text-[#E0BEA2]">
            {isOpen ? <>&#8593;</> : <>&#8595;</>}
          </span>
        </div>
        <ul
          className={`absolute w-full bg-white mt-1 shadow-md max-h-80 p-0 z-10 ${!isOpen && "hidden"}`}
          {...getMenuProps()}
        >
          {isOpen &&
            product.sizes.map((item, index) => (
              <li
                className={`py-2 px-3 shadow-sm flex flex-col ${highlightedIndex === index && "bg-[#E0BEA2]"}`}
                key={index}
                {...getItemProps({ item, index })}
              >
                <span>{item}</span>
              </li>
            ))}
        </ul>
      </div>
    );
  }
  return <Select />;
}
