import * as notesAPIUtil from '../util/notes_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";

export const receiveNotes = notes => {
  return {
    type: RECEIVE_NOTES,
    notes
  };
};

export const receiveNote = note => {
  return {
    type: RECEIVE_NOTE,
    note
  };
};

export const removeNote = note => {
  return {
    type: REMOVE_NOTE,
    note
  };
};

export const addNote = note => dispatch => {
  return notesAPIUtil.addNote(note)
    .then(newNote => {
      dispatch(receiveNote(newNote));
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const updateNote = note => dispatch => {
  return notesAPIUtil.updateNote(note)
    .then(updatedNote => {
      dispatch(receiveNote(updatedNote));
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const deleteNote = note => dispatch => {
  return notesAPIUtil.deleteNote(note)
    .then(deletedNote => {
      dispatch(deleteNote(deletedNote));
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};
