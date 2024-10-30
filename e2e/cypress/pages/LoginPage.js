class LoginPage{
    navigate(){
        cy.visit('https://pexinxa-database.web.app/login');
    }

    fillEmail(email){
        cy.get('#email').type(email);
    }

    fillPassword(password){
        cy.get('#password').type(password);
    }

    submit(){
        cy.get('button[type="submit"]').click();
    }

    errorMessage(){
        return cy.get('.text-red-800.bg-red-200.text-center'); 
    }

    sucessfulMessage(){
        return cy.get('p-4 text-green-800 bg-green-200 rounded-md text-center'); 
    }
}
export default new LoginPage();