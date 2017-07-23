import { RECEIVE_CURRENT_USER, CLEAR_STORE } from '../actions/session_actions';
import merge from 'lodash/merge';

const SessionReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser;
    case CLEAR_STORE:
      return null;
    default:
      return state;
  }
};

export default SessionReducer;
