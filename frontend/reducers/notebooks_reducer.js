import merge from 'lodash/merge';
import { RECEIVE_NOTEBOOKS, RECEIVE_NOTEBOOK, RECEIVE_NOTEBOOK_DETAIL } from '../actions/notebook_actions';
import { CLEAR_STORE } from '../actions/session_actions';

const defaultState = {
  allIds: [],
  byId: {}
};

const NotebooksReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  switch(action.type) {
    case RECEIVE_NOTEBOOKS:
      nextState = merge({}, defaultState);
      action.notebooks.forEach(notebook => {
        nextState.byId[notebook.id] = notebook;
        nextState.allIds.push(notebook.id);
      });
      return nextState;
    case RECEIVE_NOTEBOOK_DETAIL:
      return action.notebook;
    case CLEAR_STORE:
      return defaultState;
    default:
      return state;
  }
};

export default NotebooksReducer;
