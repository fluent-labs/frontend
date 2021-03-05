/* eslint-disable jest/expect-expect */
import "cypress-axe";

describe("Check the home page", function () {
  beforeEach(function () {
    cy.visit("/da-dk/");
  });

  it("Renders the header", function () {
    cy.get("h1").should("contain", "Læs hvad du vil");
  });

  it("Renders the benefits", function () {
    cy.get("h4").should("contain", "Ordforråd");
  });

  it("Renders the get started", function () {
    cy.get("button").should("contain", "Få tidlig adgang");
  });

  it("Is fully accessible", function () {
    cy.injectAxe();
    cy.checkA11y(null, {
      includedImpacts: ["serious"],
      rules: {
        "color-contrast": { enabled: false },
      },
    });
  });
});
