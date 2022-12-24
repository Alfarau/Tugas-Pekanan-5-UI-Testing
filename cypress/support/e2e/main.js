describe('Parabank Login Feature', () => {
    it('Login Successfully', () =>{

        cy.visit(Cypress.config('baseUrl'))

        const username = cy.get("input[name='username']");  
        username.type(Cypress.config('username'));

        const password = cy.get("input[name='password']");  
        password.type(Cypress.config('password'));

        const btnLogin =  cy.contains('Log In');
        btnLogin.click();  

        cy.contains("Welcome");
        cy.contains("Accounts Overview")
        cy.get("#headerPanel > ul.button > li.home > a")

        const btnLogout = cy.contains('Log Out');
        btnLogout.click();
    })

    it('Login Failed - Null Value Email and Password', () =>{

        const btnLogin =  cy.contains('Log In');
        btnLogin.click();  

        cy.contains("Error!");
        cy.contains("Please enter a username and password.")
    })
})

describe('Parabank Forgot Login Info Feature', () => {
    it('Forgot Login Info Successfully', () =>{
        const btnForgot =  cy.contains('Forgot login info?');
        btnForgot.click(); 
        
        cy.contains('Customer Lookup');
        cy.contains('Please fill out the following information in order to validate your account.');
        
        const firstName = cy.get("input[name='firstName']");
        firstName.type("Farau");

        const lastName = cy.get("input[name='lastName']");  
        lastName.type("Testing");

        const street = cy.get("input[name='address.street']");  
        street.type("Jakarta");

        const city = cy.get("input[name='address.city']");  
        city.type("Jakarta");

        const state = cy.get("input[name='address.state']");  
        state.type("Indonesia");

        const zipCode = cy.get("input[name='address.zipCode']");  
        zipCode.type("12345");

        const ssn = cy.get("input[name='ssn']");  
        ssn.type("123");

        const btnFindLogin =  cy.contains('Find My Login Info');
        btnFindLogin.click();  

        cy.contains('Your login information was located successfully. You are now logged in.');
        cy.contains(Cypress.config('username'));
        cy.contains(Cypress.config('password'));

        const btnLogout = cy.contains('Log Out');
        btnLogout.click();
    })

    it('Forgot Login Info Failed - Invalid Data', () =>{
        const btnForgot =  cy.contains('Forgot login info?');
        btnForgot.click(); 
        
        cy.contains('Customer Lookup');
        cy.contains('Please fill out the following information in order to validate your account.');
        
        const firstName = cy.get("input[name='firstName']");
        firstName.type("Bapak");

        const lastName = cy.get("input[name='lastName']");  
        lastName.type("Ibu");

        const street = cy.get("input[name='address.street']");  
        street.type("Adek");

        const city = cy.get("input[name='address.city']");  
        city.type("Kakak");

        const state = cy.get("input[name='address.state']");  
        state.type("Nenek");

        const zipCode = cy.get("input[name='address.zipCode']");  
        zipCode.type("0000");

        const ssn = cy.get("input[name='ssn']");  
        ssn.type("PNS");

        const btnFindLogin =  cy.contains('Find My Login Info');
        btnFindLogin.click();  

        cy.contains('Error!');
        cy.contains('The customer information provided could not be found.');
    })

    it('Forgot Login Info Failed - Null Value', () =>{
        const btnForgot =  cy.contains('Forgot login info?');
        btnForgot.click(); 
        
        cy.contains('Customer Lookup');
        cy.contains('Please fill out the following information in order to validate your account.');

        const btnFindLogin =  cy.contains('Find My Login Info');
        btnFindLogin.click();  

        cy.contains('First name is required.');
        cy.contains('Last name is required.');
        cy.contains('Address is required.');
        cy.contains('City is required.');
        cy.contains('State is required.');
        cy.contains('Zip Code is required.');
        cy.contains('Social Security Number is required.');
    })
})