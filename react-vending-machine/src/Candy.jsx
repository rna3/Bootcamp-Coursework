import React from "react";
import { Link } from "react-router-dom";

function Candy() {
  return (
    <div>
      <h2>Candy</h2>
      <p>Sweet and delicious candy!</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Candy;
