const cards = document.querySelectorAll(".memory-card");

function flipCard() {
    console.log("I was CLicked!")
    console.log(this);
}

cards.forEach(card => card.addEventListener("click", flipCard))