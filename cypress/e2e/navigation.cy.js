import AFWComponent from "../page/components/afw.component";
import BookStoreApplicationComponent from "../page/components/book-store-application.component";
import ElementsComponent from "../page/components/elements.component";
import FormsComponent from "../page/components/forms.component";
import InteractionsComponent from "../page/components/interactions.component";
import SideMenu from "../page/components/side-menu.component";
import TextBoxComponent from "../page/components/textbox.component";
import WidgetsComponent from "../page/components/widgets.component";
import HomePage from "../page/home-page";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

const homePage = HomePage.getInstance();
const elementsComponent = ElementsComponent.getInstance();
const formsComponent = FormsComponent.getInstance();
const afwComponent = AFWComponent.getInstance();
const widgetsComponent = WidgetsComponent.getInstance();
const interactionsComponent = InteractionsComponent.getInstance();
const bookStoreApplicationComponent = BookStoreApplicationComponent.getInstance();

const sideMenu = SideMenu.getInstance();
const textBoxComponent = TextBoxComponent.getInstance();

describe("", () => {

    beforeEach(() => {
        cy.intercept("GET", "*", (req) => {
            if (req.url.includes("google")) {
                req.reply({ body: "" });
            }
        }).as("blockGoogleRequests");
    });


    it("Verify homepage loads successfully", () => {
        homePage.visit()
            .assertThat(() => {
                homePage.elementsCard().should("be.visible");
                homePage.formsCard().should("be.visible");
                homePage.afwCard().should("be.visible");
                homePage.widgetsCard().should("be.visible");
                homePage.interactionsCard().should("be.visible");
                homePage.bookStoreApplicationCard().should("be.visible");
            })
    })

    it("Verify navigation to \"Elements\" page", () => {
        homePage.visit()
            .waitUntil(() => {
                homePage.elementsCard().should("be.visible");
            })
            .click("elementsCard")
            .assertThat(() => {
                elementsComponent.isVisible();
            });
    })

    it("Verify navigation to \"Forms\" page", () => {
        homePage.visit()
            .waitUntil(() => {
                homePage.formsCard().should("be.visible");
            })
            .click("formsCard")
            .assertThat(() => {
                formsComponent.isVisible();
            });
    })

    it("Verify navigation to \"Alerts, Frame & Windows\" page", () => {
        homePage.visit()
            .waitUntil(() => {
                homePage.afwCard().should("be.visible");
            })
            .click("afwCard")
            .assertThat(() => {
                afwComponent.isVisible();
            });
    })

    it("Verify navigation to \"Widgets\" page", () => {
        homePage.visit()
            .waitUntil(() => {
                homePage.widgetsCard().should("be.visible");
            })
            .click("widgetsCard")
            .assertThat(() => {
                widgetsComponent.isVisible();
            });
    })

    it("Verify navigation to \"Interactions\" page", () => {
        homePage.visit()
            .waitUntil(() => {
                homePage.interactionsCard().should("be.visible");
            })
            .click("interactionsCard")
            .assertThat(() => {
                interactionsComponent.isVisible();
            });
    })

    it("Verify navigation to \"Book Store Application\" page", () => {
        homePage.visit()
            .waitUntil(() => {
                homePage.bookStoreApplicationCard().should("be.visible");
            })
            .click("bookStoreApplicationCard")
            .assertThat(() => {
                bookStoreApplicationComponent.isVisible();
            });
    })

    it("Verify navigation to \"Text Box\" page", () => {
        homePage.visit()
            .waitUntil(() => {
                homePage.elementsCard().should("be.visible");
            })
            .click("elementsCard")
            .waitUntil(() => {
                elementsComponent.isVisible();
            });

        sideMenu.isVisible()
            .click("textBox");

        textBoxComponent.isVisible()
            .assertThat(() => {
                textBoxComponent.fullNameLabel().should("be.visible");
                textBoxComponent.fullNameInput().should("be.enabled");
                textBoxComponent.emailLabel().should("be.visible");
                textBoxComponent.emailInput().should("be.enabled");
                textBoxComponent.currentAddressLabel().should("be.visible");
                textBoxComponent.currentAddressTextarea().should("be.enabled");
                textBoxComponent.permanentAddressLabel().should("be.visible");
                textBoxComponent.permanentAddressTextarea().should("be.enabled");
            });
    })

});