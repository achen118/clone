import { connect } from 'react-redux';
import NotesIndexItem from './notes_index_item';
import { withRouter } from 'react-router-dom';
import { deleteNote } from '../../actions/note_actions';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteNote: note => dispatch(deleteNote(note))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndexItem));
