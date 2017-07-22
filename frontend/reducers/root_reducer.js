import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import NotesReducer from './notes_reducer';
import NoteReducer from './note_reducer';
import NotebooksReducer from './notebooks_reducer';

const RootReducer = combineReducers({
  currentUser: SessionReducer,
  notes: NotesReducer,
  note: NoteReducer,
  notebooks: NotebooksReducer,
  errors: ErrorsReducer
});

export default RootReducer;
