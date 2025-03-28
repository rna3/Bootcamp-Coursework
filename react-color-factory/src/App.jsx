import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";
import ColorDetails from "./ColorDetails";

function App() {
  const [colors, setColors] = useState({ red: "#FF0000", blue: "#0000FF", green: "#008000" });

  const addColor = (name, hex) => {
    setColors((prevColors) => ({ ...prevColors, [name]: hex }));
  };

  return (
    
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route path="/colors/new" element={<AddColorForm addColor={addColor} />} />
        <Route path="/colors/:color" element={<ColorDetails colors={colors} />} />
        <Route path="*" element={<Navigate to="/colors" replace />} />
      </Routes>
    
  );
}

export default App;
