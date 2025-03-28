import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find((d) => d.name.toLowerCase() === name.toLowerCase());

  if (!dog) return <Navigate to="/dogs" replace />;

  return (
    <div>
      <h2>{dog.name}</h2>
      <img src={dog.src} alt={dog.name} />
      <h3>Age: {dog.age}</h3>
      <ul>
        {dog.facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
      <Link to="/dogs">Go Back</Link>
    </div>
  );
}

export default DogDetails;
