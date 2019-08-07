Feature('Todo t2b');
Feature('I');
Feature('login');

const main = '/';

Before((I,) => {
    I.amOnPage('/');
});

Scenario('Auth Login Page', (I, loginPage) => {
    loginPage.authLoginLogoutValid();
    loginPage.authLoginFailed();
});


Scenario('Conversations Page', (I, loginPage, conversationsPage) => {
    loginPage.authLoginValid();
    conversationsPage.conversationsPageVerify();
    // conversationsPage.conversationsPageSendLocation();
    // conversationsPage.conversationsPageSendContact();
    conversationsPage.conversationsPageReplyMessage();
});













