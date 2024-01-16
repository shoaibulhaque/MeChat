// cypress/integration/auth.spec.js
describe('Authentication Feature', () => {

  it('Should visit the landing page and check login and register buttons', () => {
  cy.viewport(1280, 720);
  cy.visit('http://localhost:3000'); // Update with your landing page URL

  // Check for the presence of the Login button and click it
  cy.get('button').contains('Login').should('exist').click();
  cy.url().should('include', '/messenger/login'); // Check if it navigates to the login page

  // Go back to the landing page
  cy.visit('http://localhost:3000');

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

  it('Should register a new user successfully', () => {
    cy.viewport(1280, 720);
    cy.visit('http://localhost:3000/messenger/register'); // Update with your register page URL
    cy.get('input[name="userName"]').type('testuser');
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('testpassword');
    cy.get('input[name="confirmPassword"]').type('testpassword');
    cy.get('input[type="submit"]').click();

    // Add assertions based on your application behavior
    cy.url().should('include', '/messenger'); // Update with the expected URL after registration
  });

  it('Should toggle dark mode successfully', () => {
  cy.viewport(1280, 720);
  cy.visit('http://localhost:3000/messenger/login'); // Update with your messenger page URL
  cy.get('input[name="email"]').type('chaoderanony@gmail.com');
  cy.get('input[name="password"]').type('123456');
  cy.get('input[type="submit"]').click();

  // Wait for the messenger page to load
  cy.url().should('include', '/messenger');

  // Click on the ellipsis icon to open the theme toggle
  cy.get('.icon').eq(0).click();

  // Check the initial theme
  cy.get('.messenger').should('not.have.class', 'theme');

  // Click on the dark mode radio button
  cy.get('input#dark').click();

  // Check if the theme has changed to dark mode
  cy.get('.messenger').should('have.class', 'theme');

  // Click on the light mode radio button
  cy.get('input#white').click();

  // Check if the theme has changed to light mode
  cy.get('.messenger').should('not.have.class', 'theme');
});

  it('should send a message successfully', () => {
  cy.viewport(1280, 720);
  cy.visit('http://localhost:3000/messenger/login'); // Update with your messenger page URL
  cy.get('input[name="email"]').type('chaoderanony@gmail.com');
  cy.get('input[name="password"]').type('123456');
  cy.get('input[type="submit"]').click();

  // Wait for the messenger page to load
  cy.url().should('include', '/messenger');

  // Type a message in the input field
  cy.get('input[name="message"]').type('Hello World');

  // Click on the send button that has a className 'file'
  cy.get('.file').eq(4).click();

  // Check if the message is sent

  cy.get('.message-text').should('exist');

});

  it('should logout succesfully', () => {
  cy.viewport(1280, 720);
  cy.visit('http://localhost:3000/messenger/login'); // Update with your messenger page URL
  cy.get('input[name="email"]').type('chaoderanony@gmail.com');
  cy.get('input[name="password"]').type('123456');
  cy.get('input[type="submit"]').click();

  // Wait for the messenger page to load
  cy.url().should('include', '/messenger');

  // Click on the ellipsis icon to open the theme toggle
  cy.get('.icon').eq(0).click();

  // Click on the logout button
  
  cy.get('.logout').click();

    // Check if the user is redirected to the login page
    cy.url().should('include', 'http://localhost:3000/messenger/login'); // replace with your actual login page URL
  });