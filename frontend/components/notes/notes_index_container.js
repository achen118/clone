import { connect } from 'react-redux';
import { fetchAllNotes } from '../../actions/note_actions';
import { fetchNotesFromNotebook } from '../../actions/notebook_actions';
import NotesIndex from './notes_index';

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.notes,
    notebooks: state.notebooks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllNotes: () => dispatch(fetchAllNotes()),
    fetchNotesFromNotebook: notebookId =>
      dispatch(fetchNotesFromNotebook(notebookId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex);
