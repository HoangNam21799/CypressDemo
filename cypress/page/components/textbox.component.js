import BaseComponent from "./base.component";

export default class TextBoxComponent extends BaseComponent {

    static getInstance() {
        if (!this.instance) {
            this.instance = new TextBoxComponent();
        }

        return this.instance;
    }

    isVisible() {
        cy.url().should("include", "/text-box")
        this.body().contains("Text Box").should("be.visible");
        return this;
    }

    fullNameLabel = () => cy.get("#userName-label");
    fullNameInput = () => cy.get("input#userName");
    emailLabel = () => cy.get("#userEmail-label");
    emailInput = () => cy.get("input#userEmail");
    currentAddressLabel = () => cy.get("#currentAddress-label");
    currentAddressTextarea = () => cy.get("textarea#currentAddress");
    permanentAddressLabel = () => cy.get("#permanentAddress-label");
    permanentAddressTextarea = () => cy.get("textarea#permanentAddress");
    submitBtn = () => cy.get("button#submit");
}