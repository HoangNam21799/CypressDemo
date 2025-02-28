import BaseComponent from "../base.component";

export default class InteractionsComponent extends BaseComponent {
    static getInstance() {
        if (!this.instance) {
            this.instance = new InteractionsComponent();
        }

        return this.instance;
    }

    isVisible() {
        cy.url().should("include", "/interaction");
        this.body().contains("Please select an item from left to start practice.");
        return this;
    }
}