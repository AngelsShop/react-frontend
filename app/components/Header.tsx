import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="fixed z-20 w-full ">
      <div className="mx-32  flex justify-between items-center py-4">
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
            <img src="/images/YANKIforWhite.svg" alt="Logo" />
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
          <a href="">
            <img src="/images/cart.svg" alt="" />
          </a>
        </div>
      </div>
    </header>
  );
}
