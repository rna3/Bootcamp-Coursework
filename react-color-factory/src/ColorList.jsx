import React from "react";
import { Link } from "react-router-dom";

function ColorList({ colors }) {
  return (
    <div>
      <h1>Welcome to the Color Factory!</h1>
      <Link to="/colors/new">Add a new color</Link>
      <h2>Available Colors:</h2>
      <ul>
        {Object.keys(colors).map((color) => (
          <li key={color}>
            <Link to={`/colors/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorList;
