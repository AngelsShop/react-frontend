import { Link } from "react-router";

export default function LinkFooter({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  return (
    <Link to={url} className="text-[12px] sm:text-[16px]">
      {title}
    </Link>
  );
}
