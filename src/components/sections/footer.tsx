import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import { Container } from "../global";
import NavLink, { NavLinkProps } from "../common/navlink";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      prismicNavigation {
        data {
          footer_column_one_title
          footer_column_one_links {
            title
            href
            external
          }
          footer_column_two_title
          footer_column_two_links {
            title
            href
            external
          }
          footer_column_three_title
          footer_column_three_links {
            title
            href
            external
          }
        }
      }
    }
  `);

  const {
    footer_column_one_title: footerColumnOneTitle,
    footer_column_one_links: footerColumnOneLinks,
    footer_column_two_title: footerColumnTwoTitle,
    footer_column_two_links: footerColumnTwoLinks,
    footer_column_three_title: footerColumnThreeTitle,
    footer_column_three_links: footerColumnThreeLinks,
  } = data.prismicNavigation.data;

  return (
    <FooterWrapper id="footer">
      <FooterColumnContainer>
        <FooterColumn>
          <span>{footerColumnOneTitle}</span>
          <ul>
            {footerColumnOneLinks.map((link: NavLinkProps) => {
              return (
                <li key={link.title}>
                  <NavLink {...link} />
                </li>
              );
            })}
          </ul>
        </FooterColumn>
        <FooterColumn>
          <span>{footerColumnTwoTitle}</span>
          <ul>
            {footerColumnTwoLinks.map((link: NavLinkProps) => {
              return (
                <li key={link.title}>
                  <NavLink {...link} />
                </li>
              );
            })}
          </ul>
        </FooterColumn>
        <FooterColumn>
          <span>{footerColumnThreeTitle}</span>
          <ul>
            {footerColumnThreeLinks.map((link: NavLinkProps) => {
              return (
                <li key={link.title}>
                  <NavLink {...link} />
                </li>
              );
            })}
          </ul>
        </FooterColumn>
      </FooterColumnContainer>
      <BrandContainer>
        <Logo>FluentLabs Reader</Logo>
      </BrandContainer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.color.background.white};
  margin: 80px 0 0;
  padding: 0 0 80px;
`;

const Logo = styled.div`
  font-family: ${(props) => props.theme.font.extrabold};
  ${(props) => props.theme.font_size.regular};
  color: ${(props) => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  text-decoration: none;
  outline: 0px;
`;

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
  }
`;
const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`;
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: ${(props) => props.theme.font.bold};
    color: ${(props) => props.theme.color.primary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${(props) => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: ${(props) => props.theme.font.normal};
      font-size: 15px;
    }
  }
`;

export default Footer;
