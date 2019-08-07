
let elements = require('./elements');

let I;

module.exports = {
    _init() {
        I = actor();
    },

    authLoginLogoutValid() {
        I.waitInUrl(elements.url.auth, 10);
        I.fillField(elements.fields.email, elements.signIn.userEmail);
        I.fillField(elements.fields.password, elements.signIn.userPassword);
        I.click(elements.buttons.loginBtn);
        I.waitInUrl(elements.url.businessPage,20);
        I.click(elements.buttons.logoutDropList);
        I.wait(3);
        I.click(elements.buttons.logoutBtn);
        I.waitInUrl(elements.url.auth);
    },

    authLoginValid() {
        I.waitInUrl(elements.url.auth, 10);
        I.fillField(elements.fields.email, elements.signIn.userEmail);
        I.fillField(elements.fields.password, elements.signIn.userPassword);
        I.click(elements.buttons.loginBtn);
        I.waitInUrl(elements.url.businessPage,15);
    },

    authLoginFailed() {
        I.waitInUrl(elements.url.auth,10);
        I.fillField(elements.fields.email, '  @mail.com');
        I.fillField(elements.fields.password, ' 111111111');
        I.click(elements.buttons.loginBtn);
        I.wait(3);

        I.amOnPage('/');
        I.waitInUrl(elements.url.auth,10);
        I.fillField(elements.fields.email, elements.signIn.userEmail);
        I.fillField(elements.fields.password, ' as');
        I.click(elements.buttons.loginBtn);
        I.wait(3);
    },

};
