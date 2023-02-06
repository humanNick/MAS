describe('Login to MAS Medical Staffing website using Google SSO', () => {
    
    it('Verifies that the user is successfully logged in', () => {
     
     
        cy.visit('https://www.masmedicalstaffing.com/');
      
      
        cy.get("a[title='Login']").trigger('mouseover')
        cy.get(".dropdown.menu-item.menu-item-75125.menu-item-has-children.menu-item-object-custom.menu-item-type-custom.nav-item.show > ul[role='menu']").should('be.visible')
        cy.get("a[title='Facility Login']").click();
        cy.wait("div#auth-login");
        cy.get('.button#auth-login-button-google > .MuiButton-label').click();
        cy.get(".div#initialView > div[role='presentation']").should('have.text', 'Sign in with Google');
     
     
      //expected user successfully logged in with valid Google account.  
     
  
  
  
    });
  });
  