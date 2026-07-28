import { NavLink } from "react-router";
type MenuProps = {
  url: string;
  name: string;
};

export default function MenuLink({ url, name }: MenuProps) {
  return (
    <NavLink
      to={url}
      className="flex justify-center text-s font-light uppercase  border-b-[0.5px] py-5"
    >
      {name}
    </NavLink>
  );
}
