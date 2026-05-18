import { Link, NavLink } from "react-router";
import Container from "./Container";
import { useContext, useEffect, useState } from "react";
import Authorization from "~/pages/Authorization/Authorization";
import { ModalAuthorizationContext } from "~/context/modalAuthorization";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const context = useContext(ModalAuthorizationContext);

  if (!context) {
    throw new Error("Не был получен контекс ModalAuthorizationContext");
  }

  const { setIsOpenModal } = context;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-20 w-full transition ease-in duration-300 ${scrolled ? " bg-white " : ""}`}
    >
      <Container>
        <div className="flex justify-between items-center py-4">
          <div className="flex gap-x-8 text-[#E0BEA2]">
            <NavLink to="/" className="text-xl font-medium uppercase">
              NEW
            </NavLink>
            <NavLink to="/catalog" className="text-xl font-medium uppercase">
              Каталог
            </NavLink>
          </div>
          <div>
            <NavLink to="/">
              <img src="/images/logo.svg" alt="Logo" width={400} />
            </NavLink>
          </div>
          <div className="flex gap-x-8">
            <NavLink to="/">
              <img src="/images/loupe.svg" alt="" />
            </NavLink>
            <button
              onClick={() => setIsOpenModal(true)}
              className="cursor-pointer"
            >
              <img src="/images/person.svg" alt="" />
            </button>
            <NavLink to="/">
              <img src="/images/heart.svg" alt="" />
            </NavLink>
            <NavLink to="/cart">
              <img src="/images/cart.svg" alt="" />
            </NavLink>
          </div>
        </div>
      </Container>

      {<Authorization />}
    </header>
  );
}
