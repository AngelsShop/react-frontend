import { useSelect, useTagGroup } from "downshift";
import type { FilterProps } from "~/types/Components";

type PropsDropDownList = {
  filter: FilterProps;
};

export default function DropDownList({ filter }: PropsDropDownList) {
  function itemToString(item: string | null) {
    return String(item);
  }

  function Select() {
    const initialItems: string[] = [];

    const { addItem, getTagProps, getTagRemoveProps, getTagGroupProps, items } =
      useTagGroup({
        initialItems,
      });
    const itemsToAdd = filter.options;

    const {
      isOpen,
      selectedItem,
      getToggleButtonProps,
      getMenuProps,
      highlightedIndex,
      getItemProps,
    } = useSelect({
      items: itemsToAdd,
      itemToString,
      onSelectedItemChange({ selectedItem }) {
        if (selectedItem && !items.includes(selectedItem)) {
          addItem(selectedItem);
        }
      },
      selectedItem: null,
      stateReducer(_state, actionAndChanges) {
        const { changes, type } = actionAndChanges;

        if (
          changes.selectedItem &&
          type !== useSelect.stateChangeTypes.ToggleButtonBlur
        ) {
          return {
            ...changes,
            isOpen: true,
          };
        }

        return changes;
      },
    });

    return (
      <div>
        <div className="w-72 flex flex-col gap-1">
          <div
            className="p-2 bg-white flex justify-between cursor-pointer"
            {...getToggleButtonProps()}
          >
            <span>{selectedItem ? selectedItem : filter.title}</span>
            <span className="px-2 text-[#E0BEA2]">
              {isOpen ? <>&#8593;</> : <>&#8595;</>}
            </span>
          </div>
        </div>
        <div className="w-72 flex gap-2 items-center flex-wrap p-1.5">
          {items.map((item, index) => (
            <span
              className={`border border-[#E0BEA2] px-1.5 mx-0.5 rounded-[10px] cursor-default hover:opacity-50 `}
              key={index}
              {...getTagProps({ index, "aria-label": item })}
            >
              {item}
              <span
                className="p-1 cursor-pointer border-0 bg-transparent"
                {...getTagRemoveProps({ index, "aria-label": "remove" })}
              >
                &#10005;
              </span>
            </span>
          ))}
        </div>
        <ul
          className={`absolute w-72 bg-white mt-1 shadow-md max-h-80 p-0 z-10 ${
            !isOpen && "hidden"
          }`}
          {...getMenuProps()}
        >
          {isOpen &&
            itemsToAdd.map((item, index) => (
              <li
                className={`${highlightedIndex === index && "bg-[#E0BEA2]"} py-2 px-3 shadow-sm flex flex-col`}
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
