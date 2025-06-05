export class GroupPage {
groupButton= () => cy.xpath("//a[contains(text(),'Группы')]")
createGroupButton = () => cy.xpath("//span[text()='Создать группу']")
groupSearchInput = () => cy.xpath(".//*[contains(@class, 'input__prt1l')]")
    navigate = () => {
        cy.visit('https://ok.ru')
    }
}