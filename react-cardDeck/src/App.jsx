import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [deckId, setDeckId] = useState(null);
  const [cards, setCards] = useState([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [error, setError] = useState("");

  // Fetch a new deck on initial load
  useEffect(() => {
    const fetchDeck = async () => {
      try {
        const res = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/");
        const data = await res.json();
        setDeckId(data.deck_id);
      } catch (err) {
        console.error("Error fetching deck:", err);
        setError("Failed to load deck. Please try again.");
      }
    };
    fetchDeck();
  }, []);

  // Draw a card
  const drawCard = async () => {
    if (!deckId) return;
    try {
      const res = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
      const data = await res.json();
      if (data.success && data.cards.length > 0) {
        setCards((prevCards) => [...prevCards, ...data.cards]);
      } else {
        alert("Error: no cards remaining!");
      }
    } catch (err) {
      console.error("Error drawing card:", err);
      setError("Failed to draw card. Please try again.");
    }
  };

  // Shuffle the deck
  const shuffleDeck = async () => {
    if (!deckId) return;
    setIsShuffling(true);
    setError("");
    try {
      await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
      setCards([]);
    } catch (err) {
      console.error("Error shuffling deck:", err);
      setError("Failed to shuffle. Please try again.");
    } finally {
      setIsShuffling(false);
    }
  };

  return (
    <div className="App">
      <h1>Card Draw App</h1>
      {error && <p className="error">{error}</p>}
      <div className="controls">
        <button onClick={drawCard} disabled={isShuffling}>
          Draw Card
        </button>
        <button onClick={shuffleDeck} disabled={isShuffling}>
          {isShuffling ? "Shuffling..." : "Shuffle Deck"}
        </button>
      </div>
      <div className="cards">
        {cards.map((card, index) => (
          <img key={index} src={card.image} alt={`${card.value} of ${card.suit}`} />
        ))}
      </div>
    </div>
  );
};

export default App;
