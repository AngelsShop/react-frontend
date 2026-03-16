import Container from "~/components/Container";

export default function TermsOfReturn() {
  return (
    <section>
      <Container>
        <div className="mt-28 flex flex-col gap-5">
          <h3>Обмен и возврат</h3>
          <div className="flex flex-col gap-2.5">
            <p>
              Если вам не подошел заказ, мы с удовольствием вам его обменяем или
              примем возврат
            </p>
            <p>Обмен и возврат возможен в случае :</p>
          </div>
          <ul className="grid grid-cols-6 gap-7">
            <li className="flex flex-col gap-2.5  items-center">
              <img src="/images/returnPolicy/1.png" alt="" />
              <p className="text-center">
                если заказ не был использован и сохранил товарный вид(в том
                числе не нарушены бирки, ярлыки, упаковочные материалы)
              </p>
            </li>
            <li className="flex flex-col gap-2.5 items-center">
              <img src="/images/returnPolicy/2.png" alt="" />
              <p className="text-center">
                возврат и обмен осуществляется в течение двух дней с момента
                получения заказа
              </p>
            </li>
            <li className="flex flex-col gap-2.5 items-center">
              <img src="/images/returnPolicy/3.png" alt="" />
              <p className="text-center">
                возврат и обмен товара возможен только при отправке по Росии
              </p>
            </li>
            <li className="flex flex-col gap-2.5 items-center">
              <img src="/images/returnPolicy/4.png" alt="" />
              <p className="text-center">
                бланк возврата присутствует в каждой посылке
              </p>
            </li>
            <li className="flex flex-col gap-2.5 items-center">
              <img src="/images/returnPolicy/5.png" alt="" />
              <p className="text-center">
                все расходы по обмену и возврату товара несет покупатель
              </p>
            </li>
            <li className="flex flex-col gap-2.5 items-center">
              <img src="/images/returnPolicy/6.png" alt="" />
              <p className="text-center">
                после получения возврата мы делаем перевод денежных средств на
                карту клиента
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
