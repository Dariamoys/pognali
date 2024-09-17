const AUTH_TOKEN_NAME = 'pognali-card-token';

export type Token = string;

export const saveToken = (token: Token): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(AUTH_TOKEN_NAME, token);
  }
};

export const getToken = ():Token => {
  if (typeof window === 'undefined') {
    return '';
  }
  const token = window?.localStorage?.getItem(AUTH_TOKEN_NAME);
  return token ?? '';
};
