import React from "react";

function Box({ id, width, height, color, removeBox }) {
  return (
    <div>
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: color,
        }}
      ></div>
      <button onClick={() => removeBox(id)}>X</button>
    </div>
  );
}

export default Box;
