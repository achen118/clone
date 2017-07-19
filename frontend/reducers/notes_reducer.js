import merge from 'lodash/merge';
import { RECEIVE_NOTES, RECEIVE_NOTE, REMOVE_NOTE } from '../actions/note_actions';

const defaultState = {
  allIds: [],
  byId: {}
};

const NotesReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const nextState = merge({}, state);
  switch(action.type) {
    case RECEIVE_NOTES:
      nextState.byId = action.notes;
      nextState.allIds = Object.keys(action.notes);
      return nextState;
    case RECEIVE_NOTE:
      let note = { [action.note.id]: action.note };
      nextState.byId = merge({}, nextState.byId, note);
      nextState.allIds.push(action.note.id);
      return nextState;
    case REMOVE_NOTE:
      const noteId = action.note.id;
      const index = nextState.allIds.indexOf(noteId);
      nextState.allIds = nextState.allIds.slice(0, index)
        .concat(nextState.allIds.slice(index + 1));
      delete nextState.byId[noteId];
      return nextState;
    default:
      return state;
  }
};

export default NotesReducer;
