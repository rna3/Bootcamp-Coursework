import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddColorForm({ addColor }) {
  const [formData, setFormData] = useState({ name: "", hex: "#000000" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(formData.name, formData.hex);
    navigate("/colors");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Color Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="hex">Color Value:</label>
        <input
          type="color"
          id="hex"
          name="hex"
          value={formData.hex}
          onChange={handleChange}
          required
        />
      </div>
      <button>Add Color</button>
    </form>
  );
}

export default AddColorForm;
