import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpenses, startEdit, sumCurrencies } from '../redux/actions';

const convertedValue = (value) => {
  const converted = +value.exchangeRates[value.currency].ask * +value.value;
  return converted.toFixed(2);
};

class Table extends Component {
  handleEdit = (id) => {
    const { dispatch } = this.props;
    dispatch(startEdit(id));
  };

  handleDelete = (expenses, id) => {
    const { dispatch } = this.props;
    dispatch(deleteExpenses(expenses, id));
    dispatch(sumCurrencies());
  };

  render() {
    const { expenses } = this.props;

    return (
      <table width="100%" border="1">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{Number(expense.value).toFixed(2)}</td>
                <td>{expense.currency}</td>
                <td>
                  {Number(expense.exchangeRates[expense.currency]
                    .ask).toFixed(2)}

                </td>
                <td>{convertedValue(expense)}</td>
                <td>{expense.exchangeRates[expense.currency].name}</td>
                <td>
                  <button
                    type="submit"
                    data-testid="edit-btn"
                    onClick={ () => this.handleEdit(expense.id) }
                  >
                    Editar

                  </button>
                  <button
                    type="submit"
                    data-testid="delete-btn"
                    onClick={ () => this.handleDelete(expenses, expense.id) }
                  >
                    Excluir

                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  ...state.wallet,
});

export default connect(mapStateToProps)(Table);
