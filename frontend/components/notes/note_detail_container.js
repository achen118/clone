import { connect } from 'react-redux';
import NoteDetail from './note_detail';
import { fetchSingleNote } from '../../actions/note_actions';

const mapStateToProps = state => {
  return {

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
)(NoteDetail);
