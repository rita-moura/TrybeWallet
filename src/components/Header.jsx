import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, sumTotal } = this.props;
    return (
      <section>
        <div>
          <h3 data-testid="email-field">{`Usuário: ${email}`}</h3>
          <p data-testid="total-field">{sumTotal.toFixed(2)}</p>
        </div>
        <p data-testid="header-currency-field">Moeda atual: BRL</p>
      </section>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  sumTotal: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  sumTotal: state.wallet.sumTotal,
});

export default connect(mapStateToProps)(Header);
