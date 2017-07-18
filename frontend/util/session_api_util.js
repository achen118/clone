export const signup = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {
      user: {
        user_credential: user.userCredential,
        password: user.password
      }
    }
  });
};

export const login = user => {
    return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {
      user: {
        user_credential: user.userCredential,
        password: user.password
      }
    }
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
};
