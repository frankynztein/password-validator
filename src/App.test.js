import { render, screen } from '@testing-library/react';
import App from './App';

test('must have the title Validador de contraseña', () => {
  render(<App />);
  const title = screen.queryByText('Validador de contraseña');
  expect(title).toBeVisible();
});
