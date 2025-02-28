import BaseComponent from "./base.component";

export default class WidgetsComponent extends BaseComponent {
    static getInstance() {
        if (!this.instance) {
            this.instance = new WidgetsComponent();
        }

        return this.instance;
    }

    isVisible() {
        cy.url().should("include", "/widgets");
        this.body().contains("Please select an item from left to start practice.");
        return this;
    }
}