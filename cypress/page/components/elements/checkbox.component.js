import BaseComponent from "../base.component"

export default class CheckboxComponent extends BaseComponent {

    static getInstance() {
        if (!this.instance) {
            this.instance = new CheckboxComponent();
        }

        return this.instance;
    }

    isVisible() {
        cy.url().should("include", "/checkbox");
        this.body().contains("Check Box").should("be.visible");
        return this;
    }

    checkboxByName = (name) => cy.get(`label[for="tree-node-${name.toLowerCase()}"] span.rct-checkbox`);

    clickCheckBoxByName = (name) => {
        this.checkboxByName(name).click();
        return this;
    }

    verifyCheckboxChecked(name, shouldBeChecked = true) {
        const assertion = shouldBeChecked ? 'be.checked' : 'not.be.checked';
        cy.get(`#tree-node-${name.toLowerCase()}`).should(assertion);
    }

    clickCheckboxes(names = []) {
        names.forEach(name => {
            this.clickCheckBoxByName(name);
        });

        return this;
    }

    expandAll() {
        cy.get(".rct-option-expand-all").click();
        return this;
    }

    collapseAll() {
        cy.get(".rct-option-collapse-all").click();
        return this;
    }
}