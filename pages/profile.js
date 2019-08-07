'use strict';

let elements = require('./elements');

let I;

module.exports = {
    _init() {
        I = actor();
    },

    setStartDate: async () => {
        within(elements.root);
        {
            await elements.I.fillField(elements.root.startDate, elements.root.date);
        }
    },

    sendAddYourChild() {
        I.click(elements.buttons.addYourChild);
        I.waitInUrl(elements.url.addChildURL, 10);
        I.click(elements.buttons.labelNotborn);
        I.click(elements.buttons.labelGirl);
        I.click(elements.buttons.labelBoy);
        I.click(elements.buttons.next);
        I.fillField(elements.fields.first_name, 'Hubertbblaine');
        I.fillField(elements.fields.last_name, 'Wolfeschlegelsteinhausenbergerdorff');
        I.click(elements.buttons.next);
        // I.wait(1);
        I.wait(2);
        I.click(elements.buttons.openYear );
        I.click(elements.buttons.selectOption);
        I.wait(1);
        I.click(elements.buttons.openMonth);
        I.click(elements.buttons.selectOption);
        I.click(elements.buttons.openDay);
        I.wait(1);
        I.click(elements.buttons.selectOption);

        I.click(elements.buttons.next);
        I.attachFile(elements.file.attachFile, './1.jpg');
        I.wait(1);
        I.click(elements.buttons.nextThird);
        I.wait(1);
        I.click(elements.buttons.labelBoy);
        I.click(elements.buttons.nextThird);
        I.fillField(elements.fields.first_name, 'AnnaberthaCeciliaDiana');
        I.fillField(elements.fields.last_name, 'HUmmera@****fillasumentina');
        I.click(elements.buttons.next);
        I.click(elements.buttons.next);
        I.click(elements.buttons.next);
        I.seeElement(elements.elementPage.congratulations);
        I.click(elements.buttons.goChildProfile);
        I.waitInUrl(elements.url.createChildUrl, 10);
    },

    sendAddPost() {
        I.wait(1);
        I.click(elements.childButtons.addAMemory);
        I.wait(1);
        I.click(elements.childButtons.addPost);
        I.wait(2);
        I.fillField(elements.childFields.title, 'Lorem ipsum dolor sit amet, consectetur adipiscing eli');
        I.fillField(elements.childFields.description, 'Lorem ipsum dolor sit amet, consectetur adipiscing eli');
        I.fillField(elements.childFields.date, '3/26/2019');
        I.attachFile(elements.file.attachChildPost, './1.jpg');
        I.wait(2);
        I.click(elements.childButtons.postDatepicker);
        I.click(elements.childButtons.postDatepickerYear);
        I.click(elements.childButtons.postDatepickerMonth);
        I.click(elements.childButtons.postDatepickerDay);
        I.click(elements.childButtons.savePost);
        I.wait(2);
    },

    sendDeletePost() {
        I.click(elements.childButtons.deletePost);
        I.click(elements.childButtons.deletePostProve);
        I.click(elements.childButtons.deletePostProve2);
        I.wait(2);
    },

    sendAddFavorite() {
        I.wait(1);
        I.click(elements.childButtons.addAMemory);
        I.wait(1);
        I.click(elements.childButtons.addFavorite);
        I.wait(2);
        I.fillField(elements.childFields.title, 'Lorem ipsum dolor sit amet, consectetur adipiscing eli');
        I.fillField(elements.childFields.description, 'Lorem ipsum dolor sit amet, consectetur adipiscing eli');
        I.attachFile(elements.file.attachChildPost, './1.jpg');
        I.wait(3);
        I.click(elements.childButtons.savePost);
        I.wait(3);
    },

    sendAddEvents() {
        I.waitForElement(elements.childButtons.addAMemory, 10);
        I.click(elements.childButtons.addAMemory);
        I.wait(1);
        I.click(elements.childButtons.addEvents);
        I.wait(2);
        I.attachFile(elements.file.attachChildPost, './1.jpg');
        I.fillField(elements.childFields.title, 'Lorem ipsum dolor sit amet, consectetur adipiscing eli');
        I.fillField(elements.childFields.description, 'Lorem ipsum dolor sit amet, consectetur adipiscing eli');
        I.fillField(elements.childFields.enterLocation, 'Some text and special characters % $ @');
        I.fillField(elements.childFields.address, 'California, Malibu');
        I.click(elements.childButtons.savePost);
        I.wait(3);
    },

    sendAddWishlist() {
        I.waitForElement(elements.childButtons.addAMemory, 10);
        I.click(elements.childButtons.addAMemory);
        I.wait(1);
        I.click(elements.childButtons.addWishlist);
        I.wait(2);
        I.fillField(elements.childFields.wishlist, 'Happy Happy Happy Birthday !!!');
        I.fillField(elements.childFields.title, 'Lorem ipsum dolor sit amet, consectetur adipiscing eli');
        I.fillField(elements.childFields.wishlist, 'Happy parents too !!!');
        I.click(elements.childButtons.savePost);
        I.wait(3);
    },

    sendWishlistItems() {
        I.waitForElement(elements.childButtons.addAMemory, 10);
        I.click(elements.childButtons.wishlistItems);
        I.wait(1);
        I.click(elements.childButtons.love);
        I.click(elements.childButtons.smile);
        I.click(elements.childButtons.favourites);
        I.wait(2);
    },

    sendAddFirstTimer() {
        I.waitForElement(elements.childButtons.addAMemory, 10);
        I.click(elements.childButtons.addAMemory);
        I.wait(1);
        I.click(elements.childButtons.addFirstTimer);
        I.wait(2);
        I.attachFile(elements.file.attachChildPost, './1.jpg');
        I.fillField(elements.childFields.title, 'Lorem ipsum dolor sit amet, consectetur adipiscing eli');
        I.fillField(elements.childFields.description, 'Lorem ipsum dolor sit amet, consectetur adipiscing eli');
        I.wait(2);
        I.click(elements.childButtons.savePost);
        I.wait(3);
    },

    sendAddRecords() {
        //----------- Record Academic ----------//
        I.waitForElement(elements.childButtons.addAMemory, 10);
        I.click(elements.buttons.records);
        I.waitInUrl(elements.url.recordsURL, 10);
        I.click(elements.buttons.addRecord);
        I.wait(2);
        I.fillField(elements.fields.recordTitle, 'Lorem ipsum dolor sit amet, adipiscing eli...');
        I.attachFile(elements.file.attachChildPost, './1.jpg');
        I.wait(2);
        I.click(elements.buttons.selectRecord);
        I.wait(1);
        I.click(elements.buttons.selectAcademic);
        I.click(elements.buttons.submitLogin);
        I.wait(2);
    },

    sendPrivacySettings() {
        I.waitForElement(elements.childButtons.privacySettings, 10);
        I.click(elements.childButtons.privacySettings);
        I.wait(2);
        I.click(elements.buttons.submitLogin);
        I.wait(3);
    },

    sendDeleteYourChild() {
        I.amOnPage(elements.url.profileURL);
        I.click(elements.buttons.editChild);
        I.wait(1);
        I.click(elements.buttons.deleteChild);
        I.wait(1);
        I.fillField(elements.fields.deleteChildPopup, '1234567890');
        I.click(elements.buttons.deleteChildApprove);
        I.waitInUrl(elements.url.profileURL, 10);
        I.wait(1);
    },

    sendInviteYourFriends() {
        I.click(elements.buttons.inviteYourFriends);
        I.waitInUrl(elements.url.inviteEmailURL, 10);
        I.click(elements.buttons.inviteByPhone);
        I.waitInUrl(elements.url.invitePhoneURL, 10);
        I.fillField(elements.fields.invite_byPhone, '+39000000000000');
        I.click(elements.buttons.inviteByEmail);
        I.fillField(elements.fields.invite_email, 'sometest@mail.com');
        I.click(elements.buttons.inviteSubmit);
        I.wait(2);
    },

    sendVerifyMyProfile() {
        I.click(elements.buttons.single);
        I.wait(3);
        I.click(elements.buttons.editAccount);
        I.waitInUrl(elements.url.editAccountURL, 10);
        I.seeInField(elements.fields.edit_userName, 'QA');
        I.seeInField(elements.fields.edit_userLastName, 'Admin');
        I.seeInField(elements.fields.edit_userEmail, 'test.qa.faker@gmail.com');
    },

    verifyFooterHeader() {
        I.click(elements.buttons.single);
        I.click(elements.buttons.editAccount);
        I.waitInUrl(elements.url.editAccountURL, 10);
        I.click(elements.buttons.searchForPeople);
        I.click(elements.buttons.notifications);
        I.seeElement(elements.buttons.profile);
        I.scrollTo(elements.elementPage.footer);
        I.seeElement(elements.elementPage.blocMyChild);
        I.wait(2);
        // I.click(elements.buttons.privacyPolicy);
        I.amOnPage(elements.url.privacyPolicyURL);
        I.waitInUrl(elements.url.privacyPolicyURL, 10);
        // I.click(elements.buttons.termsAndConditions);
        I.amOnPage(elements.url.termsAndConditionsURL);
        I.waitInUrl(elements.url.termsAndConditionsURL, 10);
        I.wait(2);
    },

    verifySearchPeople() {
        I.click(elements.buttons.searchForPeople);
        I.waitInUrl(elements.url.searchForPeopleURL, 10);
        I.fillField(elements.fields.search_people, 'Ann');
        I.wait(2);
        I.click(elements.buttons.searchPeopleID);
        I.waitInUrl(elements.url.searchResultIdURL, 10);
        I.amOnPage(elements.url.searchForPeopleURL);
        I.click(elements.buttons.searchMemories);
        I.fillField(elements.fields.search_memories, 'Some text');
        I.wait(1);
        I.click(elements.buttons.searchAdvice);
        I.waitInUrl(elements.url.searchAdviceURL, 10);
        I.fillField(elements.fields.search_advice, 'Children');
        I.wait(1);
        I.click(elements.buttons.searchAdviceID);
        I.waitInUrl(elements.url.searchAdviceIdURL, 10);
        I.amOnPage(elements.url.searchForPeopleURL);
    },

    verifySponsored() {
        I.click(elements.buttons.sponsoredProfessional);
        I.waitInUrl(elements.url.sponsoredProfessionalURL, 10);
        I.seeElement(elements.elementPage.sponsoredProfessional);
        I.click(elements.buttons.sponsoredKnowYourChild);
        I.waitInUrl(elements.url.sponsoredKnowYourChildURL, 10);
    },

    setTimeline: async () => {
        // within(elements);
        {
            I.click(elements.buttons.timelineDrop);
            I.click(elements.buttons.timelinePost);
            I.waitInUrl(elements.url.timelinePostURL, 10);
            I.click(elements.buttons.timelineDrop);
            I.click(elements.buttons.timelineFirstTimers);
            I.waitInUrl(elements.url.timelineFirstTimersURL, 10);
            I.click(elements.buttons.timelineDrop);
            I.click(elements.buttons.timelineFavorites);
            I.waitInUrl(elements.url.timelineFavoritesURL, 10);
            I.click(elements.buttons.timelineDrop);
            I.click(elements.buttons.timelineWishlist);
            I.waitInUrl(elements.url.timelineWishlistURL, 10);
            I.click(elements.buttons.timelineDrop);
            I.click(elements.buttons.timelineEvents);
            I.waitInUrl(elements.url.timelineEventsURL, 10);
        }
    },

    verifyConnections: async function () {
        I.waitForElement(elements.buttons.connections,10);
        let result = await I.grabTextFrom(elements.buttons.connections);
        I.click(elements.buttons.connections);
        I.waitForElement(elements.elementPage.connectionsTitle,10);
        let result2 = await I.grabTextFrom(elements.elementPage.connectionsTitle);
        let result3 = await I.grabTextFrom(elements.elementPage.connectionsName);

        console.log('result:', result, result2);
        // assert.notEqual(result,result2, true);
    },

    verifySuggestedConnections: async function () {
        I.wait(2);
        I.click(elements.buttons.suggestedConnect);
        I.click(elements.buttons.suggestedConnectFamily);
        I.wait(2);
        I.amOnPage(elements.url.suggestedConnectionsURL);
        I.waitInUrl(elements.url.suggestedConnectionsURL,10);
        I.scrollPageToBottom(elements.buttons.loadMore);
        I.click(elements.buttons.loadMore);
        I.wait(2);
    },

    deleteSuggestedConnections: async function () {
        I.click(elements.buttons.connections);
        I.waitInUrl(elements.url.connectionsURL,10);
        I.waitForElement(elements.buttons.deleteConnections);
        I.click(elements.buttons.deleteConnections);
        I.wait(1);
        I.click(elements.buttons.deleteChildApprove);
        I.wait(2);
    },

    verifyShareAMemory: async function () {
        I.click(elements.childButtons.childFreya);
        I.wait(1);
    },

    deleteShareAMemory: async function () {
        I.click(elements.childButtons.deleteShare);
        I.click(elements.buttons.deleteChildApprove);
        I.wait(2);
    },






};






























