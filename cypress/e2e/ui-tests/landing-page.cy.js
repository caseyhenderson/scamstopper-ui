/// <reference types="cypress" />


describe('Testing the landing page of the Scamstopper web application, to ensure it works as expected.', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://river-cocoa-377215.web.app/')
  })

  it('displays the welcome page correctly', () => {
    cy.get('[data-test-id="welcome-text"]').should('have.text', ' Welcome to Scamstopper! ')
    cy.get('[data-test-id="get-started-text"]').should('have.text', 'Scamstopper is a friendly chatbot here to help you fight scams! Click the button in the bottom-right corner to get started.')
    cy.get('[data-test-id="easy-talk-text"]').should('have.text', ' Easy to Talk To ')
    cy.get('[data-test-id="easy-talk-explanation"]').should('have.text', "Powered by Google's Dialogflow technology, Scamstopper is easy to talk to and fun to use!")
    cy.get('[data-test-id="knowledge-title"]').should('have.text', " Knowledgeable and Ready to Help ")
    cy.get('[data-test-id="knowledge-explanation"]').should('have.text', "Scamstopper knows the scammers' tricks, and how to stop them!")
    cy.get('[data-test-id="available-anywhere"]').should('have.text', " Available from anywhere on the web!")
    cy.get('[data-test-id="ask-questions"]').should('have.text', "Just visit Scamstopper and get asking questions!")
    cy.get('#widgetIcon').should('have.class', 'df-chat-icon default')
  })
})
