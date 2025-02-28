import BaseComponent from "../base.component";

export default class RadioButtonComponent extends BaseComponent {

    static getInstance() {
        if (!this.instance) {
            this.instance = new RadioButtonComponent();
        }

        return this.instance;
    }

    isVisible() {
        cy.url().should("include", "/radio-button");
        this.body().contains("Radio Button").should("be.visible");
        return this;
    }

    yesRadioLabel = () => cy.get(`label[for="yesRadio"]`);
    yesRadioBtn = () => cy.get("#yesRadio");
    impressiveRadioLabel = () => cy.get(`label[for="impressiveRadio"]`);
    impressiveRadioBtn = () => cy.get("#impressiveRadio");
    noRadioLabel = () => cy.get(`label[for="noRadio"]`);
    noRadioBtn = () => cy.get("#noRadio");
}