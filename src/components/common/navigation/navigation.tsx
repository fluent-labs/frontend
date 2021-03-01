import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Scrollspy from "react-scrollspy";
import { Menu, X } from "react-feather";

import { Container } from "../../global";
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
  ActionsContainer,
} from "./style";
import NavLink, { NavLinkProps } from "../navlink";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      prismicNavigation(lang: { eq: "en-us" }) {
        data {
          navigation_links {
            title
            href
            external
          }
          signup_text
        }
      }
    }
  `);

  const {
    navigation_links: navigationLinks,
    signup_text: signupText,
  } = data.prismicNavigation.data;

  const handleScroll = (_event: any) => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 32) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={navigationLinks.map((item: NavLinkProps) =>
          item.title.toLowerCase()
        )}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {navigationLinks.map((navItem: NavLinkProps) => (
          <NavItem key={navItem.title}>
            <NavLink onClick={closeMobileMenu} {...navItem} />
          </NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  );

  return (
    <Nav scrolled={hasScrolled}>
      <StyledContainer>
        <Brand>
          <Scrollspy offset={-64} item={["top"]} currentClassName="active">
            <NavLink
              title="FluentLabs Reader"
              href="/"
              external={true}
              onClick={closeMobileMenu}
            />
          </Scrollspy>
        </Brand>
        <Mobile hide={false}>
          <button
            onClick={toggleMobileMenu}
            style={{ color: "black", background: "none" }}
          >
            {mobileMenuOpen ? (
              <X size={24} alt="close menu" />
            ) : (
              <Menu size={24} alt="open menu" />
            )}
          </button>
        </Mobile>

        <Mobile hide>{getNavList({})}</Mobile>
        <ActionsContainer>
          <button>{signupText}</button>
        </ActionsContainer>
      </StyledContainer>
      <Mobile hide={false}>
        {mobileMenuOpen && (
          <MobileMenu>
            <Container>{getNavList({ mobile: true })}</Container>
          </MobileMenu>
        )}
      </Mobile>
    </Nav>
  );
};

export default Navigation;
