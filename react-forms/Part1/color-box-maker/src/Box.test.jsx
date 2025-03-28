import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

test("renders Box without crashing", () => {
    render(<Box width={100} height={100} color="blue" />);
  });

test("matches snapshot for Box", () => {
  const { asFragment } = render(<Box width={100} height={100} color="blue" />);
  expect(asFragment()).toMatchSnapshot();
});
