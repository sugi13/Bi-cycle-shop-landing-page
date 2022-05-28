AOS.init();
/* inserting images */

let container = document.querySelector(".Arrival-wrapper");
let SaleContainer = document.querySelector(".sale-wrapper");

let images = [
    {
        "src": "images/01.jpg",
        "Name": "Mondraker F-Podium Carbon DC Mountain Bike",
        "link": "Buy now"
    },
    {
        "src": "images/02.jpg",
        "Name": "Surly Karate Monkey 27.5 Rigid Mountain Bike",
        "link": "Buy now"
    },
    {
        "src": "images/03.jpg",
        "Name": "Intense Primer 29 Pro Version",
        "link": "Buy now"
    },
    {
        "src": "images/04.jpg",
        "Name": "Batch Bicycles 24 Mountain Bike (Matte Ignite)",
        "link": "Buy now"

    },
];
function addImage(){
    images.forEach((img)=>{
        let newImage = document.createElement("img");
        let Name = document.createElement("h1");
        let wrapper = document.createElement("div");
        let button = document.createElement("p");
        Name.innerHTML = img.Name;
        button.innerHTML = img.link;
        newImage.src = img.src;
        wrapper.appendChild(newImage);
        wrapper.appendChild(Name);
        wrapper.appendChild(button);
        container.appendChild(wrapper);
    })
}
addImage();

// adding top sale images //
let newImages = [
    {
        "src": "images/09.jpg",
        "name":"Surly Bridge Club 27.5 Mountain Bike",
    },
    {
        "src": "images/10.jpg",
        "name":"Mondraker F-Podium Carbon DC Mountain Bike",
    },
    {
        "src": "images/11.jpg",
        "name": "GT 2022 La Bomba Rigid 26 DJ Bike"
    },
    {
        "src": "images/12.jpg",
        "name": "Niner Jet 9 RDO 2-Star Full Suspension"
    },

];

function addTopSaleImage(){
    newImages.forEach((img)=>{
        let saleImg = document.createElement("img");
        let container = document.createElement("div");
        let name = document.createElement("h1");
        container.appendChild(saleImg);
        container.appendChild(name);
        name.innerHTML = img.name;
        saleImg.src = img.src;
        SaleContainer.appendChild(container);
    })
}
addTopSaleImage();


// adding email-verification
let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let emailField = document.getElementById("Email");
let errorMsg = document.getElementById("error");

function isEmailValid(){
    let inputValue = emailField.value;
if(inputValue.match(emailFormat)){
    errorMsg.textContent = "valid Email!";
}
else {
    errorMsg.textContent = "Invalid Email!";
}
}


emailField.addEventListener("keypress", isEmailValid);
