import { Link } from "react-router";
import Button from "~/components/Button";
import Container from "~/components/Container";
import Input from "~/components/Input";
import RadioButton from "~/components/RadioButton";

export default function Cart() {
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
            <div className="w-full flex flex-col gap-5">
              <h3>Оформление заказа</h3>
              <div className="grid grid-cols-2 gap-5">
                <Input placeholder="Ваше имя*" required></Input>
                <Input placeholder="Ваша фамилия*"></Input>
                <Input placeholder="Ваш e-mail*"></Input>
                <Input placeholder="Ваш телефон*"></Input>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-5">
                  <span>По России</span>
                  <div className="flex flex-col gap-5">
                    <RadioButton
                      value="Самовывоз"
                      name="domestic delivery"
                    ></RadioButton>
                    <RadioButton
                      value="Почтой России"
                      name="domestic delivery"
                    ></RadioButton>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <span>Международная доставка:</span>
                  <div className="flex flex-col gap-5">
                    <RadioButton
                      value="Международная доставка"
                      name="international delivery"
                    ></RadioButton>
                    <RadioButton
                      value="СДЭК/7-10 дней/1390 руб"
                      name="international delivery"
                    ></RadioButton>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <span>Адрес доставки:</span>
                <div className="grid grid-cols-2 gap-5">
                  <Input placeholder="Город*" required></Input>
                  <Input placeholder="Отделение почты*"></Input>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <span>
                  Вы можете оплатить покупку одним из ниже перечисленных
                  способов:
                </span>
                <div className="grid grid-cols-2 gap-5">
                  <RadioButton
                    value="Полная предоплата"
                    name="pay delivery"
                  ></RadioButton>
                  <RadioButton
                    value="При получении"
                    name="pay delivery"
                  ></RadioButton>
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
