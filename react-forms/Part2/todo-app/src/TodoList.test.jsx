import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';

test("renders TodoList without crashing", () => {
  render(<TodoList />);
});

test("matches snapshot for TodoList", () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
  });