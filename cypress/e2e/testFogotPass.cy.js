/// <reference types="cypress" />

describe('Login on MAS Medical Staffing website with "Fogot Password" btn', () => {
    it('Verifies that a user can use restore password functionality', () => {
     

     
        cy.visit('https://www.masmedicalstaffing.com');
      
      
      cy.get("a[title='Login']").trigger('mouseover')
      cy.get(".dropdown.menu-item.menu-item-75125.menu-item-has-children.menu-item-object-custom.menu-item-type-custom.nav-item.show > ul[role='menu']").should('be.visible')
      cy.get("a[title='Facility Login']").click();
      cy.wait("div#auth-login");
      cy.get("auth-button-forgotpw").click();
      cy.get("div#auth-forgotpw");
      cy.get("auth-forgotpw-field-email").type('testuser@example.com');
      cy.get("button#auth-forgotpw-button-submit > .MuiButton-label").click()
      cy.get("auth-forgotpw").should('have.text', "You'll receive a password reset link via email if the address provided matches our records.")


      //user can use the password recovery function, the applied data is invalid, the user is not registered.
        //verification failed, unregistered user cannot receive this message.
    });

});
