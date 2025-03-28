import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';

test("renders Todo without crashing", () => {
  render(<Todo id={1} task="Test Todo" removeTodo={() => {}} />);
});

test("matches snapshot for Todo", () => {
    const { asFragment } = render(<Todo id={1} task="Test Todo" removeTodo={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });