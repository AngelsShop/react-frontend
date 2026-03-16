import { Link, NavLink } from "react-router";
import Container from "./Container";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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
            <a href="/">
              <img src="/images/logo.svg" alt="Logo" width={400} />
            </a>
          </div>
          <div className="flex gap-x-8">
            <a href="">
              <img src="/images/loupe.svg" alt="" />
            </a>
            <a href="">
              <img src="/images/person.svg" alt="" />
            </a>
            <a href="">
              <img src="/images/heart.svg" alt="" />
            </a>
            <NavLink to="/cart">
              <img src="/images/cart.svg" alt="" />
            </NavLink>
          </div>
        </div>
      </Container>
    </header>
  );
}
