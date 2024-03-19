describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("https://symfony.com/");
  });

  it("devrait naviguer vers la page de la doc", () => {
    cy.get('a[href="/doc/current/index.html"]').click();
    cy.url().should("include", "/doc/current/index.html");
  });
});
