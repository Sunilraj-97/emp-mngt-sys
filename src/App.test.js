import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Employee component', () => {
  render(<App />);

  const headingElement = screen.getByText(/Employee CRUD/i);

  expect(headingElement).toBeInTheDocument();
});