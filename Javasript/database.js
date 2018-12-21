// Initialize Firebase
var config = {
    apiKey: "AIzaSyDPGoimflpwdDgW4wAZ72i9Df9427YsVSk",
    authDomain: "cliw-9cac1.firebaseapp.com",
    databaseURL: "https://cliw-9cac1.firebaseio.com",
    projectId: "cliw-9cac1",
    storageBucket: "cliw-9cac1.appspot.com",
    messagingSenderId: "262436664884"
};
firebase.initializeApp(config);

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

function showProduct() {



    // console.log(item);
    // let x = document.getElementsByClassName("example");

    // let query = firebase.database().ref('Hat_1');
    // query.on('value', function(snapshot) {
    //     console.log(snapshot.val()["Name"]);
    // });

    // window.alert("Succes!");
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