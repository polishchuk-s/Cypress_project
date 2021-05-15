//const { Context } = require("mocha")

//describe("Mobile phone replenishment", () => {

//    context("Replenishment less than the allowed amount", () => {
//        it("Show error: Minimum amount of the replenishment 1 UAH", () => {});
        //it('Check min sum', () => {
        // some test
//    });

//}) 

/// <reference types="Cypress" />

// it('By ID', () => {
//     cy.visit("https://facebook.com/")
//     cy.get('#email')
// });

// it('By Class', () => {
//     cy.visit("https://docs.cypress.io/api/commands/get#Syntax/")
//     cy.get('.DocSearch-Search-Icon')
// });

// it('By Tag', () => {
//     cy.visit("https://docs.cypress.io/api/commands/get#Syntax/")
//     cy.get('nav')
// });

// it('By Tag value', () => {
//     cy.visit("https://facebook.com/")
//     cy.get('[name="pass"]')
// });

// it('By Different tag', () => {
//     cy.visit("https://facebook.com/")
//     cy.get('[data-testid="open-registration-form-button"][role="button"]')
// });

// it('By Different types', () => {
//     cy.visit("https://docs.cypress.io/api/commands/get#Syntax/")
//     cy.get('button[type="button"][aria-label="Search"]')
// });

// it.only('By Contains name', () => {
//     cy.visit("https://next.privat24.ua/")
//     cy.get('[class^="card"]')
// });


//Comment #2
it('Using Get With Find and Eq', () => {
    cy.visit("https://next.privat24.ua/deposit/open")
    cy.get('tbody').find('td').find('div').find('button').eq(0)
});

it.only('Using Get With Find and Eq', () => {
    cy.viewport(1800,600)
    cy.visit("https://docs.cypress.io/api/commands/eq#Syntax")
    cy.get('[class^="hidden"]').find('nav').find('ul').find('li').find('a').eq(0)
    // nav').find('ul').find('li').find('a')
});