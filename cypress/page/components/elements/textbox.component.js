import BaseComponent from "../base.component";

export default class TextboxComponent extends BaseComponent {

    static getInstance() {
        if (!this.instance) {
            this.instance = new TextboxComponent();
        }

        return this.instance;
    }

    isVisible() {
        cy.url().should("include", "/text-box");
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
    output = () => cy.get("#output")
    outputName = () => this.output().find("#name");
    outputEmail = () => this.output().find("#email");
    outputCurrentAddress = () => this.output().find("#currentAddress");
    outputPermanentAddress = () => this.output().find("#permanentAddress");
}