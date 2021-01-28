


describe('Creation Form', function() {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    const nameInput = () => cy.get('input[name="name"]');
    const emailInput = () => cy.get('input[name="email"]');
    const passwordInput = () => cy.get('input[name="password"]');
    const termsCheckedInput = () => cy.get('input[name="TermsOfService"]');
    const submitBtn = () => cy.get('button[id="subBtn"]');

    it('can enter basic info', () => {
        nameInput()
            .should('have.value', '')
            .type('A name')
            .should('have.value', 'A name');

        emailInput()
            .should('have.value', '')
            .type('an address')
            .should('have.value', 'an address');

        passwordInput()
            .should('have.value', '')
            .type('a password')
            .should('have.value', 'a password')
    })

    it('can check terms ok', () => {
        termsCheckedInput()
            .click()    
    })

    it('can click on submit button', () => {
        submitBtn().should('be.disabled');
        nameInput().type('a name');
        emailInput().type('an email');
        passwordInput().type('password');
        submitBtn().click();
    })

    it('error will show if field left empty', () => {
        submitBtn().should('be.disabled');
        nameInput().type('');
        emailInput().type('');
        passwordInput().type('');
        submitBtn().click().should('be.disabled');        
    })

}) 