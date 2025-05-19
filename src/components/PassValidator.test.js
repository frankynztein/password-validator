import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PassValidator } from './PassValidator';

test('it must have at least 8 characters', () => {
  render(<PassValidator />);
  const input = screen.getByLabelText('Ingrese su contraseña');
  const validateButton = screen.getByText('Validar');

  //Validar que ingresó 8 caracteres
  userEvent.type(input, '12345678');

  userEvent.click(validateButton);
  expect(screen.getByText('La contraseña tiene 8 caracteres')).toBeVisible();
})

test('show error if it does not have at least 8 characters', () => {
  render(<PassValidator />);
  const input = screen.getByLabelText('Ingrese su contraseña');
  const validateButton = screen.getByText('Validar');

  userEvent.type(input, '1234567');

  userEvent.click(validateButton);
  expect(screen.getByText('La contraseña debe tener al menos 8 caracteres')).toBeVisible();
})

test('pass must have at least one capital letter', () => {
  render(<PassValidator />);
  const input = screen.getByLabelText('Ingrese su contraseña');
  const validateButton = screen.getByText('Validar');

  userEvent.type(input, '1234567A');

  userEvent.click(validateButton);
  expect(screen.getByText('La contraseña tiene al menos una letra mayúscula')).toBeVisible();
})

test('if pass does not have at least one capital letter', () => {
  render(<PassValidator />);
  const input = screen.getByLabelText('Ingrese su contraseña');
  const validateButton = screen.getByText('Validar');

  userEvent.type(input, '1234567a');

  userEvent.click(validateButton);
  expect(screen.getByText('La contraseña debe tener al menos una letra mayúscula')).toBeVisible();
})

test('pass must have at least one lowercase letter', () => {
  render(<PassValidator />);
  const input = screen.getByLabelText('Ingrese su contraseña');
  const validateButton = screen.getByText('Validar');

  userEvent.type(input, '1234567a');

  userEvent.click(validateButton);
  expect(screen.getByText('La contraseña tiene al menos una letra minúscula')).toBeVisible();
})

test('if pass does not have at least one lowercase letter', () => {
  render(<PassValidator />);
  const input = screen.getByLabelText('Ingrese su contraseña');
  const validateButton = screen.getByText('Validar');

  userEvent.type(input, '1234567A');

  userEvent.click(validateButton);
  expect(screen.getByText('La contraseña debe tener al menos una letra minúscula')).toBeVisible();
})

test('pass must have at least one number', () => {
  render(<PassValidator />);
  const input = screen.getByLabelText('Ingrese su contraseña');
  const validateButton = screen.getByText('Validar');

  userEvent.type(input, '1aaaaaaa');

  userEvent.click(validateButton);
  expect(screen.getByText('La contraseña tiene al menos un número')).toBeVisible();
})

test('if pass does not have at least one number', () => {
  render(<PassValidator />);
  const input = screen.getByLabelText('Ingrese su contraseña');
  const validateButton = screen.getByText('Validar');

  userEvent.type(input, 'aaaaaaa');

  userEvent.click(validateButton);
  expect(screen.getByText('La contraseña debe tener al menos un número')).toBeVisible();
})

test('pass must have at least one special character', () => {
  render(<PassValidator />);
  const input = screen.getByLabelText('Ingrese su contraseña');
  const validateButton = screen.getByText('Validar');

  userEvent.type(input, '1aaaaaaa!');

  userEvent.click(validateButton);
  expect(screen.getByText('La contraseña tiene al menos un caracter especial')).toBeVisible();
})

test('if pass does not have at least one special character', () => {
  render(<PassValidator />);
  const input = screen.getByLabelText('Ingrese su contraseña');
  const validateButton = screen.getByText('Validar');

  userEvent.type(input, '1aaaaaaa');

  userEvent.click(validateButton);
  expect(screen.getByText('La contraseña debe tener al menos un caracter especial')).toBeVisible();
})