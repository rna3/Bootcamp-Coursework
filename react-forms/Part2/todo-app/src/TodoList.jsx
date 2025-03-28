import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { id: uuid(), task }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      {todos.map(todo => (
        <Todo key={todo.id} id={todo.id} task={todo.task} removeTodo={removeTodo} />
      ))}
    </div>
  );
}

export default TodoList;
