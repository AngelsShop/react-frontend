import { useState } from "react";
import { NavLink } from "react-router";
import MenuLink from "./MenuLink";

export default function IconMenu({ ...rest }) {
  return (
    <div
      className="fixed left-0 px-7.5 m-0 z-0 bg-white w-dvw h-lvh flex flex-col"
      {...rest}
    >
      <MenuLink url={"/"} name={"NEW"} />
      <MenuLink url={"/catalog"} name={"каталог"} />
      <MenuLink url={"/personal"} name={"личный кабинет"} />
      <MenuLink url={"/terms-of-return"} name={"условия возврата"} />
      <MenuLink url={"/contacts"} name={"контакты"} />
    </div>
  );
}
