// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
export const WALLET_INFO = 'WALLET_INFO';

export function userEmail(payload) {
  return {
    type: USER_EMAIL,
    payload,
  };
}

export function walletInfo(infoWallet) {
  return {
    type: WALLET_INFO,
    payload: infoWallet,
  };
}
