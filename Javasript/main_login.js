var mainApp = {};

(function () {

    let uid = null;
    let firebase = app_fireBase;



    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            uid = user.uid;
            // Get user email
            email = user.email;

            document.getElementById("dropdown-hidden").style.display = "inline-block";
            document.getElementById("login-icon").style.display = "none";
            document.getElementById("dropdown-text-1").innerHTML = "You are currently logged in with: "+ email;

        } else {
            // User is signed out....
            uid = null;
            document.getElementById("dropdown-hidden").style.display = "none";
            document.getElementById("login-icon").style.display = "inline-block";

        }
    });

    function logOut() {
        location.reload();
        firebase.auth().signOut();
    }

    mainApp.logOut = logOut;

})();