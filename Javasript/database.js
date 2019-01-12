// Initialize Firebase
let firebase = app_fireBase;
const ref = firebase.database().ref();
let counter = 0;

ref.on("value", function(snapshot) {

    snapshot.forEach(function(item) {
        const itemVal = item.val();
        // Increment Counter
        counter++;
        // Create Card Div Element
        const card = document.createElement('div');
        card.className = "card nav-link";

        // Create Image Element
        let img=document.createElement("img");
        let str1 = "Images/";
        let str2 = counter.toString();
        let str3 = ".png"
        img.src=str1.concat(str2,str3);
        card.appendChild(img);
        // Create Title Element
        const card_text_holder = document.createElement('div');
        card_text_holder.className = "card-text-holder";

        // Insert H2 TItle
        const h2 = document.createElement("H2");
        var t_h2 = document.createTextNode(itemVal["Name"].toUpperCase());
        h2.appendChild(t_h2);

        // Insert Paragraph
        const p = document.createElement("P");
        let t_p = document.createTextNode(itemVal["Description"]);
        p.appendChild(t_p);


        card_text_holder.appendChild(h2);
        card_text_holder.appendChild(p);
        card.appendChild(card_text_holder);

        // Create Card Footer Div
        const card_footer = document.createElement('div');
        card_footer.className = "card-footer";

        const hr = document.createElement("HR");
        card_footer.appendChild(hr);

        const a = document.createElement("A");
        a.className = "nav-link details";
        a.dataset.target="detail";

        let text = document.createTextNode("SEE MORE");
        a.appendChild(text);
        a.onclick = app.nav;

        card_footer.appendChild(a);

        card.appendChild(card_footer);

        // Append Final Div To Cards
        document.getElementById("main-grid").appendChild(card);



        // TODO: Add Here Html Code
        // console.log(itemVal["Name"]);
    });

    onProductCliked();

}, function (error) {
    console.log("Error: " + error.code);
});


function onProductCliked() {
    let n = document.getElementsByClassName("nav-link details");
    for(let e = 0 ; e < n.length ; e++) {
        n[e].addEventListener('click', function() {
            // Dynamic change product image
            let img = "Images/";
            let img_semi = img.concat(e+1);
            let img_final = img_semi.concat(".png");
            document.getElementById("image-src").src=img_final;
            // Forge Query
            let str1 = "Hat_";
            let q = str1.concat(e+1);
            // Query Database
            let query = firebase.database().ref(q);
            query.on('value', function(snapshot) {
                // Put name from database
                document.getElementById("breadcrumb-name").textContent=snapshot.val()["Name"];
                // Put title from database
                document.getElementById("product-title-name").textContent=snapshot.val()["Name"].toUpperCase();
                // Put price from database
                document.getElementById("product-price").textContent=snapshot.val()["Value"];
            });

        });
    }
}


function onSideItemClicked() {
    window.onclick = e => {
        let hats = ["Hat 1", "Hat 2", "Hat 3", "Hat 4", "Hat 5", "Hat 6", "Hat 7", "Hat 8", "Hat 9"];
        arraycontainshats = (hats.indexOf(e.target.innerText) > -1);
        if (arraycontainshats) {

            // Query Database
            let q = e.target.innerText.replace(/\s+/g, '_');
            showPage(q)
        }
    }
}


function onSearch() {
    let hats = ["hat 1", "hat 2", "hat 3", "hat 4", "hat 5", "hat 6", "hat 7", "hat 8", "hat 9"];
    text = document.getElementById("searchBarInput").value;

    const ul = document.getElementById("search_list");

    if (text !== "") {
        document.getElementById("dropdown-content-search").style.display = "block";
        // Clear Button
        document.getElementById("clearBtn").style.display = "block";
        // Find Searched String
        const matches = hats.filter(s => s.includes(text));
        if (matches.length > 0){
            ul.innerHTML = '';
            for (const elem in matches) {
                const li = document.createElement("li");


                li.appendChild(document.createTextNode( capFirstLetter(matches[elem])));

                li.onclick = e => {
                    sText = e.target.innerHTML;
                    window.location.href = "#detail";

                    // Query Database
                    let q = sText.replace(/\s+/g, '_');
                    showPage(q)
                    closeSearch();
                };


                ul.appendChild(li);
            }
        }

    } else {
        ul.innerHTML = '';
        document.getElementById("dropdown-content-search").style.display = "none";
        // Clear Button
        document.getElementById("clearBtn").style.display = "none";
    }
}


function showPage(q) {
    let query = firebase.database().ref(q);
    query.on('value', function (snapshot) {
        // Put name from database
        document.getElementById("breadcrumb-name").textContent = snapshot.val()["Name"];
        // Put title from database
        document.getElementById("product-title-name").textContent = snapshot.val()["Name"].toUpperCase();
        // Put price from database
        document.getElementById("product-price").textContent = snapshot.val()["Value"];
    });
    // Dynamic change product image
    thenum = q.match(/\d+/)[0]
    let img = "Images/";
    let img_semi = img.concat(thenum);
    let img_final = img_semi.concat(".png");
    document.getElementById("image-src").src = img_final;
}

function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


//
// <div class="card">
//     <img src="Images/9.png"/>
//
//      <div class="card-text-holder">
//          <h2>HAT TITLE 9</h2>
//          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam accusamus, consectetur.</p>
//      </div>
//      <div class="card-footer">
//          <hr>
//          <a class="details" href="#">SEE MORE</a>
//      </div>
//
// </div>