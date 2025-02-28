export default class BaseComponent {

    body() {
        return cy.get(".col-12.mt-4.col-md-6");
    }

    click(elementName) {
        if (typeof this[elementName] !== "function") {
            throw new Error(`Element "${elementName}" does not exist!`);
        }

        this[elementName]().click();
        return this;
    }

    dblclick(elementName) {
        if (typeof this[elementName] !== "function") {
            throw new Error(`Element "${elementName}" does not exist!`);
        }

        this[elementName]().dblclick();
        return this;
    }

    type(elementName, text, options = {}) {
        if (typeof this[elementName] !== "function") {
            throw new Error(`Element "${elementName}" does not exist!`);
        }

        this[elementName]().type(text, options);
        return this;
    }

    clear(elementName) {
        if (typeof this[elementName] !== "function") {
            throw new Error(`Element "${elementName}" does not exist!`);
        }

        this[elementName]().clear();
        return this;
    }

    assertThat(assertion) {
        assertion();
        return this;
    }

    waitUntil(event) {
        event();
        return this;
    }
}