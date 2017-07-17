import * as sessionAPIUtil from '../util/session_api_util';
import { receiveErrors, clearErrors } from './errors_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const login = user => dispatch => {
  return sessionAPIUtil.login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .then(() => dispatch(clearErrors()))
    .catch(errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const logout = () => dispatch => {
  return sessionAPIUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)))
    .then(() => dispatch(clearErrors()))
    .catch(errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const signup = user => dispatch => {
  return sessionAPIUtil.signup(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .then(() => dispatch(clearErrors()))
    .catch(errors => dispatch(receiveErrors(errors.responseJSON)));
};
