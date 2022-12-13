import React, { Component } from 'react';
import Prop from 'prop-types';
import { connect } from 'react-redux';
import { walletFetch, walletFetchExpense } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      value: '0',
      description: '',
      currency: 'USD',
      method: 'dinheiro',
      tag: 'alimentação',
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
    const { dispatch } = this.props;
    dispatch(walletFetchExpense(this.state));
    this.setState({
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;

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
          Adicionar despesa

        </button>

      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: Prop.string,
  dispatch: Prop.func,
}.isRequired;

const mapStateToProps = (state) => ({
  ...state.wallet,
});

export default connect(mapStateToProps)(WalletForm);
