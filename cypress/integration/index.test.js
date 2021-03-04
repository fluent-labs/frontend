describe("Check the home page", function () {
  beforeEach(function () {
    cy.visit("/");
  });

  it("Renders the header", function () {
    cy.get("h1").should("contain", "Read what you want");
  });

  it("Renders the benefits", function () {
    cy.get("h4").should("contain", "Vocabulary");
  });

  it("Renders the get started", function () {
    cy.get("button").should("contain", "Get early access");
  });
});
