import faker from "faker";
const ENVIROMENT_URL = "http://localhost:4200/";

context("User", () => {
  before(() => {
    cy.visit(ENVIROMENT_URL);
  });

  it("Register", () => {
    let name = faker.name.firstName();
    cy.get(".ml-1").click();
    cy.wait(2000);
    cy.url().should("contain", "login");
    cy.get(".text-center > :nth-child(6) > a").click();
    cy.url().should("contain", "register");
    cy.get("#materialRegisterFormEmail").type(name);
    cy.get("#materialRegisterFormPassword").type(name);
    cy.wait(2000);
    cy.get(".my-4").click();
    cy.url().should("contain", "home");
  });
});
