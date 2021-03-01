import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import { Section, Container } from "../global";

interface Benefit {
  title: string;
  text: string;
}

interface BenefitsPage {
  benefits_subtitle: string;
  benefits_section_title: string;
  benefits_entries: Array<Benefit>;
}

const Benefits = () => {
  const data = useStaticQuery(graphql`
    query {
      prismicHomePage(lang: { eq: "en-us" }) {
        data {
          benefits_subtitle
          benefits_section_title
          benefits_entries {
            title
            text
          }
        }
      }
    }
  `);

  const {
    benefits_subtitle: benefitsSubtitle,
    benefits_section_title: benefitsSectionTitle,
    benefits_entries: benefitsEntries,
  }: BenefitsPage = data.prismicHomePage.data;

  return (
    <Section id="benefits">
      <StyledContainer>
        <Subtitle>{benefitsSubtitle}</Subtitle>
        <SectionTitle>{benefitsSectionTitle}</SectionTitle>
        <FeaturesGrid>
          {benefitsEntries.map((entry: Benefit) => {
            const { title, text } = entry;
            return (
              <FeatureItem key={title}>
                <FeatureTitle>{title}</FeatureTitle>
                <FeatureText>{text}</FeatureText>
              </FeatureItem>
            );
          })}
        </FeaturesGrid>
      </StyledContainer>
    </Section>
  );
};

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
