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
    document.getElementById("clearBtn").style.display = "none";
    document.getElementById("searchIcon").style.color="#000";
}

function clearButton() {
    document.getElementById("searchBarInput").value = "";
    document.getElementById("dropdown-content-search").style.display="none";
    document.getElementById("clearBtn").style.display = "none";
}

function closeSearch() {
    document.getElementById("fade-search").style.display = "none";
    document.getElementById("clearBtn").style.display = "none";
    document.getElementById("searchIcon").style.color="#A1A1A1";
    document.getElementById("dropdown-content-search").style.display="none";
    document.getElementById("searchBarInput").value = "";
}

function openConfigurator() {
    document.getElementById("fade-configurator").style.display = "block";
    document.getElementById("confPopup").style.display = "block";
    openH1();
    disableScroll()
}

function closeConfigurator() {
    document.getElementById("fade-configurator").style.display = "none";
    document.getElementById("confPopup").style.display = "none";
    enableScroll()
}

function closeH1() {
    document.getElementById("confH1").style.display = "none";
    document.getElementById("confH2").style.visibility = "visible";
}

function findConf() {

    const list_of_hats = [];
    const ul = document.getElementById("config_list");

    const color = document.getElementById("sColor");
    const season = document.getElementById("sSeason");
    const gender = document.getElementById("sGender");
    const color_text = color.options[color.selectedIndex].text;
    const season_text = season.options[season.selectedIndex].text;
    const gender_text = gender.options[gender.selectedIndex].text;

    ul.innerHTML = '';

    // Check every element from database
    ref.on("value", function(snapshot) {
        snapshot.forEach(function(item) {
            const itemVal = item.val();
            if (itemVal["Color"] === color_text){
                if (itemVal["Season"] === season_text) {
                    if (itemVal["Gender"] === gender_text) {
                        list_of_hats.push(itemVal["Name"]);
                    }
                }
            }
        });
    }, function (error) {
        console.log("Error: " + error.code);
    });

    if (list_of_hats.length === 0) {
        document.getElementById("confTitle").innerHTML = "Sorry ! Nothing found, try again.";
    } else {
        document.getElementById("confTitle").innerHTML = "We find you this headwear !";
        for (const hat in list_of_hats){
            const li = document.createElement("li");
            li.appendChild(document.createTextNode( capFirstLetter(list_of_hats[hat])));
            li.onclick = e => {
                window.location.href = "#detail";
                sText = e.target.innerHTML;
                // Query Database
                let q = sText.replace(/\s+/g, '_');
                showPage(q);
                closeConfigurator();
                // closeSearch();
            };
            ul.appendChild(li);
        }
    }

    console.log(list_of_hats);
    closeH1();
}

function openH1() {
    document.getElementById("confH1").style.display = "block";
    document.getElementById("confH2").style.visibility = "hidden";
}

function goHome() {
    window.location.href = "#home";
}

function disableScroll(){
    const x=window.scrollX;
    const y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScroll(){
    window.onscroll=function(){};
}


// Close side-nav if open in Deskop mode
var mql = window.matchMedia('(max-width: 1024px)');
function screenTest(e) {
    if (!e.matches) {closeNavMobile()}
}
mql.addListener(screenTest);

// CART
let count = 0;
// Add items to cart
function addtoCart() {
    // Get Product Name & Price
    let pName = document.getElementById("product-title-name").textContent;
    let pPrice =  document.getElementById("product-price").textContent;
    let pImage = document.getElementById("image-src").src;
    // Dincamicaly create li structure
    let ul = document.getElementById("shopping-cart-items");

    const li = document.createElement('li');
    li.className = "clearfix";

    let img = document.createElement("img");
    img.src = pImage;
    img.height = 70;
    img.width = 90;
    li.appendChild(img);

    const item_content = document.createElement('div');
    item_content.className="shop-item-content";

    const item_name = document.createElement('span');
    item_name.className = "item-name";
    let text_item_name = document.createTextNode(pName);
    item_name.appendChild(text_item_name);
    item_content.appendChild(item_name);

    const item_price = document.createElement('span');
    item_price.className = "item-price";
    let text_item_price = document.createTextNode(pPrice);
    item_price.appendChild(text_item_price);
    item_content.appendChild(item_price);

    const item_remove = document.createElement('a');
    item_remove.onclick = e => {
        e.target.parentNode.parentNode.remove();
        count--;
        updateCount(count);
    };

    item_remove.className = "item-quantity";
    let text_item_remove = document.createTextNode("⊗ Remove");
    item_remove.appendChild(text_item_remove);
    item_content.appendChild(item_remove);

    li.appendChild(item_content);
    ul.appendChild(li);

    count++;
    updateCount(count);

    window.alert("Item added to basket !");
}

function updateCount(count) {
    if (count >= 1) {
        let s1 = "You have ";
        let s2 = s1.concat(count);
        let s3 = s2.concat(" items in your basket");
        document.getElementById("dropdown-text").textContent=s3;
        document.getElementById("cart-footer").style.backgroundColor= "#f8f8f8";
    } else {
        document.getElementById("dropdown-text").textContent="You have no items in your basket";
        document.getElementById("cart-footer").style.backgroundColor= "#ffffff";
    }

}


// <p class="dropdown-text">You have no items in your basket</p>

//
// <li class="clearfix">
//     <img src="Images/1.png" height="70" width="90"  alt="item1" />
//     <div class="shop-item-content">
//          <span class="item-name">HAT 1</span>
//          <span class="item-price">120 Ron</span>
//          <a href="" class="item-quantity">Remove</a>
//     </div>
// </li>