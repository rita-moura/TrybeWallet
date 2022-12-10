// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';

export function saveEmail(email) {
  return {
    type: USER_EMAIL,
    payload: email,
  };
}
