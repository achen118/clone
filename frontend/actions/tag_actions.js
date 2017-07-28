import * as tagsAPIUtil from '../util/tags_api_util';
import { receiveErrors, clearErrors } from './error_actions';
import { receiveNotes, receiveNoteDetail } from './note_actions';

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const RECEIVE_TAG_DETAIL = "RECEIVE_TAG_DETAIL";

export const receiveTags = tags => {
  return {
    type: RECEIVE_TAGS,
    tags
  };
};

export const receiveTag = tag => {
  return {
    type: RECEIVE_TAG,
    tag
  };
};

export const receiveTagDetail = tag => {
  return {
    type: RECEIVE_TAG_DETAIL,
    tag
  };
};

export const addTag = tag => dispatch => {
  return tagsAPIUtil.addTag(tag)
    .then(newTag => {
      dispatch(receiveTag(newTag));
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const addTagToNote = (noteId, tagName) => dispatch => {
  return tagsAPIUtil.addTagToNote(noteId, tagName)
    .then(() => {
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const updateTag = (oldTagName, newTag) => dispatch => {
  return tagsAPIUtil.updateTag(oldTagName, newTag)
    .then(updatedTag => {
      dispatch(receiveTag(updatedTag));
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const deleteTag = tag => dispatch => {
  return tagsAPIUtil.deleteTag(tag)
    .then(deletedTag => {
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const deleteTagFromNote = (noteId, tagName) => dispatch => {
  return tagsAPIUtil.deleteTagFromNote(noteId, tagName)
    .then(() => {
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const fetchAllTags = () => dispatch => {
  return tagsAPIUtil.fetchAllTags()
    .then(tags => {
      dispatch(receiveTags(tags));
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const fetchNotesFromTag = tagName => dispatch => {
  return tagsAPIUtil.fetchNotesFromTag(tagName)
    .then(notes => {
      dispatch(receiveNotes(notes));
      dispatch(receiveNoteDetail(null));
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.responseJSON)));
};
