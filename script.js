/* Open the sidenav */
function openNavMobile() {
    const x = window.matchMedia("(max-width: 1024px)");

    if (x.matches) {
        document.getElementById("mobileMenu").style.display = "block";
        document.getElementById("fade").style.display = "block";
    }
}

function closeNavMobile() {
    document.getElementById("mobileMenu").style.display = "none";
    document.getElementById("fade").style.display = "none";
}

// Close side-nav if open in Deskop mode
var mql = window.matchMedia('(max-width: 1024px)');
function screenTest(e) {
    if (!e.matches) {closeNavMobile()}
}
mql.addListener(screenTest);

