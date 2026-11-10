import { Link } from "react-router";
import Container from "../Container";
import LinkFooter from "./LinkFooter";

export default function Footer() {
  type CardProps = {
    children: React.ReactNode;
    className?: string;
  };

  const Ul = ({ children, className = "" }: CardProps) => {
    const baseStyle = "flex flex-col gap-y-2 mt-5";
    return <ul className={`${baseStyle} ${className}`}>{children}</ul>;
  };
  return (
    <footer>
      <Container>
        <div
          className="max-sm:grid-cols-2 grid grid-cols-4 my-24 gap-12 
      [&_h3]:uppercase
      "
        >
          <div className="w-min">
            <h3>Компания</h3>
            <Ul>
              <li>
                <LinkFooter title="Контакты" url="/contacts"></LinkFooter>
              </li>
            </Ul>
          </div>
          <div>
            <h3>Полезное</h3>
            <Ul>
              <li>
                <LinkFooter
                  url="/pay-delivery"
                  title="Оплата и доставка"
                ></LinkFooter>
              </li>
              <li>
                <LinkFooter
                  url="/terms-of-return"
                  title="Условия возврата"
                ></LinkFooter>
              </li>
            </Ul>
          </div>
          <div>
            <h3>Покупателю</h3>
            <Ul>
              <li>
                <LinkFooter url="/favorites" title="Избранное"></LinkFooter>
              </li>
              <li>
                <LinkFooter url="/" title="Публичная оферта"></LinkFooter>
              </li>
              <li>
                <LinkFooter
                  url="/"
                  title="Политика конфиденциальности"
                ></LinkFooter>
              </li>
            </Ul>
          </div>
          <div>
            <h3>Контакты</h3>
            <Ul>
              <li>
                <LinkFooter url="/" title="+7 (920) 772 69 69"></LinkFooter>
              </li>
              <li>
                <LinkFooter url="/" title="info@yanki.com"></LinkFooter>
              </li>
            </Ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
