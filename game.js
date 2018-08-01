const cardsColors = ["red", "red", "green", "green", "blue", "blue", "brown", "brown", "yellow", "yellow", "gray", "gray", "cadetblue", "cadetblue", "violet", "violet", "lightgreen", "lightgreen"];

let cards = document.querySelectorAll("div");
cards = [...cards]; 


const init = function(){

    cards.forEach(function(card){

        const position = Math.floor(Math.random() * 
        cardsColors.length);
        card.classList.add(cardsColors[position])

    })
}
init();
