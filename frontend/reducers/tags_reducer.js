import merge from 'lodash/merge';
import { RECEIVE_TAGS, RECEIVE_TAG, RECEIVE_TAG_DETAIL } from '../actions/tag_actions';
import { CLEAR_STORE } from '../actions/session_actions';

const defaultState = {
  allNames: [],
  byName: {}
};

const TagsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  switch(action.type) {
    case RECEIVE_TAGS:
      nextState = merge({}, defaultState);
      action.tags.forEach(tag => {
        nextState.byName[tag.name] = tag;
        nextState.allNames.push(tag.name);
      });
      return nextState;
    case RECEIVE_TAG_DETAIL:
      return action.tag;
    case CLEAR_STORE:
      return defaultState;
    default:
      return state;
  }
};

export default TagsReducer;
