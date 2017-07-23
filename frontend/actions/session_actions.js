import * as sessionAPIUtil from '../util/session_api_util';
import { receiveErrors, clearErrors } from './error_actions';
import { addNotebook } from './notebook_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const CLEAR_STORE = "CLEAR_STORE";

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const clearStore = () => {
  return {
    type: CLEAR_STORE
  };
};

export const signin = user => dispatch => {
  return sessionAPIUtil.signin(user)
    .then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    );
};

export const logout = () => dispatch => {
  return sessionAPIUtil.logout()
    .then(
      () => {
        dispatch(receiveCurrentUser(null));
        dispatch(clearStore());
        dispatch(clearErrors());
      }, errors => dispatch(receiveErrors(errors.responseJSON))
    );
};

export const signup = user => dispatch => {
  return sessionAPIUtil.signup(user)
    .then(currentUser => {
      dispatch(receiveCurrentUser(currentUser));
      dispatch(addNotebook(`${currentUser.username}'s notebook`));
    }, errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
