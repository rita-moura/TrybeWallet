import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userEmail } from '../redux/actions';

const MIN_LENGTH = 5;

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  validateLogin = () => {
    const { password, email } = this.state;
    const regex = /\S+@\S+\.\S+/;
    const verifyEmail = regex.test(email);
    const verifyPassword = password.length > MIN_LENGTH;
    return verifyEmail && verifyPassword;
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(userEmail(email));
    history.push('/carteira');
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={ this.handleClick }>
        <div>
          <label htmlFor="email-input">
            Email:
            <input
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
              id="email-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="password-input">
            Senha:
            <input
              type="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
              data-testid="password-input"
              id="password-input"
            />
          </label>
        </div>
        <button
          type="button"
          disabled={ !this.validateLogin() }
          onClick={ this.handleClick }
        >
          Entrar

        </button>
      </form>

    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
