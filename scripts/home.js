const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    const button = card.children[1].children[3];

    button.addEventListener("click", () => {
        addToCart(card);
    })
});
let cartItems = [];

function addToCart(card){

    const increase = document.getElementById("increase");
    const decrease = document.getElementById("decrease");
    const quanityDisplay = document.getElementById("quanityDisplay");

    let quanity = 0;
    console.log(card)
    const cardContent = {
        image : card.children[0],
        info : card.children[1]
    }


   const name = cardContent.info.children[0].innerText;
    const price = cardContent.info.children[2].children[2].children[0].innerText;

    const buttonContainer = cardContent.info.children[3];
    const button = cardContent.info.children[3].children[0];
    button.style.display = 'none';

    increase.remove
    
    console.log(cardContent.info.children[3].children);
   console.log(price);
}