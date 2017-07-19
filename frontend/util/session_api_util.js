export const signup = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {
      user: {
        email: user.userCredential,
        password: user.password
      }
    }
  });
};

export const signin = user => {
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
