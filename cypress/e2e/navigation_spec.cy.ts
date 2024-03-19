describe("Navigation des catégories", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/");
  });

  it("devrait naviguer vers la catégorie Shoes", () => {
    cy.get('a[href="/category/f66009d6-b912-48ac-8b5d-33b1b3fa9356"]').click();
    cy.url().should(
      "include",
      "/category/f66009d6-b912-48ac-8b5d-33b1b3fa9356"
    );
  });

  it("devrait naviguer vers la catégorie Jackets", () => {
    cy.get('a[href="/category/1bb45699-2c27-424d-a7b3-21b3debf126d"]').click();
    cy.url().should(
      "include",
      "/category/1bb45699-2c27-424d-a7b3-21b3debf126d"
    );
  });

  it("devrait naviguer vers la page d’accueil via le logo", () => {
    cy.get('a[href="/"]').click();
    cy.url().should("eq", "http://localhost:3001/");
  });
});
