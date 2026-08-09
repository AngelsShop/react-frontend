import { useState } from "react";
import { NavLink } from "react-router";
import LinkMenu from "./LinkMenu";

export default function Menu({ ...rest }) {
  return (
    <div
      className="fixed left-0 px-7.5 m-0 z-0 bg-white w-dvw h-lvh flex flex-col"
      {...rest}
    >
      <LinkMenu url={"/"} name={"NEW"} />
      <LinkMenu url={"/catalog"} name={"каталог"} />
      <LinkMenu url={"/personal"} name={"личный кабинет"} />
      <LinkMenu url={"/terms-of-return"} name={"условия возврата"} />
      <LinkMenu url={"/contacts"} name={"контакты"} />
    </div>
  );
}
