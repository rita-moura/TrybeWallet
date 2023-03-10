export const USER_EMAIL = 'USER_EMAIL';
export const WALLET_DATA = 'WALLET_DATA';
export const WALLET_SUCESS = 'WALLET_SUCESS';
export const WALLET_ERRO = 'WALLET_ERRO';
export const WALLET_EXPENSES_INFO = 'WALLET_EXPENSES_INFO';
export const WALLET_EXPENSES = 'WALLET_EXPENSES';
export const SUM_CURRENCY = 'SUM_CURRENCY';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';
export const START_EDIT = 'START_EDIT';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export function userEmail(payload) {
  return {
    type: USER_EMAIL,
    payload,
  };
}

export function walletData() {
  return {
    type: WALLET_DATA,
  };
}

export function walletCurrencies(currency) {
  return {
    type: WALLET_SUCESS,
    payload: Object.keys(currency),
  };
}

export function sumCurrencies() {
  return {
    type: SUM_CURRENCY,
  };
}

export function deleteExpenses(expenses, id) {
  return {
    type: DELETE_EXPENSES,
    payload: expenses.filter((expense) => expense.id !== id),
  };
}

export function startEdit(id) {
  return {
    type: START_EDIT,
    payload: id,
  };
}

export function editExpense(input) {
  return {
    type: EDIT_EXPENSE,
    payload: input,
  };
}

export function walletFetch() {
  return async (dispatch) => {
    dispatch(walletData());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    dispatch(walletCurrencies(data));
  };
}

export function walletFetchExpense(info) {
  return async (dispatch, getState) => {
    dispatch(walletData());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    dispatch({
      type: WALLET_EXPENSES_INFO,
      payload: {
        id: getState().wallet.expenses.length,
        info,
        data,
      },
    });
    dispatch(sumCurrencies());
  };
}
