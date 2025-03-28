import React, { useState } from "react";
import MadlibForm from "./MadlibForm";
import MadlibStory from "./MadlibStory";

function Madlib() {
  const [story, setStory] = useState(null);

  // Handler for submitting the form
  const handleFormSubmit = (data) => {
    setStory(data);
  };

  // Handler for restarting the game
  const restart = () => {
    setStory(null);
  };

  return (
    <div className="madlib-container">
      <h1>Madlibs Game</h1>
      {!story ? (
        <MadlibForm onSubmit={handleFormSubmit} />
      ) : (
        <MadlibStory story={story} restart={restart} />
      )}
    </div>
  );
}

export default Madlib;
