import React from "react";
import styled from "styled-components";

import { Section, Container } from "../global";
import { Reader } from "../Reader/Reader";

const ReaderSection = () => (
  <Section id="reader">
    <StyledContainer>
      <Subtitle>Benefits</Subtitle>
      <SectionTitle>A reader for the internet</SectionTitle>
      <Reader />
    </StyledContainer>
  </Section>
);

export default ReaderSection;

const StyledContainer = styled(Container)``;

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`;

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`;
