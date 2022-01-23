import React, { useState, useEffect, Event } from "react";
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

interface NavigationProps {
  translation: NavigationTextTranslation;
  locale?: string;
}

interface NavigationTextTranslation {
  navigation_links: Array<NavLinkProps>;
  signup_text: string;
}

const Navigation = ({ translation, locale }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const { navigation_links: navigationLinks, signup_text: signupText } =
    translation;

  const handleScroll = (_event: Event) => {
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
            <NavLink onClick={closeMobileMenu} {...navItem} locale={locale} />
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
            <li>
              <NavLink
                title="FluentLabs Reader"
                href="/"
                external={false}
                onClick={closeMobileMenu}
                locale={locale}
              />
            </li>
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
