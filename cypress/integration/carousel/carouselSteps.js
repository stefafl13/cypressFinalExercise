import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import HomeMethods from '../../support/pages/homeLocators.js'

/// <reference types="cypress"/>

const homeMethods = new HomeMethods();

Given('I visit the home page', () => {
    cy.visit('/');
})

When('I click in the left arrow', () => {
    homeMethods.clickLeftArrow();
})

When('I click in the right arrow', () => {
    homeMethods.clickRightArrow();
})

When('I select a carousel\'s item', () => {
    homeMethods.activeItemElement();
})

Then('I verify right arrow\'s functionality', () => {
    homeMethods.activeSlide().should('eq','1');
})

Then('I verify left arrow\'s functionality', () => {
    homeMethods.activeSlide().should('eq','2');
})

Then('I verify if the items number of the carousel is equal to {int}', (itemsNumber) => {
    homeMethods.carouselIndicators().should('have.length', 3);
})

Then('I check if the corresponding item is active', () => {
    homeMethods.activeSlide().should('eq',`${homeMethods.getSlide()}`)
})