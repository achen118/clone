import * as notesAPIUtil from '../util/notes_api_util';
import { receiveErrors, clearErrors } from './error_actions';
import { fetchAllNotebooks } from './notebook_actions';
import { fetchAllTags } from './tag_actions';

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const RECEIVE_NOTE_DETAIL = "RECEIVE_NOTE_DETAIL";
export const RECEIVE_UPDATED_NOTE = "RECEIVE_UPDATED_NOTE";

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

export const receiveUpdatedNote = note => {
  return {
    type: RECEIVE_UPDATED_NOTE,
    note
  };
};

export const receiveNoteDetail = note => {
  return {
    type: RECEIVE_NOTE_DETAIL,
    note
  };
};

export const addNote = note => dispatch => {
  return notesAPIUtil.addNote(note)
    .then(newNote => {
      dispatch(receiveNote(newNote));
      dispatch(fetchAllNotebooks());
      dispatch(fetchAllTags());
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const updateNote = note => dispatch => {
  return notesAPIUtil.updateNote(note)
    .then(updatedNote => {
      dispatch(receiveUpdatedNote(updatedNote));
      dispatch(fetchAllNotebooks());
      dispatch(fetchAllTags());
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const deleteNote = note => dispatch => {
  return notesAPIUtil.deleteNote(note)
    .then(deletedNote => {
      dispatch(receiveNoteDetail(null));
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const fetchAllNotes = () => dispatch => {
  return notesAPIUtil.fetchAllNotes()
    .then(notes => {
      dispatch(receiveNotes(notes));
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const fetchSingleNote = noteId => dispatch => {
  return notesAPIUtil.fetchSingleNote(noteId)
    .then(note => {
      dispatch(receiveNoteDetail(note));
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};
