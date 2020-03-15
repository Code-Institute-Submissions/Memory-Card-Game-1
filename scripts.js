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

       } else {

        // its not a match! set a timer to be able to see both cards flipping

        setTimeout(() => {
        firstCard.classList.remove("flip");
        SecondCard.classList.remove("flip");
    }, 1500);
  }  
}
cards.forEach(card => card.addEventListener("click", flipCard))
;