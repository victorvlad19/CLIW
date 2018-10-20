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

function Search() {
    document.getElementById("fade-search").style.display = "block";
    document.getElementById("clearBtn").style.display = "block";
    document.getElementById("searchIcon").style.color="#000"
}

function closeSearch() {
    document.getElementById("fade-search").style.display = "none";
    document.getElementById("clearBtn").style.display = "none";
    document.getElementById("searchIcon").style.color="#A1A1A1"
}

// Close side-nav if open in Deskop mode
var mql = window.matchMedia('(max-width: 1024px)');
function screenTest(e) {
    if (!e.matches) {closeNavMobile()}
}
mql.addListener(screenTest);

