import { WALLET_DATA, WALLET_ERRO, WALLET_SUCESS } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada,
  isLoading: false,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_DATA:
    return {
      ...state,
      isLoading: true,
    };
  case WALLET_SUCESS:
    return {
      ...state,
      currencies: action.payload,
      isLoading: false,
    };
  case WALLET_ERRO:
    return {
      ...state,
      erro,
      isLoading: false,
    };
  default:
    return state;
  }
}

export default wallet;
