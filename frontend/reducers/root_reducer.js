import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import NotesReducer from './notes_reducer';

const RootReducer = combineReducers({
  currentUser: SessionReducer,
  notes: NotesReducer,
  errors: ErrorsReducer
});

export default RootReducer;
