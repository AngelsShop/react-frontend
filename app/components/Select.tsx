import { useSelect } from "downshift";
import type { CategoriesProps } from "~/types/Product";

type PropsCategories = {
  categories: CategoriesProps[];
};

export default function SelectCategory({ categories }: PropsCategories) {
  function itemToString(item: CategoriesProps | null) {
    return item ? item.name : "";
  }

  function Select() {
    const {
      isOpen,
      selectedItem,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      highlightedIndex,
      getItemProps,
    } = useSelect({
      items: categories,
      itemToString,
    });

    return (
      <div className="w-full relative">
        <div className="bg-[#E0BEA2] w-full  flex flex-col gap-1">
          <div
            className="p-2  flex justify-center cursor-pointer"
            {...getToggleButtonProps()}
          >
            <span className="text-white">
              {selectedItem ? selectedItem.name : "Каталог"}
            </span>
            <span className="px-2 text-white">
              {isOpen ? <>&#8593;</> : <>&#8595;</>}
            </span>
          </div>
        </div>
        <ul
          className={`absolute w-full bg-white mt-1 shadow-md max-h-80 overflow-scroll p-0 z-10 ${
            !isOpen && "hidden"
          }`}
          {...getMenuProps()}
        >
          {isOpen &&
            categories.map((item, index) => (
              <li
                className={`${
                  highlightedIndex === index && "bg-[#E0BEA2] text-white"
                } py-2 px-3 shadow-sm flex flex-col text-black`}
                key={item.id}
                {...getItemProps({ item, index })}
              >
                <span>{item.name}</span>
              </li>
            ))}
        </ul>
      </div>
    );
  }

  return <Select />;
}
