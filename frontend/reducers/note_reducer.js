import merge from 'lodash/merge';
import { RECEIVE_NOTE, RECEIVE_NOTE_DETAIL } from '../actions/note_actions';

const NoteReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NOTE_DETAIL:
      return action.note;
    case RECEIVE_NOTE:
      return action.note;
    default:
      return state;
  }
};

export default NoteReducer;
