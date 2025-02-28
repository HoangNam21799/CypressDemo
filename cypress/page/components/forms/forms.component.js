import BaseComponent from "../base.component";

export default class FormsComponent extends BaseComponent {

    static getInstance() {
        if (!this.instance) {
            this.instance = new FormsComponent();
        }

        return this.instance;
    }

    isVisible() {
        cy.url().should("include", "/forms");
        this.body().contains("Please select an item from left to start practice.");
        return this;
    }
}