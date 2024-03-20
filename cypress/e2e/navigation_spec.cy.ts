describe("Navigation dans le site internet", () => {
  beforeEach(() => {
    cy.visit("https://symfony.com");
  });

  // Ceci est un commentaire
  it("doit contenir un texte spécifique", () => {
    cy.visit("https://symfony.com");
    cy.contains("About");
  });

  it("doit contenir un texte spécifique", () => {
    cy.visit("https://symfony.com");
    cy.contains("Documentation");
  });
});
