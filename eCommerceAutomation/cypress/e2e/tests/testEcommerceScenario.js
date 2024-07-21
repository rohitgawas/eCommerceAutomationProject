///<reference types="cypress" />

import {
  addMobile,
  addTelevision,
  addEarPhones,
  completeCheckOut,
} from "../Utilities/eCommenrceFunctions";

describe("Verify checkout page of eCommerce website", () => {
  before(() => {
    cy.visit(Cypress.env("url"));
    cy.login();
    cy.fixture("eCommercePageID").then(function (data) {
      this.data = data;
    });
  });

  it("Verify adding items to cart", function () {
    addMobile(this.data.mobileModel, this.data.mobileName);
    addTelevision(this.data.televisionModel, this.data.televisionName);
    addEarPhones(this.data.earPhoneModel, this.data.earPhoneName);
    cy.get(this.data.cartIcon).click();
    cy.get(this.data.checkOut).should("be.visible").click();
    completeCheckOut();
  });
});
