describe('User Onboarding App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  const nameInput = () => cy.get('input[name="name"]')
  const emailInput = () => cy.get('input[name="email"]')
  const passwordInput = () => cy.get('input[name="password"]')
  const termsCheckBox = () => cy.get('input[name="terms"]')
  const submitBtn = () => cy.get('.submitBtn')
  const roleMenu = () => cy.get('select[name="role"]')

  it('sanity checks', () => {
    //assertion(s)
    expect(5).to.equal(5)
    expect(1 + 2).to.equal(3)
    expect({}).to.eql({})
    expect({}).to.not.equal({})
  })

  it('The name element exists and we can type in it', () => {
    nameInput()
      .should('exist')
      .type('Joe mama')
      .should('have.value', 'Joe mama')
  })
  it('The e-mail element exists and we can type in it', () => {
    emailInput()
      .should('exist')
      .type('Joemama@gmail.com')
      .should('have.value', 'Joemama@gmail.com')
  })
  it('The password element exists and we can type into it', () => {
    passwordInput()
      .should('exist')
      .type('1234qwer')
      .should('have.value', '1234qwer')
  })
  it('Can user check terms of service box', () => {
    termsCheckBox().should('exist').check().should('be.checked')
  })
  it('The user can submit form data', () => {
    submitBtn().should('exist')
    roleMenu().should('exist')
    nameInput().type('Shrek',{delay:100})
    emailInput().type('elEhre@gmail.com',{delay:100})
    passwordInput().type('Donkey123')
    termsCheckBox().check()
    roleMenu().select('Team Lead')
    submitBtn().click()
    cy.contains(/Shrek/).should('exist')
  })
  it.only('Checks all messages of form validation', () => {
      nameInput().type('a').clear()
      cy.contains('Name is required')
      emailInput().type('a',{delay:100})
      cy.contains('Must be a valid email address.')
      emailInput().clear()
      cy.contains('Must include email address.')
      passwordInput().type('a')
      cy.contains('Password is too short - should be 8 chars minimum.')
      passwordInput().clear()
      cy.contains('No password provided.')
      termsCheckBox().check().uncheck()
      cy.contains('You must accept the terms.')
      roleMenu().select('Team Lead')
      roleMenu().select('')
      cy.contains('Role is required.')
      

  })
})
