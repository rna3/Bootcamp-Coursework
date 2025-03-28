import React from "react";
import '@testing-library/jest-dom';
import { render, screen, fireEvent, within } from "@testing-library/react";
import BoxList from "./BoxList";

test("renders without crashing", () => {
  render(<BoxList />);
});

test("can add a new box", () => {
  render(<BoxList />);
  const colorInput = screen.getByLabelText(/color/i);
  const widthInput = screen.getByLabelText(/width/i);
  const heightInput = screen.getByLabelText(/height/i);
  const addButton = screen.getByText(/add box/i);

  // Fill out the form
  fireEvent.change(colorInput, { target: { value: "red" } });
  fireEvent.change(widthInput, { target: { value: "100" } });
  fireEvent.change(heightInput, { target: { value: "100" } });

  // Submit the form
  fireEvent.click(addButton);

  // Locate the container for the newly added box
  const boxContainer = screen.getByText("X").closest("div");

  // Ensure the new box and its "X" button are present
  expect(boxContainer).toBeInTheDocument();
  const deleteButton = within(boxContainer).getByText("X");
  expect(deleteButton).toBeInTheDocument();
});
