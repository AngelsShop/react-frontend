import Select from "react-select";
import AsyncSelect from "react-select/async";
import type { AddressData } from "~/types/AddressData";
const KEY_API = "f81c56dd28254e8bbdf47604d2ae805f";

const options = [
  { value: "Москва", label: "Москва" },
  { value: "Мурманск", label: "Мурманск" },
  { value: "Митино", label: "Mitino" },
];

async function loadCityOptions(inputValue: string) {
  const res = await fetch(
    `https://api.geoapify.com/v1/geocode/autocomplete?text=${inputValue}&apiKey=${KEY_API}&lang=ru`,
  );
  const data: AddressData = await res.json();
  console.log(data);
  return data.features.map((city) => ({
    value: city.properties.formatted,
    label: city.properties.formatted,
  }));
}

export default function CityAutocomplete() {
  return (
    <AsyncSelect
      loadOptions={loadCityOptions}
      placeholder="Город"
      instanceId="city-select"
      inputId="city-select-input"
      styles={{
        control: (base) => ({
          ...base,
          border: "1px solid #000",
          height: "100%",
          borderRadius: "0",
          boxShadow: "none",
          "&:hover": {
            border: "1px solid #E0BEA2",
          },
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isFocused ? "#E0BEA2" : "#fff",
          color: state.isFocused ? "#fff" : "#000",
          "&:active": {
            backgroundColor: "#CCA88A",
          },
        }),
      }}
    ></AsyncSelect>
  );
}
