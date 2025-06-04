describe('Send Message Test', () => {
    let UserData;

    before(() => {
        cy.fixture('UserData').then((data) => {
            UserData = data;
        });
    })

    const loginURL = 'https://ok.ru/';
    const FRIEND_NAME = 'Максим Киселёв';
    const MESSAGE = 'hello!'

    beforeEach(() => {
        cy.log('Открываем сайт и входим в акк перед каждым тестом');
        cy.visit(loginURL);
        cy.viewport(1920, 1080); //разрешение экрана для моего устройства

        cy.get('#field_email').type(UserData.login);
        cy.get('#field_password').type(UserData.password);
        cy.get('input[data-l="t,sign_in"]').click();
    });

    it('Проверка отправки сообщения', () => {
  
        cy.get('[data-l="t,messages"]').should('be.visible').click();

        cy.get('[data-tsid="chat-search-input"]').type(FRIEND_NAME, {force: true}); 

        cy.get('[data-tsid="chat"]').first().click();

        cy.get('[data-tsid="write_msg_input-input"]').type(MESSAGE);

        cy.get('[data-l="t,sendButton"]').should('be.visible').first().click();
});
});
