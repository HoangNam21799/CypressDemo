import CheckboxComponent from "../page/components/elements/checkbox.component";
import ElementsComponent from "../page/components/elements/elements.component";
import RadioButtonComponent from "../page/components/elements/radio-button.component";
import SideMenu from "../page/components/side-menu/side-menu.component";
import HomePage from "../page/home-page";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

const homePage = HomePage.getInstance();
const elementsComponent = ElementsComponent.getInstance();

const sideMenu = SideMenu.getInstance();
const radioButtonComponent = RadioButtonComponent.getInstance();

describe('Checkbox Tests', () => {
    beforeEach(() => {
        homePage.visit()
            .waitUntil(() => {
                homePage.elementsCard().should("be.visible");
            })
            .click("elementsCard")
            .waitUntil(() => {
                elementsComponent.isVisible();
            });

        sideMenu.isVisible()
            .click("radioButton")
            .waitUntil(() => {
                radioButtonComponent.isVisible();
            });
    });

    it("Verify selecting the \"Yes\" radio button", () => {
        radioButtonComponent.assertThat(() => {
            radioButtonComponent.yesRadioLabel().invoke("text").should("eq", "Yes");
            radioButtonComponent.yesRadioBtn().should("be.enabled").should("not.be.checked");
        })
            .click("yesRadioLabel")
            .assertThat(() => {
                radioButtonComponent.yesRadioBtn().should("be.checked");
            })
    });

    it("Verify selecting the \"Impressive\" radio button", () => {
        radioButtonComponent.assertThat(() => {
            radioButtonComponent.impressiveRadioLabel().invoke("text").should("eq", "Impressive");
            radioButtonComponent.impressiveRadioBtn().should("be.enabled").should("not.be.checked");
        })
            .click("noRadioLabel")
            .assertThat(() => {
                radioButtonComponent.impressiveRadioBtn().should("not.be.checked");
            })
    });

    it("Verify selecting the \"No\" radio button", () => {
        radioButtonComponent.assertThat(() => {
            radioButtonComponent.noRadioLabel().invoke("text").should("eq", "No");
            radioButtonComponent.noRadioBtn().should("be.disabled").should("not.be.checked");
        })
            .click("noRadioLabel")
            .assertThat(() => {
                radioButtonComponent.noRadioBtn().should("not.be.checked");
            })
    });
});