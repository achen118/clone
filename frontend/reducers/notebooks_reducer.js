import merge from 'lodash/merge';
import { RECEIVE_NOTEBOOKS, RECEIVE_NOTEBOOK } from '../actions/notebook_actions';

const defaultState = {
  allIds: [],
  byId: {}
};

const NotebooksReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const nextState = merge({}, state);
  switch(action.type) {
    case RECEIVE_NOTEBOOKS:
      action.notebooks.forEach(notebook => {
        nextState.byId[notebook.id] = notebook;
      });
      nextState.allIds = Object.keys(nextState.byId);
      return nextState;
    case RECEIVE_NOTEBOOK:
      nextState.byId[action.notebook.id] = action.notebook;
      nextState.allIds.unshift(action.notebook.id);
      return nextState;
    default:
      return state;
  }
};

export default NotebooksReducer;
