import React, { FormEvent } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import { Container } from "../global";

interface HeaderProps {
  translation: HeaderTextTranslation;
}

export interface HeaderTextTranslation {
  header_subtitle: string;
  header_title_one: string;
  header_title_two: string;
  header_title_three: string;
  header_input_placeholder: string;
  header_button_text: string;
  header_form_subtitle: string;
  header_form_subtitle_link_text: string;
}

const Header = ({ translation }: HeaderProps) => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "product" }, name: { eq: "green-skew" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const {
    header_subtitle: headerSubtitle,
    header_title_one: headerTitleOne,
    header_title_two: headerTitleTwo,
    header_title_three: headerTitleThree,
    header_input_placeholder: headerInputPlaceholder,
    header_button_text: headerButtonText,
    header_form_subtitle: headerFormSubtitle,
    header_form_subtitle_link_text: headerFormSubtitleLinkText,
  } = translation;

  return (
    <HeaderWrapper id="top">
      <Container>
        <Flex>
          <HeaderTextGroup>
            <Subtitle>{headerSubtitle}</Subtitle>
            <h1>
              {headerTitleOne}
              <br />
              {headerTitleTwo}
            </h1>
            <h2>{headerTitleThree}</h2>
            <HeaderForm onSubmit={handleSubmit}>
              <HeaderInput placeholder={headerInputPlaceholder} />
              <HeaderButton>{headerButtonText}</HeaderButton>
            </HeaderForm>
            <FormSubtitle>
              {headerFormSubtitle}{" "}
              <FormSubtitleLink to="/">
                {headerFormSubtitleLinkText}
              </FormSubtitleLink>
            </FormSubtitle>
          </HeaderTextGroup>
          <ImageWrapper>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
            <br />
          </ImageWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.color.background.light};
  padding: 160px 0 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${(props) => props.theme.screen.md}) {
  }
`;
const Subtitle = styled.h5`
  font-size: 16px;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 16px;
`;

const HeaderTextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${(props) => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: ${(props) => props.theme.color.primary};
  }

  h2 {
    margin-bottom: 24px;
    ${(props) => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }
`;

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`;

const HeaderForm = styled.form`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    flex-direction: column;
  }
`;

const FormSubtitle = styled.span`
  ${(props) => props.theme.font_size.xxsmall}
`;

const FormSubtitleLink = styled(Link)`
  color: ${(props) => props.theme.color.secondary};
  padding-bottom: 1px;
  margin-left: 8px;
  text-decoration: none;
  border-bottom: 1px solid ${(props) => props.theme.color.secondary};
`;

const HeaderInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: ${(props) => props.theme.color.primary};
  line-height: 42px;
  width: 100%;
  text-align: left;
  height: 60px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  outline: 0px;
  &:focus {
    box-shadow: inset ${(props) => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`;

const HeaderButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${(props) => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${(props) => props.theme.screen.md}) {
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    margin-left: 0;
  }
`;
const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    justify-self: center;
  }
`;

const StyledImage = styled(Img)`
  width: 500px;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`;
