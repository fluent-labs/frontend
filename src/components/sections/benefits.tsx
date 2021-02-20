import React from "react";
import styled from "styled-components";

import { Section, Container } from "../global";

const Benefits = () => (
  <Section id="benefits">
    <StyledContainer>
      <Subtitle>Benefits</Subtitle>
      <SectionTitle>A reader for the internet</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Definitions</FeatureTitle>
          <FeatureText>
            See the meaning of any unfamiliar word, defined in your native
            language.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Vocabulary</FeatureTitle>
          <FeatureText>
            We remember which words you know, so you can focus on the new ones.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Difficulty</FeatureTitle>
          <FeatureText>
            See how common a word is, so you only learn the important ones.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Integration</FeatureTitle>
          <FeatureText>Works with other tools you use like Anki.</FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
);

export default Benefits;

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

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FeatureTitle = styled.h4`
  color: ${(props) => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`;

const FeatureText = styled.p`
  text-align: center;
`;
