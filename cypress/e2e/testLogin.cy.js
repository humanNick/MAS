/// <reference types="cypress" />

describe('Login on MAS Medical Staffing website', () => {
    it('Verifies that a user can successfully log in', () => {
     
        cy.visit('https://www.masmedicalstaffing.com');
      
      
      cy.get("a[title='Login']").trigger('mouseover')
      cy.get(".dropdown.menu-item.menu-item-75125.menu-item-has-children.menu-item-object-custom.menu-item-type-custom.nav-item.show > ul[role='menu']").should('be.visible')
      cy.get("a[title='Facility Login']").click();
      cy.wait("div#auth-login");
      cy.get("input#auth-login-field-email").type('testuser@example.com');
      cy.get("input#auth-login-field-password").type('password123');
      cy.get("#auth-login-button-submit").click();
      cy.get(".MuiFormHelperText-root").should('have.text', 'Login Failed');
      
      //Test failed, unregistred user, with valid data expected successfully log in.  
      
    });

  });