import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";

function ColorDetails({ colors }) {
  const { color } = useParams();
  const hex = colors[color];

  if (!hex) return <Navigate to="/colors" replace />;

  return (
    <div style={{ backgroundColor: hex, height: "100vh", color: "#fff" }}>
      <h1>This is {color}!</h1>
      <p>Isn't it beautiful?</p>
      <Link to="/colors">Go Back</Link>
    </div>
  );
}

export default ColorDetails;
