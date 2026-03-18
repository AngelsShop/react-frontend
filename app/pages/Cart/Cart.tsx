import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router";
import Button from "~/components/Button";
import Container from "~/components/Container";
import OrderInformation from "./Components/OrderInformation";
import type {
  OrderActionTypeProps,
  OrderInformationProps,
} from "~/types/Components";

function formReducer(
  state: OrderInformationProps,
  action: OrderActionTypeProps,
) {
  switch (action.type) {
    case "change_field": {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    default: {
      throw Error(`unknown action type: ${action.type}`);
    }
  }
}

const orderDetails: OrderInformationProps = {
  name: "",
  lastName: "",
  email: "",
  telephone: "",
  city: "",
  postOffice: "",
};

export default function Cart() {
  const [state, dispatch] = useReducer(formReducer, orderDetails);

  function handleInputChange(field: keyof OrderInformationProps) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: "change_field",
        field,
        value: e.target.value,
      });
    };
  }

  return (
    <div className="mt-28 flex flex-col gap-y-16">
      <section>
        <Container>
          <h3>Ваш заказ</h3>
          <div>
            <p>Что-то типа заказа</p>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="grid grid-cols-[1fr_300px] gap-5">
            <OrderInformation
              state={state}
              handleInputChange={handleInputChange}
            />
            <div className="flex flex-col gap-5">
              <Link
                to="/"
                className="text-[#E0BEA2] underline decoration-solid"
              >
                Войти в личный кабинет
              </Link>
              <Link
                to="/pay-delivery"
                className="uppercase underline decoration-solid"
              >
                Условия доставки
              </Link>
              <Link
                to="/pay-delivery"
                className="uppercase underline decoration-solid"
              >
                Условия обмена и возврата
              </Link>
              <Link
                to="/pay-delivery"
                className="uppercase underline decoration-solid"
              >
                Информация об оплате
              </Link>
              <div className="flex flex-col gap-3.5">
                <div className="flex justify-between">
                  <span className="uppercase">Доставка:</span>
                  <span className="font-bold">По тарифам перевозчика</span>
                </div>
                <div className="flex justify-between">
                  <span className="uppercase">Бонусы:</span>
                  <span className="font-bold">-69 грн</span>
                </div>
                <div className="flex justify-between">
                  <span className="uppercase">Итого:</span>
                  <span className="font-bold">15250 руб</span>
                </div>
                <Button variant="brown">оформить заказ</Button>
                <p>
                  Нажимая на кнопку «оплатить заказ», я{" "}
                  <Link to="/" className="underline decoration-solid">
                    принимаю условия
                  </Link>{" "}
                  <Link to="/" className="underline decoration-solid">
                    публичной оферты и политики конфиденциальности
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
