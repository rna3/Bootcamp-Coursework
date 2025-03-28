import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ dogs }) {
  return (
    <nav>
      <ul>
        {dogs.map((dog) => (
          <li key={dog}>
            <NavLink to={`/dogs/${dog.toLowerCase()}`}>{dog}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
