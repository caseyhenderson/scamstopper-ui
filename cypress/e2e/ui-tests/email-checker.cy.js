/// <reference types="cypress" />


describe('Testing the landing page of the Scamstopper web application, to ensure it works as expected.', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://river-cocoa-377215.web.app/textAnalysis')
    })

    // can come back and alter this
  
    it('displays the welcome page correctly', () => {
      cy.get('[data-test-id="email-analysis-title"]').should('have.text', 'Email Analysis')
      cy.get('[data-test-id="email-analysis-form"]').should('exist')
    //   cy.get('[data-test-id="email-analysis-form"]').type('this is an example scam email with an URGENT BUSINESS PROPOSAL to reply NOW TO')
    //   cy.get('[data-test-id="email-analysis-form"]').should('have.value', 'this is an example scam email with an URGENT BUSINESS PROPOSAL to reply NOW TO')
    //   cy.get('[data-test-id="get-prediction"]').click()
    //   cy.wait(2000)
    //   cy.get('[data-test-id="prediction-result"]').should('have.text', ' Hold up! Scamstopper thinks this could be a scam. Return to the chat window for more advice.')
    })
  })