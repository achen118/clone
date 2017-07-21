import merge from 'lodash/merge';
import { RECEIVE_NOTES, RECEIVE_NOTE, RECEIVE_UNCHANGED_NOTE } from '../actions/note_actions';

const defaultState = {
  allIds: [],
  byId: {}
};

const NotesReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const nextState = merge({}, state);
  switch(action.type) {
    case RECEIVE_NOTES:
      action.notes.forEach(note => {
        nextState.byId[note.id] = note;
      });
      nextState.allIds = Object.keys(nextState.byId);
      return nextState;
    case RECEIVE_NOTE:
      nextState.byId[action.note.id] = action.note;
      nextState.allIds.unshift(action.note.id);
      return nextState;
    default:
      return state;
  }
};

export default NotesReducer;
