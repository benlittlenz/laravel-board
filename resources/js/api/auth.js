import client from './client';

export const login = ({ email, password }) => {
  console.log(email, password)
  return client('/api/v1/auth/login', { body: { email, password } })
    .then(({ data: user, meta: { token } }) => {
      console.log('blah')
      console.log(token)
      return { user, token };
    });
};

// eslint-disable-next-line camelcase
export const register = ({ email, name, password, password_confirmation }) => {
  return client('/api/v1/auth/register', { body: { email, name, password, password_confirmation } }
  ).then(({ data: user, meta: { token } }) => {
    return { user, token };
  });
};

export const forgotPassword = ({ email }) => {
  return client('/api/password/email', { body: { email } })
    .then(({ status }) => status);
};

// eslint-disable-next-line camelcase
export const resetPassword = ({ token, email, password, password_confirmation }) => {
  return client('/api/v1/auth/forgot-password', { body: { token, email, password, password_confirmation } })
    .then(({ status }) => status);
};

export const logout = () => {
  return client('/api/v1/auth/logout', { body: {} });
};

export const getUser = () => {
  return client('/api/v1/auth/me')
    .then(({ data }) => data)
    .catch(() => null);
};
