import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, sumTotal } = this.props;
    return (
      <div>
        <h3 data-testid="email-field">{`Usuário: ${email}`}</h3>
        <p data-testid="total-field">{sumTotal.toFixed(2)}</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  sumTotal: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  sumTotal: state.wallet.sumTotal,
});

export default connect(mapStateToProps)(Header);
