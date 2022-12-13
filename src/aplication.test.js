import React from 'react';
// import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './tests/helpers/renderWith';
import Login from './pages/Login';
// import App from './App';
import Wallet from './pages/Wallet';

describe('Testa a página de login', () => {
  test('Testa se contém as informações corretas na página', () => {
    renderWithRouterAndRedux(<Login />);
    const emailElement = screen.getByRole('textbox', {
      name: /email:/i,
    });
    expect(emailElement).toBeInTheDocument();

    const passwordElement = screen.getByLabelText(/senha:/i);
    expect(passwordElement).toBeInTheDocument();
  });
  test('Testa se o botão de entrar funciona corretamente', () => {
    renderWithRouterAndRedux(<Login />);
    const button = screen.getByRole('button', {
      name: /entrar/i,
    });
    expect(button).toBeInTheDocument();
  });
});

describe('Testa a página Wallet', () => {
  test('Testa se o componente Header rederiza as informações corretas', () => {
    renderWithRouterAndRedux(<Wallet />);

    const emailUser = screen.getByTestId('email-field');
    expect(emailUser).toBeInTheDocument();

    const coin = screen.getByText(/moeda atual: brl/i);
    expect(coin).toBeInTheDocument();
  });

  test('Testa se o componente WalletForm renderiza as informações corretamente', () => {
    renderWithRouterAndRedux(<Wallet />);

    const inputValue = screen.getByRole('textbox', {
      name: /valor:/i,
    });
    const inputDescription = screen.getByRole('textbox', {
      name: /descrição:/i,
    });
    const currencyInput = screen.getByRole('columnheader', {
      name: /câmbio utilizado/i,
    });
    const buttonAdd = screen.getByRole('button', {
      name: /adicionar despesa/i,
    });

    expect(inputValue).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();
    expect(currencyInput).toBeInTheDocument();
    expect(buttonAdd).toBeInTheDocument();
  });
  test('Testa se as informações estão corretas', () => {
    renderWithRouterAndRedux(<Wallet />);

    const table = screen.getByRole('columnheader', {
      name: /descrição/i,
    });

    expect(table).toBeInTheDocument();
  });
});
