import merge from 'lodash/merge';
import { RECEIVE_NOTES, RECEIVE_NOTE } from '../actions/note_actions';

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
      console.log(nextState);
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
