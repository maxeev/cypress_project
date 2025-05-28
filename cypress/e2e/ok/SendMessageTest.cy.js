describe('Send Message Test', () => {
    const loginURL = 'https://ok.ru/';
    const FRIEND_NAME = 'Максим Киселёв';

    beforeEach(() => {
        cy.log('jdjd');
        cy.visit(loginURL);
        cy.viewport(1920, 1080); //разрешение экрана для моего устройства

        cy.get('#field_email').type('technopol39');
        cy.get('#field_password').type('technopolisPassword');
        cy.get('input[data-l="t,sign_in"]').click();
    });

    it('Проверка отправки сообщения', () => {
        const message = 'привет';
        const datePattern = 'HH:mm';

        cy.log(`Начало теста отправки сообщения с текстом: '${message}'`);
        cy.log(`Получатель: ${FRIEND_NAME}`);

        cy.get('[data-l="t,messages"').should('be.visible').click();

        cy.get('[data-tsid="conversation_list"]', { timeout: 10000 }).should('be.visible'); // Ждать до 10 секунд
        cy.get('[data-tsid="chat-search-input"]').should('be.visible').type(FRIEND_NAME);
        cy.get('[data-tsid="chat"]').should('be.visible').click();
    });
});
