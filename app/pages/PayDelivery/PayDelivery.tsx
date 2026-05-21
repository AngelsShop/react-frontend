import Container from "~/components/Container";

export default function PayDelivery() {
  return (
    <div className="mt-28">
      <Container>
        <div className="flex flex-col gap-5">
          <h3>Оплата и доставка</h3>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-2.5">
              <p>
                Вы можете оплатить покупку одним из ниже перечисленных способов:
              </p>
              <ul className="flex flex-col gap-1">
                <li>- в отделении Почты</li>
                <li>- переводом по номеру карты</li>
                <li>- полной оплатой на сайте</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2.5 ">
              <p>Мы готовы предложить несколько вариантов доставки:</p>
              <ul>
                <li>- отправка по всей России в отделение СДЭК(1-2 дня)</li>
                <li>
                  - международные сервисы доставки для жителей зарубежья (3-7
                  дней)
                </li>
                <li>- срок доставки: 1–2 дня с момента заказа</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-6 ">
            <span>Процесс оформления заказа с помощью LIQPAY:</span>
            <div className="flex items-center justify-around gap-14">
              <div className="flex gap-1">
                <img src="images/payDelivery/step1.svg" alt="" />
                <p>Выбрать в корзине способ оплаты "Мир"</p>
              </div>
              <div className="flex gap-1">
                <img src="images/payDelivery/step1.svg" alt="" />
                <p>Подтвердить заказ</p>
              </div>
              <div className="flex gap-1">
                <img src="images/payDelivery/step1.svg" alt="" />
                <p>
                  После этого Вас перенаправит на сайт Мир, где вы выбираете
                  удобный для вас способ оплаты
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
