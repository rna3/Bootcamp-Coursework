let baseURL = 'https://deckofcardsapi.com/api/deck';

// 1. Draw one card from a new deck
async function drawOneCard() {
  try {
    const response = await fetch(`${baseURL}/new/draw/?count=1`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// 2. Draw two cards sequentially from a new deck
async function drawTwoCards() {
  try {
    const firstResponse = await fetch(`${baseURL}/new/draw/?count=1`);
    if (!firstResponse.ok) {
      throw new Error(`HTTP error! Status: ${firstResponse.status}`);
    }
    const firstData = await firstResponse.json();
    const firstCard = firstData.cards[0];
    const deckID = firstData.deck_id;

    const secondResponse = await fetch(`${baseURL}/${deckID}/draw/?count=1`);
    if (!secondResponse.ok) {
      throw new Error(`HTTP error! Status: ${secondResponse.status}`);
    }
    const secondData = await secondResponse.json();
    const secondCard = secondData.cards[0];

    [firstCard, secondCard].forEach(card => {
      console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`);
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// 3. Initialize a deck and handle drawing cards
let deckId = null;

async function initializeDeck() {
  try {
    const response = await fetch(`${baseURL}/new/shuffle/`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    deckId = data.deck_id;
  } catch (error) {
    console.error("Error creating the new deck:", error);
  }
}

async function drawCard() {
  try {
    if (!deckId) {
      return console.error("Deck not created");
    }

    const response = await fetch(`${baseURL}/${deckId}/draw/`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    if (data.remaining === 0) {
      alert("No more cards in the deck");
      document.getElementById("draw-card-btn").disabled = true;
      return;
    }

    const card = data.cards[0];
    const cardImage = document.createElement("img");
    cardImage.src = card.image;
    cardImage.alt = `${card.value} of ${card.suit}`;
    document.getElementById("card-container").appendChild(cardImage);
  } catch (error) {
    console.error("Error drawing card:", error);
  }
}

// Event listeners
function setupEventListeners() {
  document.getElementById("draw-card-btn").addEventListener("click", drawCard);
}

// Initialize the app
async function initializeApp() {
  await initializeDeck();
  setupEventListeners();
}

// Run the app when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeApp);