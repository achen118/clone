import * as notebooksAPIUtil from '../util/notebooks_api_util';
import { receiveErrors, clearErrors } from './error_actions';
import { receiveNotes, receiveNoteDetail } from './note_actions';

export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const RECEIVE_NOTEBOOK_DETAIL = "RECEIVE_NOTEBOOK_DETAIL";

export const receiveNotebooks = notebooks => {
  return {
    type: RECEIVE_NOTEBOOKS,
    notebooks
  };
};

export const receiveNotebookDetail = notebook => {
  return {
    type: RECEIVE_NOTEBOOK_DETAIL,
    notebook
  };
};

export const addNotebook = notebook => dispatch => {
  return notebooksAPIUtil.addNotebook(notebook)
    .then(newNotebook => {
      dispatch(fetchAllNotebooks());
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const updateNotebook = notebook => dispatch => {
  return notebooksAPIUtil.updateNotebook(notebook)
    .then(updatedNotebook => {
      dispatch(fetchAllNotebooks());
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const deleteNotebook = notebook => dispatch => {
  return notebooksAPIUtil.deleteNotebook(notebook)
    .then(deletedNotebook => {
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const fetchAllNotebooks = () => dispatch => {
  return notebooksAPIUtil.fetchAllNotebooks()
    .then(notebooks => {
      dispatch(receiveNotebooks(notebooks));
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const fetchNotesFromNotebook = notebookId => dispatch => {
  return notebooksAPIUtil.fetchNotesFromNotebook(notebookId)
    .then(notes => {
      dispatch(receiveNotes(notes));
      dispatch(receiveNoteDetail(null));
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};
