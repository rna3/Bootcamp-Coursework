import React from 'react';
import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test("renders NewTodoForm without crashing", () => {
  render(<NewTodoForm addTodo={() => {}} />);
});

test("matches snapshot for NewTodoForm", () => {
    const { asFragment } = render(<NewTodoForm addTodo={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });