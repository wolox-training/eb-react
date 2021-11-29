/* eslint-disable @typescript-eslint/naming-convention */

import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

import Home from 'screens/Home';

import { SignUp } from './index';

import '@testing-library/jest-dom';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key, i18n: 'en' })
}));

jest.mock('../../config/api.js', () => ({
  baseUrl: process.env.REACT_APP_API_BASE_URL
}));

describe('<SignUp />', () => {
  test('Render inputs', async () => {
    render(<SignUp />);
    const inputs = await screen.findAllByRole('input');
    const signUpInput = 5;
    expect(inputs.length).toEqual(signUpInput);
  });

  test('All inputs filled', async () => {
    render(<SignUp />);
    fireEvent.submit(screen.getByRole('form'));
    expect(await screen.findByRole('form')).toBeInvalid();
  });

  test('Has some message error', async () => {
    render(<SignUp />);
    fireEvent.submit(screen.getByRole('form'));
    const errorMessagesInput = 5;
    expect((await screen.findAllByRole('message-error')).length).toBeLessThanOrEqual(errorMessagesInput);
  });

  test('Fail filled form', async () => {
    render(<SignUp />);
    fireEvent.submit(screen.getByRole('form'));
    const errorMessagesInput = 5;
    expect((await screen.findAllByRole('message-error')).length).toBeLessThanOrEqual(errorMessagesInput);
  });

  test("Wrong email field, can't send the form", async () => {
    const data: Record<string, string> = {
      first_name: 'George',
      last_name: 'Washington',
      email: 'george@',
      password: '123456',
      password_confirmation: '123456'
    };

    render(<SignUp />);

    (await screen.findAllByRole('input')).forEach((input: HTMLElement) => {
      const ariaLabel = input.getAttribute('aria-label');
      if (ariaLabel) {
        fireEvent.change(input, {
          target: { value: data[ariaLabel] }
        });
      }
    });

    fireEvent.submit(screen.getByRole('form'));
    expect(await screen.findByRole('form')).toBeInvalid();
  });

  test('Redirect login', async () => {
    const history = createMemoryHistory({ initialEntries: ['/sign_up'] });

    const data: Record<string, string> = {
      first_name: 'George',
      last_name: 'Washington',
      email: 'george@mail.com',
      password: '123456',
      password_confirmation: '123456',
      locale: 'en'
    };

    render(
      <Router history={history}>
        <Home />
      </Router>
    );

    const updateValueInput = (input: HTMLElement) => {
      const ariaLabel = input.getAttribute('aria-label');
      if (ariaLabel) {
        fireEvent.change(input, {
          target: { value: data[ariaLabel] }
        });
      }
    };

    await act(async () => {
      screen.getAllByRole('input').forEach((input: HTMLElement) => updateValueInput(input));
      fireEvent.click(await screen.findByRole('button-submit'));
    });

    expect(window.location.pathname).toBe('/');
  });
});
