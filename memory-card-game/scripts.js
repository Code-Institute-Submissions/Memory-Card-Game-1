const cards = document.querySelectorAll(".memory-card");

function flipCard() {
    console.log("I was Clicked!")
    console.log(this);
}

cards.forEach(card => card.addEventListener("click", flipCard))