import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({ width: "", height: "", color: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBox = { ...formData, id: uuid() };
    addBox(newBox);
    setFormData({ width: "", height: "", color: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width: </label>
      <input
        id="width"
        name="width"
        type="number"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">Height: </label>
      <input
        id="height"
        name="height"
        type="number"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="color">Color: </label>
      <input
        id="color"
        name="color"
        type="text"
        value={formData.color}
        onChange={handleChange}
      />
      <button>Add Box</button>
    </form>
  );
}

export default NewBoxForm;
