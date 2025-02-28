import ElementsComponent from "../page/components/elements/elements.component";
import SideMenu from "../page/components/side-menu/side-menu.component";
import TextboxComponent from "../page/components/elements/textbox.component";
import HomePage from "../page/home-page";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

const homePage = HomePage.getInstance();
const elementsComponent = ElementsComponent.getInstance();

const sideMenu = SideMenu.getInstance();
const textBoxComponent = TextboxComponent.getInstance();

describe("", () => {

    beforeEach(() => {
        cy.viewport(1920, 1080);
    });


    it("Verify form submission and displayed output", () => {
        homePage.visit()
            .waitUntil(() => {
                homePage.elementsCard().should("be.visible");
            })
            .click("elementsCard")
            .waitUntil(() => {
                elementsComponent.isVisible();
            });

        sideMenu.isVisible()
            .click("textBox")
            .waitUntil(() => {
                textBoxComponent.isVisible();
            });

        textBoxComponent.assertThat(() => {
            textBoxComponent.fullNameLabel().should("be.visible");
            textBoxComponent.fullNameInput().should("be.enabled");
            textBoxComponent.emailLabel().should("be.visible");
            textBoxComponent.emailInput().should("be.enabled");
            textBoxComponent.currentAddressLabel().should("be.visible");
            textBoxComponent.currentAddressTextarea().should("be.enabled");
            textBoxComponent.permanentAddressLabel().should("be.visible");
            textBoxComponent.permanentAddressTextarea().should("be.enabled");
        })
            .type("fullNameInput", "tester")
            .assertThat(() => {
                textBoxComponent.fullNameInput().should("have.value", "tester");
            })
            .type("emailInput", "tester@email.com")
            .assertThat(() => {
                textBoxComponent.emailInput().should("have.value", "tester@email.com");
            })
            .type("currentAddressTextarea", "Hai Ba Trung, Ha Noi")
            .assertThat(() => {
                textBoxComponent.currentAddressTextarea().should("have.value", "Hai Ba Trung, Ha Noi");
            })
            .click("submitBtn")
            .assertThat(() => {
                textBoxComponent.output().should("be.visible");
                textBoxComponent.outputName().invoke("text").should("eq", "Name:tester");
                textBoxComponent.outputEmail().invoke("text").should("eq", "Email:tester@email.com");
                textBoxComponent.outputCurrentAddress().invoke("text").should("contain", "Current Address :Hai Ba Trung, Ha Noi");
                textBoxComponent.outputPermanentAddress().should("not.exist");
            });
    })

    it("Verify entering text into \"Email\" field", () => {
        homePage.visit()
            .waitUntil(() => {
                homePage.elementsCard().should("be.visible");
            })
            .click("elementsCard")
            .waitUntil(() => {
                elementsComponent.isVisible();
            });

        sideMenu.isVisible()
            .click("textBox")
            .waitUntil(() => {
                textBoxComponent.isVisible();
            });

        textBoxComponent.assertThat(() => {
            textBoxComponent.emailLabel().should("be.visible");
            textBoxComponent.emailInput().should("be.enabled");
        })
            .type("emailInput", "tester")
            .click("submitBtn")
            .assertThat(() => {
                textBoxComponent.emailInput().should("have.class", "field-error");
            })
            .clear("emailInput")
            .type("emailInput", "tester@email")
            .click("submitBtn")
            .assertThat(() => {
                textBoxComponent.emailInput().should("have.class", "field-error");
            })
            .clear("emailInput")
            .type("emailInput", "tester@email.com")
            .click("submitBtn")
            .assertThat(() => {
                textBoxComponent.output().should("be.visible");
                textBoxComponent.outputName().should("not.exist");
                textBoxComponent.outputEmail().invoke("text").should("eq", "Email:tester@email.com");
                textBoxComponent.outputCurrentAddress().should("not.exist");
                textBoxComponent.outputPermanentAddress().should("not.exist");
            });
    })

});