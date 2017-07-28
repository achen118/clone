import { connect } from 'react-redux';
import Note from './note';
import { updateNote, fetchSingleNote } from '../../actions/note_actions';
import { withRouter } from 'react-router-dom';
import { addTagToNote, deleteTagFromNote } from '../../actions/tag_actions';

const mapStateToProps = state => {
  return {
    notebooks: state.notebooks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNote: note => dispatch(updateNote(note)),
    fetchSingleNote: noteId => dispatch(fetchSingleNote(noteId)),
    addTagToNote: (noteId, tagName) => dispatch(addTagToNote(noteId, tagName)),
    deleteTagFromNote: (noteId, tagName) => dispatch(deleteTagFromNote(noteId, tagName))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Note));
