// cypress/integration/auth.spec.js
describe('Authentication Feature', () => {

  it('Should visit the landing page and check login and register buttons', () => {
  cy.viewport(1280, 720);
  cy.visit('http://localhost:3000/messenger'); // Update with your landing page URL

  // Check for the presence of the Login button and click it
  cy.get('button').contains('Login').should('exist').click();
  cy.url().should('include', '/messenger/login'); // Check if it navigates to the login page

  // Go back to the landing page
  cy.visit('http://localhost:3000/messenger');

  // Check for the presence of the Register button and click it
  cy.get('a[href="/messenger/register"]').should('exist').click();
  cy.url().should('include', '/messenger/register'); // Check if it navigates to the register page
});


  it('Should log in successfully', () => {
    cy.viewport(1280, 720);
    cy.visit('http://localhost:3000/messenger/login'); // Update with your login page URL
    cy.get('input[name="email"]').type('chaoderanony@gmail.com');
    cy.get('input[name="password"]').type('12345'); // checking if the pass is incorrect
    cy.get('input[type="submit"]').click();

    // Add assertions based on your application behavior
    cy.url().should('include', '/messenger'); // Update with the expected URL after login
  });
});
//   it('Should register a new user successfully', () => {
//     cy.viewport(1280, 720);
//     cy.visit('http://localhost:3000/messenger/register'); // Update with your register page URL
//     cy.get('input[name="userName"]').type('testuser');
//     cy.get('input[name="email"]').type('testuser@example.com');
//     cy.get('input[name="password"]').type('testpassword');
//     cy.get('input[name="confirmPassword"]').type('testpassword');
//     cy.get('input[type="submit"]').click();

//     // Add assertions based on your application behavior
//     cy.url().should('include', '/messenger'); // Update with the expected URL after registration
//   });
// });
