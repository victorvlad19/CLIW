/* Open the sidenav */
function openNavMobile() {
    const x = window.matchMedia("(max-width: 1024px)");

    if (x.matches) {
        document.getElementById("mobileMenu").style.display = "block";
        document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
}

function closeNavMobile() {
    document.getElementById("mobileMenu").style.display = "none";
    document.body.style.backgroundColor = "#FAFAFA";
}

// Close side-nav if open in Deskop mode
var mql = window.matchMedia('(max-width: 1024px)');
function screenTest(e) {
    if (!e.matches) {closeNavMobile()}
}
mql.addListener(screenTest);

