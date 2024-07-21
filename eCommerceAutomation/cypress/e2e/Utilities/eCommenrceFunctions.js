export function addMobile(modelName, mobileName) {
  cy.get("#nav-hamburger-menu").should("be.visible").click();
  cy.get("li .hmenu-item").contains("Mobiles, Computers").click();
  cy.get("li .hmenu-item").contains("All Mobile Phones").click({ force: true });
  cy.get("li a").contains("iQOO").should("be.visible").click();
  //cy.get("#a-autoid-1-announce").should("be.visible");

  cy.get(".s-widget-container").each(($el) => {
    if ($el.text().includes(mobileName)) {
      cy.wrap($el).find('[type="button"]').click({ force: true });
    }
  });
}

export function addTelevision(modelName, televisionName) {
  cy.get("#nav-hamburger-menu").should("be.visible").click();
  cy.get("li .hmenu-item").contains("TV, Appliances, Electronics").click();

  cy.wait(1000);
  cy.get("li .hmenu-item").contains("Televisions").click({ force: true });

  cy.get("li a").contains(modelName).should("be.visible").click();
  cy.get(".s-widget-container").each(($el) => {
    if ($el.text().includes(televisionName)) {
      cy.wrap($el).find('[type="button"]').click({ force: true });
    }
  });
}

export function addEarPhones(modelName, earPhoneName) {
  cy.get("#nav-hamburger-menu").should("be.visible").click();
  cy.get("li .hmenu-item").contains("TV, Appliances, Electronics").click();

  cy.wait(1000);
  cy.get("li .hmenu-item").contains("Headphones").click({ force: true });

  cy.get("li a").contains(modelName).should("be.visible").click();
  cy.get(".s-widget-container").each(($el) => {
    if ($el.text().includes(earPhoneName)) {
      cy.wrap($el).find('[type="button"]').click({ force: true });
    }
  });
}

export function completeCheckOut() {
  // //cy.get("#add-new-address-popover-link").should("be.visible").click();
  cy.get("#address-ui-widgets-countryCode").then(($el) => {
    expect($el.text()).to.eql("India");
  });

  cy.get('input[name="address-ui-widgets-enterAddressFullName"]').type(
    "Rohit Gawas"
  );
  cy.get('[name="address-ui-widgets-enterAddressPhoneNumber"]').type(
    "1234567890"
  );
  cy.get('[name="address-ui-widgets-enterAddressPostalCode"]').type("412105");

  cy.get('[name="address-ui-widgets-enterAddressLine1"]')
    .type("pimpari, Chinchwad, Moshi")
    .type("{enter}");
  //cy.get("ul li").eq(0).click();
  cy.get('[name="address-ui-widgets-enterAddressLine2"]').type(
    "pimpari, Chinchwad, Moshi"
  );
  //cy.get("ul li").eq(0).click();
  cy.get('[name="address-ui-widgets-landmark"]').type("testLandMark");

  cy.get("#address-ui-widgets-form-submit-button").should("be.visible").click();

  //uncheck the checkboxes for special delevery options :
  cy.get("#shippingOptionFormId")
    .find('[type="checkbox"]:visible', { timeout: 100000 })
    .each(($el) => {
      cy.wrap($el).uncheck();
    });

  cy.get(".a-button-inner > [data-testid]").click();
}
