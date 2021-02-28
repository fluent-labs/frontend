import React from "react";
import { Link } from "gatsby";

export interface NavLinkProps {
  title: string;
  href: string;
  external: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const NavLink = ({
  title,
  href,
  external,
  onClick = () => {},
}: NavLinkProps) => {
  if (external) {
    return (
      <a href={href} onClick={onClick}>
        {title}
      </a>
    );
  } else {
    return (
      <Link to={href} onClick={onClick}>
        {title}
      </Link>
    );
  }
};

export default NavLink;
