describe('Simple Login Tests', () => {
    const loginURL = 'https://ok.ru/';

    beforeEach(() => {
        cy.log('Открываем страницу входа перед каждым тестом');
        cy.visit(loginURL);
        cy.viewport(1920, 1080); //разрешение экрана для моего устройства
    });

    it('Тест: Неправильный логин', () => {
        cy.log('Попытка входа с неверными данными');
        cy.get('#field_email').type('invalidUser ');
        cy.get('#field_password').type('invalidPassword');
        cy.get('input[data-l="t,sign_in"]').click();

        cy.log('Проверка, что отображается нужное сообщение об ошибке');
        const expectedErrorMessage = 'Неправильно указан логин и/или пароль';
        cy.get('div.input-e.login_error').should('be.visible').and('contain', expectedErrorMessage);
    });

    it('Тест: Пустой логин', () => {
        cy.log('Вводим только пароль');
        cy.get('#field_password').type('somePassword');
        cy.get('input[data-l="t,sign_in"]').click();

        cy.log('Проверка, что отображается нужное сообщение об ошибке');
        const expectedErrorMessage = 'Введите логин';
        cy.get('div.input-e.login_error').should('be.visible').and('contain', expectedErrorMessage);
    });

    it('Тест: Пустой пароль', () => {
        cy.log('Проверка, вводим только логин');
        cy.get('#field_email').type('someUser');
        cy.get('input[data-l="t,sign_in"]').click();

        cy.log('Проверка, что отображается нужное сообщение об ошибке');
        const expectedErrorMessage = 'Введите пароль';
        cy.get('div.input-e.login_error').should('be.visible').and('contain', expectedErrorMessage);
    });
});