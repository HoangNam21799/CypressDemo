import BaseComponent from "./components/base.component";

export default class HomePage extends BaseComponent {
    static getInstance() {
        if (!this.instance) {
            this.instance = new HomePage();
        }

        return this.instance;
    }

    elementsCard = () => cy.contains(".top-card", "Elements");
    formsCard = () => cy.contains(".top-card", "Forms");
    afwCard = () => cy.contains(".top-card", "Alerts, Frame & Windows");
    widgetsCard = () => cy.contains(".top-card", "Widgets");
    interactionsCard = () => cy.contains(".top-card", "Interactions");
    bookStoreApplicationCard = () => cy.contains(".top-card", "Book Store Application");

    visit() {
        cy.visit("https://demoqa.com/");
        return this;
    }
}