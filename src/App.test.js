import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import { App } from './App';
import timeSpentData from './api/time.json';

test('App rendered without crashes', () => {
  render(<App />);

  const linkElement = screen.queryByTestId('app');

  expect(linkElement).toBeInTheDocument();
});

test('TimeChart was created', () => {
  render(<App />);

  const randomBtn = screen.getByText(/time/i);

  expect(randomBtn).toBeInTheDocument();
});

test('Random Button was created', () => {
  render(<App />);

  const randomBtn = screen.queryByTestId('random-btn');

  expect(randomBtn).toBeInTheDocument();
});
