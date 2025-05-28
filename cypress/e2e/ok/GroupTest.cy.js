const username = 'technopol50';
const password = 'technopolisPassword';

describe('Group Test', () => {
  it('Позитивная проверка перехода на страницу "Group" без авторизации', () => {
    cy.visit('https://ok.ru');
    cy.xpath("//a[contains(text(),'Группы')]").should('be.visible').click({force:true});
    cy.url().should('eq', 'https://ok.ru/groups');
    cy.xpath("//span[text()='Создать группу']").should('be.visible');
    cy.xpath(".//*[contains(@class, 'input__prt1l')]").should('be.visible');
  });

  it('Позитивная проверка перехода на страницу "Group" с авторизацией', () => {
    cy.visit('https://ok.ru');
    cy.get('#field_email').should('be.visible').as('emailInput');
    cy.get('@emailInput').click({force:true});
    cy.get('@emailInput').type(username);

    cy.get('#field_password').should('be.visible').as('passwordInput');
    cy.get('@passwordInput').click({force:true});
    cy.get('@passwordInput').type(password);
    cy.get('input.button-pro').scrollIntoView().click({ force: true });
    // здесь появляется капча
    cy.xpath("//a[contains(text(),'Группы')]").should('be.visible').click();
    cy.url().should('eq', 'https://ok.ru/groups');
    cy.xpath("//span[text()='Создать группу']").should('be.visible');
    cy.xpath(".//*[contains(@class, 'input__prt1l')]").should('be.visible');

  });
});
