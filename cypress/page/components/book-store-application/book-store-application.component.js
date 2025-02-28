import BaseComponent from "../base.component";

export default class BookStoreApplicationComponent extends BaseComponent {

    static getInstance() {
        if (!this.instance) {
            this.instance = new BookStoreApplicationComponent();
        }

        return this.instance;
    }

    isVisible() {
        cy.url().should("include", "/books");
        return this;
    }
}