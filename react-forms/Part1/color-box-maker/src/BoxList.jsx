import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => setBoxes((prev) => [...prev, newBox]);

  const removeBox = (id) =>
    setBoxes((prev) => prev.filter((box) => box.id !== id));

  return (
    <div>
      <h1>Color Box Maker</h1>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map(({ id, width, height, color }) => (
          <Box
            key={id}
            id={id}
            width={width}
            height={height}
            color={color}
            removeBox={removeBox}
          />
        ))}
      </div>
    </div>
  );
}

export default BoxList;