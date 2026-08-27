import { render, screen, fireEvent } from '@testing-library/react';
import { test, expect } from 'vitest';
import App from '../App';

test('renders Get Started text', () => {
  render(<App />);

  const headerElement = screen.getByText(/Get started/i);

  expect(headerElement).toBeInTheDocument();
});

test('increments count on button click', () => {
  render(<App />);

  const buttonElement = screen.getByRole('button', {
    name: /count is 0/i
  });

  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);

  expect(buttonElement).toHaveTextContent(/count is 1/i);

  fireEvent.click(buttonElement);

  expect(buttonElement).toHaveTextContent(/count is 2/i);
});