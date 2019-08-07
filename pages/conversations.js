let elements = require('./elements');
let I;
var faker = require('faker');

let items = [
    elements.buttons.conversationsContactsBtn,
    elements.buttons.conversationsContacts2Btn,
    elements.buttons.conversationsContacts3Btn,
];


module.exports = {
    _init() {
        I = actor();
    },

    conversationsPageVerify() {
        I.waitInUrl(elements.url.businessPage, 10);
        I.wait(4);
        I.click(elements.listGroup.conversationsPage);
        I.wait(2);
        I.click(elements.buttons.conversationsAddBtn);
        I.wait(2);

        I.click(items[Math.floor(Math.random() * items.length)]);
        I.wait(4);

        I.fillField(elements.fields.textarea, faker.lorem.paragraph());
        I.wait(2);
        I.click(elements.buttons.sendMessageBtn);
        I.wait(2);

        I.click(elements.buttons.conversationsAddBtn);
        I.waitForElement(elements.buttons.conversationsContacts2Btn, 5);
        I.click(elements.buttons.conversationsContacts2Btn);
        I.wait(3);
        I.fillField(elements.fields.textarea, faker.lorem.paragraph());
        I.wait(1);
        I.click(elements.buttons.sendMessageBtn);
        I.wait(2);
    },

    conversationsPageSendLocation() {
        I.click(elements.buttons.conversationsAddBtn);
        I.waitForElement(elements.buttons.conversationsContacts3Btn, 5);

        I.click(items[Math.floor(Math.random() * items.length)]);
        I.wait( 3);
        I.click(elements.buttons.sendMessageBtn);
        I.wait(2);
        I.click(elements.buttons.conversationsLocationBtn);
        I.wait(2);
        I.click(elements.buttons.conversationsLocationSendBtn);
        I.wait(2);
    },

    conversationsPageSendContact() {
        I.wait(4);
        I.click(elements.listGroup.conversationsPage);
        I.wait(2);
        I.click(elements.buttons.conversationsAddBtn);
        I.wait(3);
        I.click(elements.buttons.conversationsContactsBtn);
        I.wait(4);
        I.click(elements.buttons.conversationsSendContactsBtn);
        I.wait(3);

        I.click(items[Math.floor(Math.random() * items.length)]);
        I.wait(3);
    },

    conversationsPageReplyMessage() {
        I.click(elements.actionMessages.list);
        I.wait(2);
        I.click(elements.actionMessages.replyMessage);
        I.wait(2);
        I.fillField(elements.fields.textarea, faker.name.firstName());
        I.wait(2);
        I.click(elements.buttons.sendMessageBtn);
        I.wait(2);

    }




};