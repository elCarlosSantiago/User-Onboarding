describe('User Onboarding App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  const nameInput = () => cy.get('input[name="name"]')
  const emailInput = () => cy.get('input[name="email"]')
  const passwordInput = () => cy.get('input[name="password"]')
  const termsCheckBox = () => cy.get('input [name="terms"]')

  it('sanity checks', () => {
    //assertion(s)
    expect(5).to.equal(5)
    expect(1 + 2).to.equal(3)
    expect({}).to.eql({})
    expect({}).to.not.equal({})
  })

  it('The name element exists and we can type in it', () => {
    nameInput().should('exist')
    nameInput().type('Joe mama')
    nameInput().should('have.value', 'Joe mama')
  })
  it('The e-mail element exists and we can type in it', () => {
      emailInput().should('exist')
      emailInput().type('Joemama@gmail.com')
      emailInput().should('have.value', 'Joemama@gmail.com')
  })
  it('The password element exists and we can type into it', () => {
      passwordInput().should('exist')
      passwordInput().type('1234qwer')
      passwordInput().should('have.value', '1234qwer')

  })
})
