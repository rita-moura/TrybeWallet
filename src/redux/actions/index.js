export const USER_EMAIL = 'USER_EMAIL';
export const WALLET_DATA = 'WALLET_DATA';
export const WALLET_SUCESS = 'WALLET_SUCESS';
export const WALLET_ERRO = 'WALLET_ERRO';
export const WALLET_EXPENSES_INFO = 'WALLET_EXPENSES_INFO';
export const WALLET_EXPENSES = 'WALLET_EXPENSES';
export const SUM_CURRENCY = 'SUM_CURRENCY';

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

export function walleError(error) {
  return {
    type: WALLET_ERRO,
    error,
  };
}

export function walletFetch() {
  return async (dispatch) => {
    try {
      dispatch(walletData());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      delete data.USDT;
      dispatch(walletCurrencies(data));
    } catch (error) {
      dispatch(walleError(error));
    }
  };
}

export function walletFetchExpense(info) {
  return async (dispatch, getState) => {
    try {
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
    } catch (error) {
      dispatch(walleError(error));
    }
  };
}
