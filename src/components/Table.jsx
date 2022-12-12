import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <table width="100%" border="1">
        <tr><td>Descrição</td></tr>
        <tr><td>Tag</td></tr>
        <tr><td>Método de pagamento</td></tr>
        <tr><td>Valor</td></tr>
        <tr><td>Moeda</td></tr>
        <tr><td>Câmbio utilizado</td></tr>
        <tr><td>Valor convertido</td></tr>
        <tr><td>Moeda de conversão</td></tr>
        <tr><td>Editar/Excluir</td></tr>
      </table>
    );
  }
}

export default Table;
