/// <reference types="cypress" />


describe('Testing all pages of the Scamstopper application, to ensure they render as expected and display the correct content', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://river-cocoa-377215.web.app/')
    })
  
    it('displays the landing page correctly', () => {
      cy.get('[data-test-id="welcome-text"]').should('have.text', ' Welcome to Scamstopper! ')
      cy.get('[data-test-id="get-started-text"]').should('have.text', 'Scamstopper is a friendly chatbot here to help you fight scams! Click the button in the bottom-right corner to get started.')
      cy.get('[data-test-id="easy-talk-text"]').should('have.text', ' Easy to Talk To ')
      cy.get('[data-test-id="easy-talk-explanation"]').should('have.text', "Powered by Google's Dialogflow technology, Scamstopper is easy to talk to and fun to use!")
      cy.get('[data-test-id="knowledge-title"]').should('have.text', " Knowledgeable and Ready to Help ")
      cy.get('[data-test-id="knowledge-explanation"]').should('have.text', "Scamstopper knows the scammers' tricks, and how to stop them!")
      cy.get('[data-test-id="available-anywhere"]').should('have.text', " Available from anywhere on the web!")
      cy.get('[data-test-id="ask-questions"]').should('have.text', "Just visit Scamstopper and get asking questions!")
    })
    it('displays the Useful Info page correctly', () => {
        cy.visit('https://river-cocoa-377215.web.app/usefulInfo')
        cy.get('[data-test-id="information-title"]').should('have.text', ' What would you like to know? ')
        cy.get('[data-test-id="information-para"]').should('have.text', 'Ask Scamstopper - just type into the chat box to your right!')
    })
    it('displays the About page correctly', () => {
        cy.visit('https://river-cocoa-377215.web.app/about')
        cy.get('[data-test-id="about-title"]').should('have.text', ' What is Scamstopper?')
        cy.get('[data-test-id="about-paragraph"]').should('have.text', 'Scamstopper! is a helpful conversational AI web application developed by Casey Henderson.')
        cy.get('[data-test-id="learn-more"]').should('have.text', ' Want to Learn More? ')
        cy.get('[data-test-id="learn-more-para"]').should('have.text', "If you're interested in learning more, why not ask Scamstopper yourself? Just click the icon in the bottom right corner.")
    })
    it('displays the Email Checker page correctly', () => {
        cy.visit('https://river-cocoa-377215.web.app/textAnalysis')
        cy.get('[data-test-id="email-analysis-title"]').should('have.text', 'Email Analysis')
        cy.get('[data-test-id="email-analysis-form"]').should('exist')
    })
    it('displays the Feedback page correctly', () => {
        cy.visit('https://river-cocoa-377215.web.app/feedback')
        cy.get('[data-test-id="feedback-title"]').should('have.text', ' Want to tell us how we can improve? Click the link below.')
        cy.get('[data-test-id="feedback-link"]').should('exist')

    })
  })