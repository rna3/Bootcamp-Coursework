let baseURL = 'https://deckofcardsapi.com/api/deck';

//1.
fetch(`${baseURL}/new/draw/?count=1`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse response as JSON
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

//2.
let firstCard = null

fetch(`${baseURL}/new/draw/?count=1`)
    .then(res => {
        if(!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        firstCard = data.cards[0];
        let deckID = data.deck_id;
        return fetch(`${baseURL}/${deckID}/draw/?count=1`);
    })
    .then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then(data => {
        const secondCard = data.cards[0];
    
        [firstCard, secondCard].forEach(card => {
          console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`);
        });
      })
      .catch(err => {
        console.error("An error occurred:", err);
      });

//3.
let deckId = null;

function initializeDeck() {
    fetch(`${baseURL}/new/shuffle/`)
    .then(response => response.json())
    .then(data => {
        deckId = data.deck_id;
    })
    .catch(err => console.error("Error creating the new deck:", err));
}

//handle drawing a card
function drawCard() {
    if(!deckId) return console.error("Deck not created");

    fetch(`${baseURL}/${deckId}/draw/`)
    .then(response => response.json())
    .then(data => {
        if(data.remaining === 0) {
            alert("No more cards in the deck");
            document.getElementById("draw-card-btn").disabled = true;
            return;
        }
        const card = data.cards[0];
        const cardImage = document.createElement("img");
        cardImage.src = card.image;
        cardImage.alt = `${card.value} of ${card.suit}`;
        document.getElementById("card-container").appendChild(cardImage);
    })
    .catch(err => console.error("error drawing card:", err));
}

//event listners
function setupEventListeners() {
    document.getElementById("draw-card-btn").addEventListener("click", drawCard);
  }


  // Initialize the app
function initializeApp() {
    initializeDeck();
    setupEventListeners();
  }

// Run the app when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeApp);