import { Link } from "react-router";

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
    <div
      className="flex justify-center my-24 gap-x-12 bottom-0
      [&_div]:w-3xs
      [&_a]:text-base 
      [&_a]:text-[#252525]
      "
    >
      <div>
        <h3>Компания</h3>
        <Ul>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </Ul>
      </div>
      <div>
        <h3>Полезное</h3>
        <Ul>
          <li>
            <Link to="/pay-delivery">Оплата и доставка</Link>
          </li>
          <li>
            <Link to="/terms-of-return">Условия возврата</Link>
          </li>
        </Ul>
      </div>
      <div>
        <h3>Покупателю</h3>
        <Ul>
          <li>
            <Link to="/favorites">Избранное</Link>
          </li>
          <li>
            <Link to="/">Публичная оферта</Link>
          </li>
          <li>
            <Link to="/">Политика конфиденциальности</Link>
          </li>
        </Ul>
      </div>
      <div>
        <h3>Контакты</h3>
        <Ul>
          <li>
            <Link to="/">+7 (973) 096 36 44</Link>
          </li>
          <li>
            <Link to="/">info@yanki.com</Link>
          </li>
        </Ul>
      </div>
    </div>
  );
}
