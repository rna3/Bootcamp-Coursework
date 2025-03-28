import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Soda from "./Soda";
import Candy from "./Candy";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Vending Machine</h1>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/candy" element={<Candy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
