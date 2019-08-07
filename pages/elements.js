module.exports = {

    signIn: {
        userEmail   : 'lobas@tachyonic.tech',
        userPassword: 'qwerty'
    },

    url: {
        auth        : 'https://text-to-business-development.firebaseapp.com/auth',
        businessPage: 'https://text-to-business-development.firebaseapp.com/businessPage'
    },

    fields: {
        email   : 'input[type=text]',
        password: 'input[type=password]',


        textarea: 'textarea',

    },

    buttons: {
        loginBtn      : 'div.v-btn__content',
        logoutDropList: '#app > div > aside > div.layout.column.fill-height > div:nth-child(3)',
        logoutBtn     : '#app > div > aside > div.layout.column.fill-height > div:nth-child(3) > div > div.v-list__group__items.v-list__group__items--no-action',

        conversationsAddBtn         : 'button.v-btn.v-btn--icon.v-btn--small.theme--light.primary',
        conversationsContactsBtn    : '#app > div.v-dialog__content.v-dialog__content--active > div > div > div > div > div:nth-child(2) > div:nth-child(1) > a',
        conversationsContacts2Btn   : '#app > div.v-dialog__content.v-dialog__content--active > div > div > div > div > div:nth-child(2) > div:nth-child(3) > a',
        conversationsContacts3Btn   : '#app > div.v-dialog__content.v-dialog__content--active > div > div > div > div > div:nth-child(2) > div:nth-child(5) > a',
        conversationsSendContactsBtn: '#app > div.application--wrap > main > div > div > div.layout.row.fill-height > div.flex.white.xs11 > div > div > div > div:nth-child(1) > div > div > div.pl-3.pr-3.pt-2.pb-1.v-card.v-sheet.theme--light > div > div:nth-child(1) > button:nth-child(3)',


        sendMessageBtn: 'i.v-icon.justify-end.ml-3.v-icon--link.material-icons.theme--light.info--text',


        conversationsLocationBtn    : 'div > div > div.pl-3.pr-3.pt-2.pb-1.v-card.v-sheet.theme--light > div > div:nth-child(1) > button:nth-child(5)',
        conversationsLocationSendBtn: '#app > div.v-dialog__content.v-dialog__content--active > div > div > nav > div > button.v-btn.v-btn--depressed.v-btn--round.theme--dark.info'
    },

    elementError: {
        authLoginError: '#app > div > div > div.v-snack.v-snack--active.v-snack--right.v-snack--top',
    },


    listGroup: {
        conversationsPage: '#app > div > aside > div.layout.column.fill-height > div:nth-child(1) > div:nth-child(4)',

    },

    actionMessages: {
        list: 'div.pl-2.pr-2.pt-1.pb-1.v-card.v-card--flat.v-sheet.theme--light.primary.white--text.rounded-card-right-end',
        replyMessage: '#app > div.v-menu__content.theme--light.menuable__content__active > div > div:nth-child(1)'
    }



};
