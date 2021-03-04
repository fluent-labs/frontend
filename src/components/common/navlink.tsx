import React from "react";
import { Link } from "gatsby";

export interface NavLinkProps {
  title: string;
  href: string;
  external: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  locale?: string;
}

const NavLink = ({
  title,
  href,
  external,
  onClick = () => {},
  locale = ""
}: NavLinkProps) => {
  if (external) {
    return (
      <a href={href} onClick={onClick}>
        {title}
      </a>
    );
  } else {
    const localePrefix = (locale !== "") ? `/${locale}` : ""
    const localHref = `${localePrefix}${href}`

    return (
      <Link to={localHref} onClick={onClick}>
        {title}
      </Link>
    );
  }
};

export default NavLink;
