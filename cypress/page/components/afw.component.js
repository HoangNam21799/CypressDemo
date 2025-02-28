import BaseComponent from "./base.component";

export default class AFWComponent extends BaseComponent {

    static getInstance() {
        if (!this.instance) {
            this.instance = new AFWComponent();
        }

        return this.instance;
    }

    isVisible() {
        cy.url().should("include", "/alertsWindows");
        this.body().contains("Please select an item from left to start practice.");
        return this;
    }
}