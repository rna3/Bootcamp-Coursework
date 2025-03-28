import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test("renders App without crashing", () => {
  render(<App />);
});

test("matches snapshot for App", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });