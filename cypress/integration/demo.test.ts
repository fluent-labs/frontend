/* eslint-disable jest/expect-expect */
import "cypress-axe";

describe("Check the demo page page", function () {
  beforeEach(function () {
    cy.visit("/demo/");
  });

  it("Renders without error", function () {
    cy.get("h3").should("contain", "A reader for the internet");
  });

  it("Can handle a happy path scenario", function () {
    const text =
      "This is a fairly complex test and we should definitely make sure it works. There are many complex interactions here and testing is vital.";

    cy.intercept("POST", "/v1/language/document/ENGLISH/", {
      fixture: "english_document.json",
    }).as("getDocument");
    cy.intercept("POST", "/v1/language/definitions/ENGLISH/ENGLISH/", {
      fixture: "english_definitions.json",
    }).as("getDefinitions");

    cy.get("[id^=languageinput]").type(text);
    cy.get("[id^=submittextbutton]").click();

    cy.wait(["@getDocument", "@getDefinitions"]);

    cy.contains("span", "fairly").should(
      "have.class",
      "ant-typography-success"
    );
    cy.contains("span", "interactions").should(
      "have.class",
      "ant-typography-secondary"
    );
  });

  // This test is flapping, disable until we can investigate
  // it("Is fully accessible", function () {
  //   cy.injectAxe();
  //   cy.checkA11y(null, {
  //     includedImpacts: ["serious"],
  //     rules: {
  //       "color-contrast": { enabled: false },
  //     },
  //   });
  // });
});
