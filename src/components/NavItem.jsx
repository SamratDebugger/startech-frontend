import { Link } from "react-router";

export default function NavItem({ children, url, title, subtitle }) {
  return (
    <Link to={url} className="flex items-center gap-2">
      {children}
      <div>
        <h2>{title}</h2>
        <p className="whitespace-nowrap text-xs opacity-50">{subtitle}</p>
      </div>
    </Link>
  );
}
