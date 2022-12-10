import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <section>
        <h3 data-testid="email-field">{`Usuário: ${email}`}</h3>
        <p data-testid="total-field">Valor: 0</p>
        <p data-testid="header-currency-field">Moeda: BRL</p>
      </section>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.user.email,
});

export default connect(mapStateToProps)(Header);
