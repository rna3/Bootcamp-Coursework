import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
  return (
    <div>
      <h1>Meet Our Dogs!</h1>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.name}>
            <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogList;
