import React from "react";

function MadlibStory({ story, restart }) {
  return (
    <div className="madlib-story">
      <h2>Your Madlib Story:</h2>
      <p>
        Once upon a time, there was a {story.adjective} {story.noun} who loved to
        {` ${story.verb}`} at the {story.place}.
      </p>
      <button onClick={restart}>Restart</button>
    </div>
  );
}

export default MadlibStory;
