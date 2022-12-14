import {
  DELETE_EXPENSES,
  EDIT_EXPENSE,
  START_EDIT,
  SUM_CURRENCY,
  WALLET_DATA,
  WALLET_EXPENSES_INFO,
  WALLET_SUCESS,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  sumTotal: 0,
};

const reducer = (state) => {
  const { expenses } = state;
  const sum = expenses.reduce((acc, curr) => {
    const cotação = +curr.exchangeRates[curr.currency].ask * +curr.value;
    return cotação + acc;
  }, 0);
  return sum;
};

const edit = (state, input) => {
  const { expenses } = state;
  const index = expenses.findIndex((element) => element.id === state.idToEdit);
  expenses[index].value = input.value;
  expenses[index].description = input.description;
  expenses[index].currency = input.currency;
  expenses[index].method = input.method;
  expenses[index].tag = input.tag;
  return expenses;
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_DATA:
    return {
      ...state,
    };
  case WALLET_SUCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  case WALLET_EXPENSES_INFO:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          ...action.payload.info,
          id: action.payload.id,
          exchangeRates: action.payload.data,
        },
      ],
    };
  case SUM_CURRENCY:
    return {
      ...state,
      sumTotal: reducer(state),
    };
  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: action.payload,
    };
  case START_EDIT:
    return {
      ...state,
      editor: true,
      idToEdit: action.payload,
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: [
        ...edit(state, action.payload),
      ],
      editor: false,
    };
  default:
    return state;
  }
}

export default wallet;
