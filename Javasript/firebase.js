var app_fireBase = {};
(function () {
// Initialize Firebase
    let config = {
        apiKey: "AIzaSyDPGoimflpwdDgW4wAZ72i9Df9427YsVSk",
        authDomain: "cliw-9cac1.firebaseapp.com",
        databaseURL: "https://cliw-9cac1.firebaseio.com",
        projectId: "cliw-9cac1",
        storageBucket: "cliw-9cac1.appspot.com",
        messagingSenderId: "262436664884"
    };
    firebase.initializeApp(config);

    app_fireBase = firebase;

})();
