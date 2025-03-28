import React, { useState } from 'react';

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default NewTodoForm;
