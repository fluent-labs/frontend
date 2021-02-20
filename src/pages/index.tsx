import React from "react";

import Page from "../components/common/page";

import Header from "../components/sections/header";
import Benefits from "../components/sections/benefits";
import GetStarted from "../components/sections/getstarted";

const IndexPage = () => (
  <Page title="Home">
    <Header />
    <Benefits />
    <GetStarted />
  </Page>
);

export default IndexPage;
