import * as notebooksAPIUtil from '../util/notebooks_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";

export const receiveNotebooks = notebooks => {
  return {
    type: RECEIVE_NOTEBOOKS,
    notebooks
  };
};

export const receiveNotebook = notebook => {
  return {
    type: RECEIVE_NOTEBOOK,
    notebook
  };
};

export const addNotebook = notebook => dispatch => {
  return notebooksAPIUtil.addNotebook(notebook)
    .then(newNotebook => {
      dispatch(receiveNotebook(newNotebook));
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const updateNotebook = notebook => dispatch => {
  return notebooksAPIUtil.updateNotebook(notebook)
    .then(updatedNotebook => {
      dispatch(receiveNotebook(updatedNotebook));
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const deleteNote = notebook => dispatch => {
  return notebooksAPIUtil.deleteNotebook(notebook)
    .then(deletedNote => {
      dispatch(receiveNote(null));
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const fetchAllNotes = () => dispatch => {
  return notebooksAPIUtil.fetchAllNotes()
    .then(notes => {
      dispatch(receiveNotes(notes));
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const fetchSingleNote = noteId => dispatch => {
  return notebooksAPIUtil.fetchSingleNote(noteId)
    .then(notebook => {
      dispatch(receiveNoteDetail(note));
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};
