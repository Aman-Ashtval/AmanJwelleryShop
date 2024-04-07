let productListEl = document.getElementById('targetList');

const productArray = [
    {
        name: "Neacklace",
        price: 200,
        imageUrl: "https://res.cloudinary.com/dh4dcboea/image/upload/v1711789540/Jewellery_Project/p1_lpzbzk.png"
    },
    {
        name: "Neacklace",
        price: 300,
        imageUrl: "https://res.cloudinary.com/dh4dcboea/image/upload/v1711789542/Jewellery_Project/p2_qt5gym.png"
    },
    {
        name: "Neacklace",
        price: 110,
        imageUrl: "https://res.cloudinary.com/dh4dcboea/image/upload/v1711789545/Jewellery_Project/p3_j0ygmk.png"
    },
    {
        name: "Ring",
        price: 40,
        imageUrl: "https://res.cloudinary.com/dh4dcboea/image/upload/v1711789546/Jewellery_Project/p4_f8ae74.png"
    },
    {
        name: "Ring",
        price: 95,
        imageUrl: "https://res.cloudinary.com/dh4dcboea/image/upload/v1711789549/Jewellery_Project/p5_rsbyar.png"
    },
    {
        name: "Earing",
        price: 70,
        imageUrl: "https://res.cloudinary.com/dh4dcboea/image/upload/v1711789551/Jewellery_Project/p6_o3uep1.png"
    },
    {
        name: "Earing",
        price: 400,
        imageUrl: "https://res.cloudinary.com/dh4dcboea/image/upload/v1711789554/Jewellery_Project/p7_zih6ar.png"
    },
    {
        name: "Neacklace",
        price: 450,
        imageUrl: "https://res.cloudinary.com/dh4dcboea/image/upload/v1711789556/Jewellery_Project/p8_kkhlkp.png"
    }
]

for(let i=0; i<productArray.length; i++){
    let eachItem = productArray[i];
    const {name, price, imageUrl} = eachItem;

    let productItem = document.createElement('li');
    productItem.classList.add("product-list-item", "col-12", "col-sm-6", "col-md-4", "col-lg-3");

    // creating div element thats hold the actual itemData
    let ItemCard = document.createElement("div");
    ItemCard.classList.add("latest-product-card", "d-flex", "flex-column", "justify-content-between");
    productItem.appendChild(ItemCard);

    //paragraph item for card
    let paragraphEL = document.createElement("p");
    paragraphEL.textContent = "New";
    paragraphEL.classList.add("latest-product-card-tag", "d-flex", "flex-column", "justify-content-center");
    ItemCard.appendChild(paragraphEL);

    //product card image
    let imageEl = document.createElement("img");
    imageEl.src = imageUrl;
    imageEl.alt = "latest product"
    imageEl.classList.add("latest-product-card-image", "align-self-center");
    ItemCard.appendChild(imageEl);

    //latest product card bottom container
    let bottomContainer = document.createElement("div");
    bottomContainer.classList.add("d-flex", "flex-row", "justify-content-between");
    ItemCard.appendChild(bottomContainer);

    //create product name heading
    let headingEl = document.createElement("p");
    headingEl.textContent = name;
    headingEl.classList.add("latest-product-card-name");
    bottomContainer.appendChild(headingEl);

    //create rate paragraph element for product
    let productPrice = document.createElement("p");
    productPrice.textContent = "Price";
    productPrice.classList.add("latest-product-card-name");
    bottomContainer.appendChild(productPrice);

    //create price spane element
    let spane = document.createElement('spane');
    spane.textContent = "$" + price;
    spane.classList.add("price-spane");
    productPrice.appendChild(spane);
    
    
    productListEl.appendChild(productItem);
}


// ----------------------------------------------animated card slider---------------------------------

let container = document.getElementById("slider");
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");

container.removeChild(card1);

let count = 0;
const id = setInterval(() => {
    if(count%2 === 0){
        container.appendChild(card1);
        container.removeChild(card2);
    }else{
        container.removeChild(card1);
        container.appendChild(card2);
    }
    count++;
}, 5000);


// menu open and close logic
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");
let menuSection = document.getElementById("menuSection");
let stickySection = document.getElementById("stickySection");

menuSection.classList.toggle("d-none");

openBtn.addEventListener("click", () => {
    menuSection.classList.toggle("d-none");
    openBtn.classList.toggle("d-none");
})

closeBtn.addEventListener("click", () => {
    menuSection.classList.toggle("d-none");
    openBtn.classList.toggle("d-none");
})

let linkItems = document.getElementsByClassName("menu-section-link");

for (var i = 0; i < linkItems.length; i++){
    linkItems[i].addEventListener("click", ()=>{
        menuSection.classList.toggle("d-none");
        openBtn.classList.toggle("d-none");
    })
}

  
