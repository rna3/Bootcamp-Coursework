import React from "react";
import Pokecard from "./Pokecard";
import './Pokedex.css';

function Pokedex ({pokemon}) {
    return (
        <div className="pokedex">
      {pokemon.map((p) => (
        <Pokecard
          key={p.id}
          id={p.id}
          pname={p.pname}
          type={p.type}
          experience={p.base_experience}
        />
      ))}
    </div>
    )
}

// Default Props
Pokedex.defaultProps = {
    pokemon: [
      { id: 4, pname: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, pname: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, pname: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 12, pname: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 25, pname: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 39, pname: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 94, pname: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, pname: 'Eevee', type: 'normal', base_experience: 65 },
    ],
  };

export default Pokedex;