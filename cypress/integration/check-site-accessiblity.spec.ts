describe('Check if countdown domain is accessible', () => {
	it('should display url when navigating to Prod', () => {
		cy.visit('/');

        cy.url().should('not.be.empty')
	});
});