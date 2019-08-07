exports.config = {
    tests    : './tests/*_test.js',
    output   : './output',
    helpers  : {
        WebDriver: {
            url        : 'https://text-to-business-development.firebaseapp.com',
            driver     : 'local',
            browser    : 'chrome',
            desiredCapabilities: {
                chromeOptions: {
                    args: ["--headless", "--disable-gpu", "--window-size=1920,1080"]
                }
            },
            restart    : false,
            windowSize : '1920 x 1080',
            smartWait  : 4000,
            port       : 4444,
            rootElement: 'body',
            show       : true
        }
    },
    include  : {
        I                : './steps_file.js',
        loginPage        : './pages/login.js',
        businessPage     : './pages/businessPage.js',
        contactsPage     : './pages/contacts.js',
        conversationsPage: './pages/conversations.js',
        profilePage      : './pages/profile.js',
        helper           : './pages/_helper.js',
        elementsPage     : './pages/elements.js',
    },
    multiple : {
        basic   : {
            browsers: [
                'chrome',
                'firefox',
                'edge'
            ]
        },
        parallel: {
            chunks  : 2,
            browsers: [
                'chrome',
                'firefox'
            ]
        }
    },
    bootstrap: null,
    mocha    : {},
    timeout  : 1000,
    name     : 't2b'
};