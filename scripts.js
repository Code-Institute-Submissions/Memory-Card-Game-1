const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(){

    this.classList.toggle("flip");

    if (!hasFlippedCard) {

        // First click
        hasFlippedCard = true;
        firstCard = this;

    } else {

        // Second click
        hasFlippedCard = false;
        secondCard = this;
        
        // Do cards match?

        if (firstCard.dataset.image === secondCard.dataset.image) {
            // a match!
            firstCard.removeEventListener("click", flipCard);
            secondCard.removeEventListener("click", flipCard);
       }

       console.log("function has been executed.")
    }
}
cards.forEach(card => card.addEventListener("click", flipCard))
;