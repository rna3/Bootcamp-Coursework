import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Nav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import whiskey from "./pictures/whiskey.jpg";
import duke from "./pictures/duke.jpg";
import perry from "./pictures/perry.jpg";


function App() {
  const dogs = [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    }
  ];

  return (
    <>
      <Nav dogs={dogs.map((dog) => dog.name)} />
      <Routes>
        <Route path="/dogs" element={<DogList dogs={dogs} />} />
        <Route
          path="/dogs/:name"
          element={<DogDetails dogs={dogs} />}
        />
        <Route path="*" element={<Navigate to="/dogs" replace />} />
      </Routes>
    </>
  );
}

export default App;
