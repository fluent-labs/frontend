import React from "react";
import styled from "styled-components";

import { Section, Container } from "../global";

const NotFound = () => (
  <Section id="notfound">
    <StyledContainer>
      <h1>NOT FOUND</h1>
      <p>This page doesn&#39;t exist. <a href="/">Click here to return to main</a> </p>
    </StyledContainer>
  </Section>
);

export default NotFound;

const StyledContainer = styled(Container)``;