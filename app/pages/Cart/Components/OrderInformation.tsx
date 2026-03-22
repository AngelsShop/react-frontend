import Input from "~/components/Input";
import RadioButton from "~/components/RadioButton";
import type { OrderInformationProps } from "~/types/Components";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
import {
  GeoapifyContext,
  GeoapifyGeocoderAutocomplete,
} from "@geoapify/react-geocoder-autocomplete";
import CityAutocomplete from "./CityAutocomplete";

type Props = {
  state: OrderInformationProps;
  handleInputChange: (
    field: keyof OrderInformationProps,
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function OrderInformation({ state, handleInputChange }: Props) {
  return (
    <div className="w-full flex flex-col gap-5">
      <h3>Оформление заказа</h3>
      <div className="grid grid-cols-2 gap-5">
        <Input
          value={state.name}
          onChange={handleInputChange("name")}
          placeholder="Ваше имя*"
          required
        ></Input>
        <Input
          value={state.lastName}
          onChange={handleInputChange("lastName")}
          placeholder="Ваша фамилия*"
        ></Input>
        <Input
          value={state.email}
          onChange={handleInputChange("email")}
          placeholder="Ваш e-mail*"
        ></Input>
        <Input
          value={state.telephone}
          onChange={handleInputChange("telephone")}
          placeholder="Ваш телефон*"
        ></Input>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-5">
          <span>По России</span>
          <div className="flex flex-col gap-5">
            <RadioButton value="Самовывоз" name=" delivery"></RadioButton>
            <RadioButton value="Почтой России" name=" delivery"></RadioButton>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <span>Международная доставка:</span>
          <div className="flex flex-col gap-5">
            <RadioButton
              value="Международная доставка"
              name=" delivery"
            ></RadioButton>
            <RadioButton
              value="СДЭК/7-10 дней/1390 руб"
              name=" delivery"
            ></RadioButton>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <span>Адрес доставки:</span>
        <div className="grid grid-cols-2 gap-5">
          <CityAutocomplete></CityAutocomplete>
          <Input
            onChange={handleInputChange("postOffice")}
            placeholder="Отделение почты*"
          ></Input>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <span>
          Вы можете оплатить покупку одним из ниже перечисленных способов:
        </span>
        <div className="grid grid-cols-2 gap-5">
          <RadioButton
            value="Полная предоплата"
            name="pay delivery"
          ></RadioButton>
          <RadioButton value="При получении" name="pay delivery"></RadioButton>
          <RadioButton
            value="Оплата в рассрочку"
            name="pay delivery"
          ></RadioButton>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <span>Использование бонусного счёта:</span>
        <Input placeholder="Сумма списания бонусов*"></Input>
      </div>
    </div>
  );
}
