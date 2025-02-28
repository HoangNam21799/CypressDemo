import CheckboxComponent from "../page/components/elements/checkbox.component";
import ElementsComponent from "../page/components/elements/elements.component";
import SideMenu from "../page/components/side-menu/side-menu.component";
import HomePage from "../page/home-page";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

const homePage = HomePage.getInstance();
const elementsComponent = ElementsComponent.getInstance();

const sideMenu = SideMenu.getInstance();
const checkboxComponent = CheckboxComponent.getInstance();

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
            .click("checkBox")
            .waitUntil(() => {
                checkboxComponent.isVisible();
            });

        checkboxComponent.expandAll();
    });

    it("Should select single checkbox by name", () => {
        checkboxComponent.waitUntil(() => {
            checkboxComponent.checkboxByName("home").should("be.visible");
        })
            .clickCheckBoxByName("home")
            .assertThat(() => {
                checkboxComponent.verifyCheckboxChecked("home");
            })
    });

    it("Should select multiple checkboxes by names", () => {
        checkboxComponent.waitUntil(() => {
            checkboxComponent.checkboxByName("desktop").should("be.visible");
        })
            .clickCheckboxes(["desktop", "documents", "downloads"])
            .assertThat(() => {
                checkboxComponent.verifyCheckboxChecked("desktop");
                checkboxComponent.verifyCheckboxChecked("documents");
                checkboxComponent.verifyCheckboxChecked("downloads");
            })
    });

    it("Should deselect checkbox and verify", () => {
        checkboxComponent.waitUntil(() => {
            checkboxComponent.checkboxByName("office").should("be.visible");
        })
            .clickCheckBoxByName("office")
            .assertThat(() => {
                checkboxComponent.verifyCheckboxChecked("office");
            })
            .clickCheckBoxByName("office")
            .assertThat(() => {
                checkboxComponent.verifyCheckboxChecked("office", false);
            })
    });
});