describe("Navigation des catégories", () => {
  beforeEach(() => {
    cy.visit("https://localhost:3001");
  });

  it("doit contenir un texte spécifique", () => {
    cy.visit("http://localhost:3001/");
    cy.contains("Featured Products");
  });

  it("doit contenir un texte spécifique", () => {
    cy.visit("http://localhost:3001/");
    cy.contains("Shoes");
  });

  it("doit contenir un texte spécifique", () => {
    cy.visit("http://localhost:3001/");
    cy.contains("Jackets");
  });
});
