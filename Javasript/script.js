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

// CART
let count = 0;
// Add items to cart
function addtoCart() {
    // Get Product Name & Price
    let pName = document.getElementById("product-title-name").textContent;
    let pPrice =  document.getElementById("product-price").textContent;
    // Dincamicaly create li structure
    let ul = document.getElementById("shopping-cart-items");

    const li = document.createElement('li');
    li.className = "clearfix";

    let img = document.createElement("img");
    img.src = "Images/1.png";
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
    item_remove.href="";
    item_remove.className = "item-quantity";
    let text_item_remove = document.createTextNode("Remove");
    item_remove.appendChild(text_item_remove);
    item_content.appendChild(item_remove);

    li.appendChild(item_content);

    ul.appendChild(li);

    count++;

    if (count >= 1) {
        let s1 = "You have ";
        let s2 = s1.concat(count);
        let s3 = s2.concat(" items in your basket");
        document.getElementById("dropdown-text").textContent=s3;
    } else {
        document.getElementById("dropdown-text").textContent="You have no items in your basket";
    }

    window.alert("Item added to basket !");
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