import merge from 'lodash/merge';
import { RECEIVE_NOTES, RECEIVE_NOTE, RECEIVE_UPDATED_NOTE } from '../actions/note_actions';
import { CLEAR_STORE } from '../actions/session_actions';

const defaultState = {
  allIds: [],
  byId: {}
};

const NotesReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  switch(action.type) {
    case RECEIVE_NOTES:
      nextState = merge({}, defaultState);
      action.notes.forEach(note => {
        nextState.byId[note.id] = note;
        nextState.allIds.push(note.id);
      });
      return nextState;
    case RECEIVE_NOTE:
      nextState.byId[action.note.id] = action.note;
      nextState.allIds.unshift(action.note.id);
      return nextState;
    case RECEIVE_UPDATED_NOTE:
      nextState.byId[action.note.id] = action.note;
      if (nextState.allIds.includes(action.note.id)) {
        const repeatedIndex = nextState.allIds.indexOf(action.note.id);
        nextState.allIds.splice(repeatedIndex, 1);
      }
      nextState.allIds.unshift(action.note.id);
      return nextState;
    case CLEAR_STORE:
      return defaultState;
    default:
      return state;
  }
};

export default NotesReducer;
