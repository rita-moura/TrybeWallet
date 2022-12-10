export const USER_EMAIL = 'USER_EMAIL';
export const WALLET_DATA = 'WALLET_DATA';
export const WALLET_SUCESS = 'WALLET_SUCESS';
export const WALLET_ERRO = 'WALLET_ERRO';

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

export function walletInfo(currency) {
  return {
    type: WALLET_SUCESS,
    payload: Object.keys(currency),
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
      dispatch(walletInfo(data));
    } catch (error) {
      dispatch(walleError(error));
    }
  };
}
