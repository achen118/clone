import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      nextState.errors.concat(action.errors);
      return nextState;
    case CLEAR_ERRORS:
      nextState.errors = [];
      return nextState;
    default:
      return state;
  }
};

export default ErrorsReducer;
