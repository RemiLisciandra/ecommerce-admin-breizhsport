describe("Navigation des catégories", () => {
  beforeEach(() => {
    cy.visit("https://symfony.com");
  });

  it("doit contenir un texte spécifique", () => {
    cy.visit("https://symfony.com");
    cy.contains("About");
  });

  it("doit contenir un texte spécifique", () => {
    cy.visit("https://symfony.com");
    cy.contains("Documentation");
  });

  it("doit contenir un texte spécifique", () => {
    cy.visit("https://symfony.com");
    cy.contains("Services");
  });
});
