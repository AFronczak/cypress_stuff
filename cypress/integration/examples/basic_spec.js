describe('simple', function() {
  before(function() {
    cy.visit('http://meetup.com');
  })

  xit('should - get element from dom', function() {
    cy
      .get(".flex flex--column exploreHome-container")
      .should('have.length', 1);
  })

  it('should - not have "Win a Million Dollars!!" on the index page', function() {
    cy
      .get('gridList gridList--has2 atLarge_gridList--has4 exploreHome-categories-list')
      .should('not.contain', 'Win a Million Dollars!!');
  })
})
