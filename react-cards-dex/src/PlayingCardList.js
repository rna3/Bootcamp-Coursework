import React from "react";
import {useAxios} from "./hooks";
import PlayingCard from "./PlayingCard";
import { v1 as uuid } from "uuid";
import "./PlayingCardList.css";

/* Renders a list of playing cards.\n * Can also add a new card at random. */
function PlayingCardList() {
  const [cards, addCard] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");

  const handleAdd = async () => {
    await addCard("");
  };

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={handleAdd}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map((cardData) => (
          <PlayingCard
            key={uuid()}
            front={cardData.cards[0].image}
          />
        ))}
      </div>
    </div>
  );
}

export default PlayingCardList;
