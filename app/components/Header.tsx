import { NavLink, useNavigate } from "react-router";
import Container from "./Container";
import { useContext, useEffect, useState } from "react";
import Authorization from "~/pages/Authorization/Authorization";
import { ModalAuthorizationContext } from "~/context/modalAuthorization";
import { getCookie } from "~/service/API";
import Menu from "./Menu";

const icon = "/images/Menu.svg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const context = useContext(ModalAuthorizationContext);
  const navigate = useNavigate();

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

  function handlePersonalAccount() {
    if (getCookie("access_token") !== null) {
      setIsOpenModal(false);
      return navigate("/personal");
    }
    setIsOpenModal(true);
  }

  return (
    <header
      className={`w-full fixed z-20 transition ease-in duration-300  ${scrolled ? " bg-white " : ""} ${isOpen ? " bg-white " : ""}`}
    >
      <Container>
        <div className="grid grid-cols-[1fr_auto_1fr] items-center py-4">
          <div>
            <div className="flex gap-x-8 text-[#E0BEA2] max-sm:hidden">
              <NavLink to="/" className="text-xl font-medium uppercase">
                NEW
              </NavLink>
              <NavLink to="/catalog" className="text-xl font-medium uppercase">
                Каталог
              </NavLink>
            </div>
            <div className="hidden max-sm:block">
              <button onClick={toggleMenu} className="bg-none border-none">
                <img src={icon} alt="меню" />
              </button>

              {isOpen && <Menu onClick={toggleMenu} />}
            </div>
          </div>
          <div>
            <NavLink to="/">
              <img
                src="/images/logo.svg"
                alt="Logo"
                className="w-80 max-sm:w-50"
              />
            </NavLink>
          </div>
          <div className="flex gap-x-8 max-sm:gap-x-2 justify-end">
            <button
              onClick={() => handlePersonalAccount()}
              className="cursor-pointer"
            >
              <img src="/images/person.svg" alt="" className="max-sm:w-5" />
            </button>
            <NavLink to="/favorites">
              <img
                src="/images/heart.svg"
                alt=""
                className="max-sm:w-5 max-sm:hidden"
              />
            </NavLink>
            <NavLink to="/cart">
              <img src="/images/cart.svg" alt="" className="max-sm:w-5" />
            </NavLink>
          </div>
        </div>
      </Container>

      {<Authorization />}
    </header>
  );
}
