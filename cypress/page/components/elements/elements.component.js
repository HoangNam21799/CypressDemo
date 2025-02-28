import BaseComponent from "../base.component";

export default class ElementsComponent extends BaseComponent {

    static getInstance() {
        if (!this.instance) {
            this.instance = new ElementsComponent();
        }

        return this.instance;
    }

    isVisible() {
        cy.url().should("include", "/elements");
        this.body().contains("Please select an item from left to start practice.");
        return this;
    }
}