// cypress/integration/auth.spec.js
describe('Authentication Feature', () => {
  it('Should log in successfully', () => {
    cy.visit('/messenger/login'); // Update with your login page URL
    cy.get('input[name="email"]').type('your_test_email@example.com');
    cy.get('input[name="password"]').type('your_test_password');
    cy.get('input[type="submit"]').click();

    // Add assertions based on your application behavior
    cy.url().should('include', '/messenger'); // Update with the expected URL after login
  });

  it('Should register a new user successfully', () => {
    cy.visit('/messenger/register'); // Update with your register page URL
    cy.get('input[name="userName"]').type('testuser');
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('testpassword');
    cy.get('input[name="confirmPassword"]').type('testpassword');
    cy.get('input[type="submit"]').click();

    // Add assertions based on your application behavior
    cy.url().should('include', '/messenger'); // Update with the expected URL after registration
  });
});
