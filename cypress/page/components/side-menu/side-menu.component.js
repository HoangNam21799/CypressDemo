import BaseComponent from "../base.component";

export default class SideMenu extends BaseComponent {

    static getInstance() {
        if (!this.instance) {
            this.instance = new SideMenu();
        }

        return this.instance;
    }

    isVisible() {
        cy.get(".left-pannel").should("be.visible");
        return this;
    }

    textBox = () => cy.contains("li.btn-light", "Text Box");
    checkBox = () => cy.contains("li.btn-light", "Check Box");
    radioButton = () => cy.contains("li.btn-light", "Radio Button");
    webTables = () => cy.contains("li.btn-light", "Web Tables");
    buttons = () => cy.contains("li.btn-light", "Buttons");
    links = () => cy.contains("li.btn-light", "Links");
    broken = () => cy.contains("li.btn-light", "Broken Links - Images");
    uploadAndDownload = () => cy.contains("li.btn-light", "Upload and Download");
    dynamicProperties = () => cy.contains("li.btn-light", "Dynamic Properties");
    practiceForm = () => cy.contains("li.btn-light", "Practice Form");
    browserWindows = () => cy.contains("li.btn-light", "Browser Windows");
    alerts = () => cy.contains("li.btn-light", "Alerts");
    frames = () => cy.contains("li.btn-light", "Frames");
    nestedFrames = () => cy.contains("li.btn-light", "Nested Frames");
    modalDialogs = () => cy.contains("li.btn-light", "Modal Dialogs");
    accordian = () => cy.contains("li.btn-light", "Accordian");
    autoComplete = () => cy.contains("li.btn-light", "Auto Complete");
    datePicker = () => cy.contains("li.btn-light", "Date Picker");
    slider = () => cy.contains("li.btn-light", "Slider");
    progressBar = () => cy.contains("li.btn-light", "Progress Bar");
    tabs = () => cy.contains("li.btn-light", "Tabs");
    toolTips = () => cy.contains("li.btn-light", "Tool Tips");
    menu = () => cy.contains("li.btn-light", "Menu");
    selectMenu = () => cy.contains("li.btn-light", "Select Menu");
    sortable = () => cy.contains("li.btn-light", "Sortable");
    selectable = () => cy.contains("li.btn-light", "Selectable");
    resizeable = () => cy.contains("li.btn-light", "Resizeable");
    droppable = () => cy.contains("li.btn-light", "Droppable");
    dragable = () => cy.contains("li.btn-light", "Dragable");
    login = () => cy.contains("li.btn-light", "Login");
    bookStore = () => cy.contains("li.btn-light", "Book Store");
    profile = () => cy.contains("li.btn-light", "Profile");
    bookStoreApi = () => cy.contains("li.btn-light", "Book Store API");

}