describe("Page d’accueil", () => {
  it("doit être visitable", () => {
    cy.visit("http://localhost:3000");
  });

  it("doit contenir un texte spécifique", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Dashboard");
  });
});
