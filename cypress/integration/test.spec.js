describe('My first test', () => {

  it('data is loaded', () => {
    cy.visit("http://localhost:4200/signup");

    cy.get("[data-cy=inputSignUpPseudo]")
      .type("test");

    cy.get("[data-cy=inputSignUpPassword]")
      .type("Test1$");

    cy.get("[data-cy=submitSignUp]")
      .click();
  });

});


describe('My second test', () => {


  it('data is loaded', () => {
    cy.visit("http://localhost:4200/login");

    cy.get("[data-cy=inputPseudoLogin]")
      .type("test");

    cy.get("[data-cy=inputPasswordLogin]")
      .type("Test1$");

    cy.get("[data-cy=inputSubmitLogin]")
      .click();

    cy.get("[data-cy=inputStageName]")
      .type("Tymo");

    cy.get("[data-cy=inputMusicName]")
      .type("We Like To Party");

    cy.get("[data-cy=inputMusicLink]")
      .type("https://www.youtube.com/watch?v=xRcSOLMGoc8%22");

    cy.get("[data-cy=inputScheduleStart]")
      .type("2022-07-12T12:00");

    cy.get("[data-cy=inputScheduleEnd]")
      .type("2022-07-12T14:00");

    cy.get("[data-cy=inputArtistSubmit]")
      .click();


    cy.get("[data-cy=0]")
      .click();

    cy.reload()
  });

});
