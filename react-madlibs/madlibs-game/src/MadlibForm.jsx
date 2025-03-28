import React, { useState } from "react";

function MadlibForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    noun: "",
    verb: "",
    adjective: "",
    place: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({
      ...f,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="madlib-form" onSubmit={handleSubmit}>
      <label>
        Noun:
        <input
          type="text"
          name="noun"
          value={formData.noun}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Verb:
        <input
          type="text"
          name="verb"
          value={formData.verb}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Adjective:
        <input
          type="text"
          name="adjective"
          value={formData.adjective}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Place:
        <input
          type="text"
          name="place"
          value={formData.place}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Create Story</button>
    </form>
  );
}

export default MadlibForm;
