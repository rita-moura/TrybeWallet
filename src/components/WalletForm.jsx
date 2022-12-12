import React, { Component } from 'react';
import Prop from 'prop-types';
import { connect } from 'react-redux';
import { walletFetch } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      value: '0,00',
      description: '',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(walletFetch());
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    // const {  } = this.state;
    dispatch(action(this.state));
  };

  render() {
    const { value, description } = this.state;
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

        <select data-testid="currency-input">
          {currencies.map((currency) => (
            <option key={ currency } value="currency">{ currency }</option>
          ))}
        </select>

        <select data-testid="method-input">
          <option value="dinheiro">Dinheiro</option>
          <option value="credito">Cartão de crédito</option>
          <option value="debito">Cartão de débito</option>
        </select>

        <select data-testid="tag-input">
          <option value="alimentação">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saúde">Saúde</option>
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
