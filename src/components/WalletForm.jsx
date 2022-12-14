import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  editExpense, sumCurrencies, walletFetch, walletFetchExpense } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(walletFetch());
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleClick = (event) => {
    event.preventDefault();
    const { dispatch, editor } = this.props;

    if (editor) {
      dispatch(editExpense(this.state));
      dispatch(sumCurrencies());
    } else {
      dispatch(walletFetchExpense(this.state));
    }
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies, editor } = this.props;

    return (
      <form onSubmit={ this.handleClick }>
        <label htmlFor="value-input">
          Valor:
          <input
            type="text"
            data-testid="value-input"
            id="value-input"
            value={ value }
            name="value"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <input
            type="text"
            data-testid="description-input"
            id="description-input"
            value={ description }
            name="description"
            onChange={ this.handleChange }
          />
        </label>

        <select
          data-testid="currency-input"
          onChange={ this.handleChange }
          value={ currency }
          name="currency"
        >
          {currencies.map((coin) => (
            <option key={ coin } value={ coin }>{ coin }</option>
          ))}
        </select>

        <select
          data-testid="method-input"
          onChange={ this.handleChange }
          value={ method }
          name="method"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>

        <select
          data-testid="tag-input"
          onChange={ this.handleChange }
          value={ tag }
          name="tag"
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>

        <button
          type="submit"
          onClick={ this.handleClick }
        >
          {
            editor ? 'Editar despesa' : 'Adicionar despesa'
          }
        </button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.string,
  dispatch: PropTypes.func,
  editor: PropTypes.bool,
}.isRequired;

const mapStateToProps = (state) => ({
  ...state.wallet,
});

export default connect(mapStateToProps)(WalletForm);
