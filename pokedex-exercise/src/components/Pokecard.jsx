import React from "react";
import './Pokecard.css';

function Pokecard({ id, pname, type, experience }) {
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
    <div className="pokecard">
      <h3 className="pokemonName">{pname}</h3>
      <img src={imgSrc} alt={pname} />
      <p className="type">Type: {type}</p>
      <p className='base_experience'>EXP: {experience}</p>
    </div>
    )
}

export default Pokecard;