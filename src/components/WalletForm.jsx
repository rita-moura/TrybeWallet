import React, { Component } from 'react';
import Prop from 'prop-types';
import { connect } from 'react-redux';
import { walletFetch } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(walletFetch());
  }

  render() {
    const { currencies } = this.props;
    console.log(currencies);
    return (
      <form>
        <input
          type="text"
          data-testid="value-input"
          placeholder="Despesas"
        />

        <input
          type="text"
          data-testid="description-input"
          placeholder="Descrição"
        />

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
