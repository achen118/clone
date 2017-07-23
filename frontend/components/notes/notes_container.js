import { connect } from 'react-redux';
import Notes from './notes';
import { fetchSingleNote } from '../../actions/note_actions';

const mapStateToProps = state => {
  return {
    notes: state.notes,
    note: state.note
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleNote: noteId => dispatch(fetchSingleNote(noteId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes);
